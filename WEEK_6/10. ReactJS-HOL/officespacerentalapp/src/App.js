import React from "react";
import officeImage from "./office.jpg";
import "./App.css";

function App() {

  const offices = [
    {
      id: 1,
      name: "Tech Park",
      rent: 55000,
      address: "Madhapur, Hyderabad",
      image: officeImage
    },
    {
      id: 2,
      name: "Cyber Towers",
      rent: 75000,
      address: "Hitech City, Hyderabad",
      image: officeImage
    },
    {
      id: 3,
      name: "Business Hub",
      rent: 45000,
      address: "Gachibowli, Hyderabad",
      image: officeImage
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      {offices.map((office) => (
        <div className="card" key={office.id}>

          <img
            src={office.image}
            alt="Office Space"
            width="300"
            height="200"
          />

          <h2>{office.name}</h2>

          <p>
            <strong>Rent : </strong>

            <span
              style={{
                color: office.rent < 60000 ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              ₹{office.rent}
            </span>
          </p>

          <p>
            <strong>Address :</strong> {office.address}
          </p>

        </div>
      ))}

    </div>
  );
}

export default App;