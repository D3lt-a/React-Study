import React from "react";
import '../css/App.css';
import { useState } from "react";

function Register(){
    const [formData, setFormData] = useState({})
    const inputChange = (e) => {
        const {value, name} = e.target
        setFormData((values)=> ({...values,[name]: value}))
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const users = localStorage.getItem('users');
        const parse = JSON.parse(users)

        if (parse){
            parse.push(formData)
            localStorage.setItem('users', JSON.stringify(parse))
        } else {
            const users = []
            users.push(formData)
            localStorage.setItem('users', JSON.stringify(users))
        }
        alert('Added')
    }
    return(
        <div className="Flex-col">
            <form onSubmit={onSubmit} className="form">
                <div className="form-grp">
                    <label>Full Name</label>
                    <input type="text" className="form-cntrl" name="fullname" onChange={inputChange}></input>
                </div>
                <div className="form-grp">
                    <label>Username</label>
                    <input type="text" className="form-cntrl" name="username" onChange={inputChange}></input>
                </div>
                <div className="form-grp">
                    <label>Email</label>
                    <input type="email" className="form-cntrl" name="email" onChange={inputChange}></input>
                </div>
                <div className="form-grp">
                    <label>Telephone</label>
                    <input type="telephone" className="form-cntrl" name="telephone" onChange={inputChange}></input>
                </div>
                <div className="form-grp">
                    <label>Password</label>
                    <input type="password" className="form-cntrl" name="password" onChange={inputChange}></input>
                </div>
                <div className="form-grp">
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default Register