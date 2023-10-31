import Swal from 'sweetalert2'
import Navbar from './shared/Navbar';
import Footer from './Footer';
const AddProduct = () => {
  const handleAddFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const newFood = {
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
      image,
    };
    console.log(newFood);
    // send data to the server
    fetch("http://localhost:5000/food", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newFood),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Coffee Added Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
  };
  return (
  <div>
    <Navbar></Navbar>
      <div className="bg-[#abd2d2] p-24">
      <h2 className="text-3xl font-extrabold">
        Add Your Favorite Specific Food
      </h2>
      <form onSubmit={handleAddFood}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Locally Food Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4 ">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brandName"
                placeholder="The Name Of Your Food Brand"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Alcohol or SoftDrinks or FastFood or TraditionalFood or Local Food"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4 ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Input Here Specific Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="shortDescription"
                placeholder="Please Say Anything Extra"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4 ">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating Please"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Photo Url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Image Url Here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Food"
          className="btn btn-block bg-gray-400"
        />
      </form>
    </div>
    <hr />
    <Footer></Footer>
  </div>
  );
};

export default AddProduct;
