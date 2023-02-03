import React, { useState } from "react";
import axios from "axios";
import "./product.css";
import baseUrl from "../../utils/baseURL";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Product() {
  const [title, setTitle] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  console.log(image, "Hello");
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", categoryName);
      formData.append("image", image);
      const response = await axios.post(`${baseUrl}/api/products`, formData);
      console.log(response.data);
 
    } catch (error) {
      console.error(error);
    }
  };

  // const onChangeImage = async (e) => {
  //   const pics = e.target.files[0];
  //   const data = new FormData();
  //   data.append("file", pics);
  //   data.append("upload_preset", "onstara");
  //   data.append("cloud_name", "dn8krl0jy");
  //   fetch("https://api.cloudinary.com/v1_1/dn8krl0jy/upload", {
  //     method: "post",
  //     body: data,
  //   });
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", "g38hxttl");
  //   formData.append("cloud_name", "dn8krl0jy");
  //   fetch("https://api.cloudinary.com/v1_1/dn8krl0jy/upload", {
  //     method: "post",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImage(data.secure_url);
  //     })
  //     .catch((err) => console.error(err));
  // };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <h1 className="category">Create product</h1>
        <h4 className="first">Title</h4>
        <input
          className="input1"
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <h4 className="first">Category</h4>
        <input
          className="input1"
          type="text"
          id="category-name"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
          
        />
        <h4 className="first">Description</h4>
        <input
          className="input1"
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <h4 className="first">Image</h4>
        <input
          className="input1"
          type="file"
          id="image"
          accept="image/*"
          value={image}
          onChange={(event) => setImage(event.target.value)}
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

      <button className="button" type="submit" >
        Add Product
      </button>
    </form>
  );
}
