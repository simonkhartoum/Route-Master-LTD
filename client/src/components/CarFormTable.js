import React from 'react';

const CarFormTable = () => {
  return (
    <div>
      <h2>Create a New Car</h2>
      <form>
      </form>
      <table>
        <thead>
          <tr>
            <th>Car Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Car 1 Details</td>
            <td>
              <button>Update</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Car 2 Details</td>
            <td>
              <button>Update</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CarFormTable;
