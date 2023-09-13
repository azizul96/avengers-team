
const Cart = ({selectedActors, remaining, totalCost}) => {
    
    return (
        <div className=" text-white mt-10 text-center">
            <div className="border-2 border-red-600 rounded-lg mb-5 ">
                <h1 className="">Total Person: {selectedActors.length}</h1>
            </div>
            <div className="border-2 border-red-600 rounded-lg mb-5">
                <h2>Total Cost:  ${totalCost}</h2>
            </div>
            <div className="border-2 border-red-600 rounded-lg mb-5">
                <h2>Remaining:  ${remaining}</h2>
            </div>

            {
               selectedActors.map((actor) => (<p className=" text-xl font-bold" key={actor.id}>{actor.name}</p>)) 
            }
        </div>
    );
};

export default Cart;