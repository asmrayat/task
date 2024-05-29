import React from "react";
import { useLoaderData } from "react-router-dom";

const AddProduct = () => {
  const data = useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = (parseInt(data[data.length - 1].id) + 1).toString();
    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const image_url = form.image_url.value;
    const result = { id, name, description, price, image_url };
    console.log(result);
    await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Product name"
            className="input input-bordered w-80"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered w-80"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="input input-bordered w-80"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            name="image_url"
            placeholder="Image"
            className="input input-bordered w-80"
            required
          />
        </div>
        <button className="btn btn-success mt-5 ">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
