import React from "react";
import { Link } from "react-router-dom";

const Dcard = ({ product,onDelete }) => {

  const { id, name, description, price, image_url } = product;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      
   
  };
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        {image_url ? (
          <img src={image_url} />
        ) : (
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="font-bold">{price}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${id}`} className="btn btn-primary">
            See details
          </Link>
          <button className="btn bg-[#9ac824]">Edit</button>
          <button onClick={handleDelete} className="btn bg-[#ff1212] text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Dcard;
