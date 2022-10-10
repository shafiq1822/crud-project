import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CodeforInterview from "./components/CodeforInterview";
import AllUser from "./components/AllUser";
import AddUser from "./components/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CodeforInterview />}/>
        <Route path='/all' element={<AllUser />} />
        <Route path='/add' element={<AddUser/>} />
        <Route path='/edit/:id' element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
