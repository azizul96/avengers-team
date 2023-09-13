

const Card = ({actor, HandleSelectActor}) => {
    const {name, age, image, role, salary, country} = actor
    return (
        <div className="border-2 border-red-600 rounded-lg text-center">
            <div className="flex justify-center my-5">
                <img className=" rounded-full border border-stone-50" src={image} alt="" />
            </div>
            <h1 className="text-3xl font-bold mb-3">{name}</h1>
            <h2 className=" font-bold mt-2">{country}</h2>
            <p className="font-bold mt-2">Age: {age}</p>
            <div className="flex justify-around my-3 font-semibold">
                <p> Salary: ${salary}</p>
                <p>Role: {role}</p>
            </div>
            <button onClick={()=> HandleSelectActor(actor)} className="btn btn-md btn-error mb-4 text-white">Select</button>
        </div>
    );
};

export default Card;