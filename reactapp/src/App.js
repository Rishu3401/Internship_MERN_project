import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(null);
  const BASE_URL="https://internship-project111.onrender.com";

  useEffect(() => {
    const fetchData = async () => {
      let url;
      switch(buttonClicked) {
        case "income":
          url = "https://internship-project111.onrender.com/query1";
          break;
        case "city":
          url = "https://internship-project111.onrender.com/query2";
          break;
        case "gender":
          url = "https://internship-project111.onrender.com/query3";
          break;
        case "car":
          url = "https://internship-project111.onrender.com/query4";
          break;
        case "phone_price":
          url = "https://internship-project111.onrender.com/getAllPeople";
          break;
        default:
          url = "https://internship-project111.onrender.com/getAllPeople11";
      }
      const response = await axios.get(url);
      setPeople(response.data.data);
    };
    fetchData();
  }, [buttonClicked]);

  let queryName;
  switch(buttonClicked) {
    case "income":
      queryName = "Users which have income lower than $5 USD and have a car of brand “BMW” or Mercedes";
      break;
    case "city":
      queryName = "Male Users which have phone price greater than 10,000";
      break;
    case "gender":
      queryName = "Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name";
      break;
    case "car":
      queryName = "Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit";
      break;
    default:
      queryName = "Sample_data";
  }

  return (
    <div className="App">
      <div className="container">
        <section style={{ textAlign: "center", color: "white" }}>
          <p>{queryName} is running</p>
          <button onClick={() => setButtonClicked("income")}>query1</button>
          <button onClick={() => setButtonClicked("city")}>query2</button>
          <button onClick={() => setButtonClicked("gender")}>query3</button>
          <button onClick={() => setButtonClicked("car")}>query4</button>
          <button onClick={() => setButtonClicked("phone_price")}>By default</button>
        </section>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Mame</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Income</th>
              <th>City</th>
              <th>Car</th>
              <th>Quote</th>
              <th>Phone Price</th>
            </tr>
          </thead>
          <tbody>
            {people.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.first_name}</td>
                <td>{p.last_name}</td>
                <td>{p.email}</td>
                <td>{p.gender}</td>
                <td>{p.income}</td>
                <td>{p.city}</td>
                <td>{p.car}</td>
                <td>{p.quote}</td>
                <td>{p.phone_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
