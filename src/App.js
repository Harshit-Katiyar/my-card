import './App.css';
import React from 'react';
import Image from './Image.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 

function App() {
   return (
    <>
    <center><h1>React Assignment</h1><h4>3 Card in a row</h4></center>
<div className="container">
      {Image.map(ind =>{
        return(

<div className="row">
        <div className="col-sm">
          <div className="card">
            <img src={ind.src} className="card-img-top" alt={ind.title} height="200px" width="200px"/>
            <div className="card-body">
            <h5 className="card-title">{ind.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        </div>
        )
      })}
  </div>
  </>
  )
}
export default App;