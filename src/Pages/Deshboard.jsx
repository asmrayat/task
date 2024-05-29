import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Dcard from "../Components/Dcard";

const Deshboard = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/products")
    .then((res)=>res.json())
    .then((data)=>setProducts(data));
  })
 
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <div className="flex flex-wrap gap-5 m-5 justify-center">
      {products.map((singleProduct) => (
        <Dcard key={products.id} product={singleProduct} onDelete={handleDeleteProduct} />
      ))}
    </div>
  );
};

export default Deshboard;
