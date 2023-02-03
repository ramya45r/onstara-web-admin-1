import React, { useState } from "react";
import axios from "axios";
import "./category.css";
import baseUrl from "../../utils/baseURL";
export default function AddCategoryForm() {
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
        <h1 className="category">Create category</h1>
        <input
          className="input"
          type="text"
          id="category-name"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
          required
        />
      </div>
      <button className="button" type="submit">
        Add Category
      </button>
    </form>
  );
}
