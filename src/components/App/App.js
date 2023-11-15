import React, { useState } from "react";
import Home from "../Home/Home";
import "./App.css";
import Currencies from "../Currencies/Currencies";
import Price from "../Price/Price";
import { Link, Route, Routes, Navigate, useParams } from "react-router-dom";

function App() {
  const [price, setPrice] = useState(0);

  return (
    <div>
      <nav>
        <img src='https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png' alt='Bitcoin logo' />
        <h1>Bitcoin prices</h1>
        <div id='navLinks'>
          <Link to='/'>Home</Link>
          <Link to='/currencies'>All Currencies</Link>
          <Link to='/price/USD'>Price in USD</Link>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/currencies' element={<Currencies />} />
          <Route path='/price/:currency' element={<Price currency={useParams()} setPrice={setPrice} price={price} />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
