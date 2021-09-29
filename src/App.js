import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';



function App() {
  const[name, setName] = useState('');
  const[age, setAge] = useState(0);
  const[country, setCountry] = useState('');
  const[position, setPosition] = useState('');
  const[wage, setWage] = useState(0);


  const[employeelist , setemployeelist] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setemployeelist([
        ...employeelist,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };


  const getEmployees = ( ) =>{
    Axios.get("http://localhost:3001/employees").then((response) => {
      setemployeelist(response.data);
    });
  }


  return (
    <div className="App">
      <label>Name</label>
      <input type="text" onChange={(event) =>{
        setName(event.target.value);
        }} 
      />
      <br/>
      <label>Age</label>
      <input type="number" onChange={(event) =>{
        setAge(event.target.value);
        }} 
      />
      <br/>
      <label>Country</label>
      <input type="text" onChange={(event) =>{
        setCountry(event.target.value);
        }} 
      />
      <br/>
      <label>Position</label>
      <input type="text" onChange={(event) =>{
        setPosition(event.target.value);
        }} 
      />
      <br/>
      <label>Wage</label>
      <input type="number" onChange={(event) =>{
        setWage(event.target.value);
        }} 
      />
      <br/>
      <button onClick={addEmployee}>Add Employee</button>
      <div>
      <button onClick={getEmployees}>Show employees</button>
      {
        employeelist.map((val,key)=>{
          return(
            <div>
              <p>{val.name}</p>
              <p>{val.age}</p>
              <p>{val.country}</p>
              <p>{val.position}</p>
              <p>{val.wage}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
