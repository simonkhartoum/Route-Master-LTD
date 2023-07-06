import React, { useState, useEffect } from 'react';
import '../css/CarImage.css';

const CarImage = () => {
  const [cars, setcars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

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

  const updateRoute = async (newRoute) => {
    try {
      const response = await fetch(`http://localhost:3000/cars/${selectedCar.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ route: newRoute }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update route');
      }
  
      const updatedCars = cars.map((car) => {
        if (car.id === selectedCar.id) {
          return { ...car, route: newRoute };
        }
        return car;
      });
  
      setcars(updatedCars);
      setSelectedCar(null);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <h1>Featured cars</h1>
      <div className='item-container'>
        {cars.map((car) => (
          <div className='card' key={car.id}>
            <img src={car.image} alt='' />
            <h3>{car.number_plate}</h3>
            <p>{car.driver_name}</p>
            {selectedCar && selectedCar.id === car.id ? (
              <>
                <p>
                  <input
                    type='text'
                    value={selectedCar.route}
                    onChange={(e) =>
                      setSelectedCar({ ...selectedCar, route: e.target.value })
                    }
                  />
                </p>
                <p>
                  <button onClick={() => updateRoute(selectedCar.route)}>Save</button>
                </p>
              </>
            ) : (
              <>
                <p>{car.route}</p>
                <p>
                  <button style={{backgroundColor:"rgb(13, 226, 155)"}} onClick={() => setSelectedCar(car)}>My Route</button>
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default CarImage;