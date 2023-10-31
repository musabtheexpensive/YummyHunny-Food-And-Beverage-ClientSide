const ExtraFoodCard = ({food}) => {
  const {
    name,
    type,
    price,
    shortDescription,
    rating,
  } = food;
  return (
    <div>
      <div className=" shadow-xl "> {/* className="card lg:card-side bg-base-100 shadow-xl" */}
        <figure>
          <h1 className="font-extrabold text-4xl text-red-400">Food Name :{name}</h1>
          <h1>Type : {type}</h1>
          <h2>Price : {price}</h2>
          <p>{shortDescription}</p>
          <h3>Rating: {rating}</h3>
          <button className="btn btn-secondary">Details</button>
        </figure>
      </div>
    </div>
  );
};

export default ExtraFoodCard;
