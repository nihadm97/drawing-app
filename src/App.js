import React from 'react'
import { Canvas } from './Canvas'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Galery from './Galery';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Canvas />} />
      <Route path="/galery" element={<Galery />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

