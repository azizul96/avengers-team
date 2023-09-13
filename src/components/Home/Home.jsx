import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";


const Home = () => {
    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors ] = useState([]);
    
    const [remaining, setRemaining] = useState(0)
    const [totalCost, setTotalCost] = useState(0)


    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllActors(data))
    },[])
    
    const HandleSelectActor = (actor) =>{
        const isExist = selectedActors.find((item) => item.id == actor.id)
        let count = actor.salary
        
        if(isExist){
            return alert('Already Booked')
        }
        else{
            selectedActors.forEach((item) => {
                count = count + item.salary
            })
            const totalRemaining = 20000 - count;

            

            if(count > 20000){
                return alert('Insufficient Balance')
            }
            setTotalCost(count)
            setRemaining(totalRemaining);

            const newSelectedActors = [...selectedActors, actor]
            setSelectedActors(newSelectedActors)
        }
        
    }

    return (
        <div className="md:flex  gap-5">
            <div className=" md:w-2/3 text-white grid  grid-cols-1 md:grid-cols-2 gap-5 my-10">
                {
                    allActors.map(actor => <Card key={actor.id} actor={actor} HandleSelectActor={HandleSelectActor}></Card>)
                    
                }
            </div>
            <div className=" md:w-1/3 ">
                <Cart selectedActors={selectedActors} remaining={remaining} totalCost={totalCost}></Cart>
            </div>
        </div>
    );
};

export default Home;