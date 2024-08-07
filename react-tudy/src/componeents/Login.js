import React from 'react'
import { useState } from 'react'
import '../css/style.css';

function Login() {
    const [savedData, setSavedData] = useState({})

    const inputChange = (e) => {
        const { value, name } = e.target
        setSavedData(values => ({ ...values, [name]: value }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users'))

        const { logginusername, logginemail, logginpassword } = savedData

        const user = users.find(u => u.username === logginusername && u.email === logginemail && u.password === logginpassword)

        if (user) {
            alert("Login Successful")
            window.location.href = '/index'
        } else {
            alert('Invalide Credentials')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <div className='flex-col'>
                    <div className='frm-grp'>
                        <label>Username</label>
                        <input type='text' className="form-cntrl" name='logginusername' onChange={inputChange} />
                    </div>
                    <div className='frm-grp'>
                        <label>Email</label>
                        <input type='email' className="form-cntrl" name='logginemail' onChange={inputChange} />
                    </div>
                    <div className='frm-grp'>
                        <label>Password</label>
                        <input type='password' className="form-cntrl" name='logginpassword' onChange={inputChange} />
                    </div>
                    <div className='frm-grp'>
                        <button type='submit'> Login </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login