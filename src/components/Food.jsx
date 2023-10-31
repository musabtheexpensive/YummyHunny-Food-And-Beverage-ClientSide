import Navbar from "./shared/Navbar";
import Footer from "./Footer";
import { useLoaderData,  } from "react-router-dom";
import ExtraFoodCard from "./extraFoodCard";


const Food = () => {
  const foods = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center">
        <div>
          {foods.map((food) => (
           <ExtraFoodCard  key={food._id} food={food}></ExtraFoodCard>
          ))}
        </div>
        <div></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Food;
