import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className='container'>
    <img className="IMG" src="./images/NotFound.jpg" alt="error" />
    <p>
      Упс, здається Ви загубились. Ось <Link to="/">ссилка</Link> на головну
      сторінку.
    </p>
  </div>
);

export default NotFound;
