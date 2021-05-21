import React, { useState } from 'react'

export default function SignUp() {
    const [data, setData] = useState({
        username: ``,
        phoneNumber: ``,
        password: ``
    });

    const onInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    const onFormSubmit = () => {
        console.log("Sign-in submitted and displayed below")
        console.log(data)
    }

    return (
        <div classname="formSignUp">
            <form onSubmit={(event) => {event.preventDefault(); onFormSubmit();}}>
                <div>
                    <label><h2>Sign-Up</h2></label>
                </div>
                <div>
                    <label htmlFor="username"> Username </label>
                </div>
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={onInputChange}
                />
                
                <div>
                    <label htmlFor="password"> Password </label>
                </div>
                <input
                    id="password"
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={onInputChange}
                />

                <div>
                    <label htmlFor="phoneNumber"> Phone Number </label>
                </div>
                <input
                    id="phoneNumber"
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={onInputChange}
                />
                
                    <button className="signUpButton" type='submit'>Sign-Up</button>           
            </form>
        </div>
    )}
