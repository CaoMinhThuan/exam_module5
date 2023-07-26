import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppContext from "./context/AppContext";
import AddTours from "./pages/add";
import EditTours from "./pages/update";
import DetailTours from "./pages/detail";
import ListTours from "./pages/list";

function App() {
  return (
    <AppContext.Provider>
      <Routes>
        <Route path="/" element={<ListTours />}></Route>
        <Route path="/add" element={<AddTours />}></Route>
        <Route path="/tours/:id" element={<EditTours />}></Route>
        <Route path="/detail/:id" element={<DetailTours />}></Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
