import React from "react";


function Success() {
    const users = JSON.parse(localStorage.getItem('users'))

    const userList = document.getElementById('userList');

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

                </ul>
            </div>
        </div>
    )
}

export default Success