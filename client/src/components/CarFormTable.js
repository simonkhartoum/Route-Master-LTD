import React from 'react';
import TableRow from './prod';
import './CarFormTable.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/cars')
      .then(response => response.json())
      .then(data => {
        this.setState({ cars: data });
      })
      .catch(error => console.error('Failed to fetch car data:', error));
  }

  handleUpdatedriver = (carId, newDriver) => {
    fetch(`http://localhost:3000/cars/${carId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        driver_name: newDriver,
      }),
    })
      .then(response => response.json())
      .then(data => {
        const updatedCars = this.state.cars.map(car => {
          if (car.id === carId) {
            return {
              ...car,
              driver_name: newDriver,
            };
          }
          return car;
        });
        this.setState({ cars: updatedCars });
        console.log(`Car with id ${carId} updated with new driver ${newDriver}`);
      })
      .catch(error => console.error(`Failed to update car with id ${carId}:`, error));
  };

  handleDelete = (carId) => {
    const updatedCars = this.state.cars.filter(car => car.id !== carId);

    this.setState({ cars: updatedCars });

    fetch(`http://localhost:3000/cars/${carId}`, {
      method: 'DELETE',
    }).then(() => {
      console.log(`Car with id ${carId} deleted `);
    });
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Owner Name</th>
            <th scope="col">Number Plate</th>
            <th scope="col">Driver Name</th>
            <th scope="col">Driver Contact</th>
            <th scope="col">Route</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.cars.map(car => (
            <TableRow
              key={car.id}
              id={car.id}
              owner_name={car.owner.name}
              number_plate={car.number_plate}
              driver_name={car.driver_name}
              driver_contact={car.driver_contact}
              route={car.route}
              ondelete={this.handleDelete}
              updating={this.handleUpdatedriver}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;



