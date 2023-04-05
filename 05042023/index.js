import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import image1 from './car.jpg';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1>My First React app</h1>
  <h3 align="center"className="text-info">MY REACT BATCH</h3>
  <img src={image1} alt="" />
  <hr></hr>
  </>
  );

