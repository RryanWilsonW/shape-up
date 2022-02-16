import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import FitnessPage from "./pages/FitnessPage/FitnessPage";
import JournalPage from "./pages/JournalPage/JournalPage";
import NutritionPage from "./pages/NutritionPage/NutritionPage";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Routes>
          <Route path="/fitness" element={<FitnessPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/journal" element={<JournalPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/nutrition" element={<NutritionPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
