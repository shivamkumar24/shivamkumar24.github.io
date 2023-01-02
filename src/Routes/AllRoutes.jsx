import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
