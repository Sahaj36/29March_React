import React from 'react';
import ReactDOM from 'react-dom/client';
import Component from './Component.js';
import Card from './Card.js';
import hyundai from  './car.jpg'
import kia from  './car3.jpg'
import tata from  './car2.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Component name="TOPS"/>
  <Component name="SURAT"/>
  <Component name="REACT"/>
  {/* <h1 align="center">TOPS</h1> */}
  <Card title="Hyundai" description="This is Hyundai" image={hyundai}/>
  <Card title="KIA"  description="This is KIA" image={kia}/>
  <Card title="TATA"  description="This is TATA" image={tata}/>
  
 </>
);
