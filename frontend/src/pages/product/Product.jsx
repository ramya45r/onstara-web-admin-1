import React, { useState } from "react";
import axios from "axios";
import "./product.css";
import baseUrl from "../../utils/baseURL";
export default function Product() {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/category`, {
        title: categoryName,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1 className="category">Create product</h1>
<h4 className="first">Category</h4>
        <input
          className="input1"
          type="text"
          id="category-name"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
          required
          
        />
        <h4 className="first">Description</h4>
        <input
          className="input1"
          type="text"
          id="category-name"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
          required
          
        />
         <h4 className="first">Description</h4>
        <input
          className="input1"
          type="file"
          id="category-name"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
          required
          
        />
          {/* <input
          className="input"
          type="text"
          id="category-name"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
          required
        />
          <input
          className="input"
          type="text"
          id="category-name"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
          required
        /> */}
      </div>

      <button className="button" type="submit">
        Add Product
      </button>
    </form>
  );
}


