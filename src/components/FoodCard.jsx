import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { _id,brandName, image } = food;

  return (
    <Link to={`/food/${_id}`}>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brandName}</h2>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
