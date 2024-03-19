import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Project from "../Components/Project";
import Skills from "../Components/Skills";
import Chat from "../Components/Chat";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
