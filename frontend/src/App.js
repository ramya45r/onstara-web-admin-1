import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Category from "./pages/category/Category";
import FetchCategory from "./pages/category/FetchCategory";
import FetchProduct from "./pages/product/FetchProduct";
import Product from "./pages/product/Product";
// import UsersList from "./components/Users/usersList/UsersList";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/addcategory" element={<Category />} />
          <Route path="/category" element={< FetchCategory />} />
          <Route path="/product" element={< Product />} />
          <Route path="/" element={<FetchProduct />} />
         
       
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;

