import React, { useState } from "react";
import '../css/Success.css'


function Success() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('users')))
    // const users = JSON.parse(localStorage.getItem('users'))

    // const userList = document.getElementById('userList');

    // users.forEach(user => {
    //     const li = document.createElement('li');
    //     li.textContent = `Name: ${user.fullname}, Email: ${user.email}, Telephone: ${user.telephone}, Username: ${user.username}, Gender: ${user.gender}`;
    //     userList.appendChild(li);
    // });



    return (
        <div className="success-container">
          <h1>Success</h1>
          <ul id="userList">
            {data.map((el, index) => (
              <li key={index} className="user-card">
                <p>Fullname: {el.fullname}</p>
                <p>Username: {el.username}</p>
                <p>Email: {el.email}</p>
                <p>Telephone: {el.telephone}</p>
              </li>
            ))}
          </ul>
        </div>
      )
}

export default Success