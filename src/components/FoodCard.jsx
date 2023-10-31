const FoodCard = ({ food }) => {

  const { brandName, image } = food;
  
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{brandName}</h2>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
