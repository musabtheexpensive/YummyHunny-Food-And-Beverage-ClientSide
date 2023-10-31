import Navbar from "./shared/Navbar";
import Banner from "./shared/Banner";
import { useLoaderData } from "react-router-dom";
import FoodCard from "./FoodCard";
import Footer from "./Footer";

const Home = () => {
  const foods = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <br />

      <div className="m-20">
        <h2 className="text-3xl text-center font-sans font-bold ">
          All Foods Collection
        </h2>
        <br /> <br />
        <div className="grid md:grid-cols-2 gap-4">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      </div>

      <Footer></Footer>
      <br />
      <hr />
    </div>
  );
};

export default Home;
