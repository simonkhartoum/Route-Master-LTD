import React, { useState, useEffect } from 'react';
import  '../css/CarImage.css'
const  CarImage = () => {
  const [cars, setcars] = useState([]);

  useEffect(() => {
    const fetchcars = async () => {
      try {
        const response = await fetch('http://localhost:3000/cars');
        const data = await response.json();
        setcars(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchcars();
  }, []);


  return (
    <div>
      <h1>Featured cars</h1>
      <div className='item-container'>
        {cars.map((car) => (
          <div className='card' key={car.id}>
            <img src={car.image} alt='' />
            <h3>{car.number_plate}</h3>
            <p>{car.driver_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CarImage;
