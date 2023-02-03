import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import baseUrl from "../../utils/baseURL";
import axios from "axios";

export default function FetchProduct() {
  const [data, newData] = useState([]);
  const fetchcategory = async () => {
    const response = await axios.get(`${baseUrl}/api/products`);
    return newData(response.data);
  };
  useEffect(() => {
    fetchcategory();
  }, []);
  return (
  
    <Card sx={{ maxWidth: 345, marginTop: "10px" ,flexDirection:'column'}}>
    {data.map((obj,index)=>(
      <><CardMedia
        sx={{ height: 140 }}
        image={obj.image}
        title="green iguana" /><CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {obj.title}
          </Typography>
          <Typography gutterBottom variant="h8" component="div">
            Category:{obj.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Description:{obj.description}
          </Typography>
        </CardContent></>
         
        ))}
    </Card>
  );
}
