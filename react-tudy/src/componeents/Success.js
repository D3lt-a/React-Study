import React, { useState } from "react";


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
        <div className="Users">
            <h1>Success</h1>
            <div>
                <ul id="userList">
                    {data.map((el, index) => (
                        (
                            <li key={index}>
                                <p><strong>Fullname </strong>: {el.fullname}</p>
                                <p><strong>Username</strong>: {el.username}</p>
                                <p><strong>Email</strong>: {el.email}</p>
                                <p><strong>Telephone</strong>: {el.telephone}</p>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Success