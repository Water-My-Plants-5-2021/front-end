import React, { useState } from 'react';
import { useHistory } from "react-router";
import axios from "axios";

export default function SignUp() {

    const { push } = useHistory();

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

    const onFormSubmit = e => {
        e.preventDefault();
        axios.post("https://reqres.in/api/api/register", data)
        //This will be changed to the actual endpoint later.
            .then(res => {
                console.log(res.data)
                push("/login")
            })
        //Because we're adding a user to the database and never showing the full list of users on the application, we don't need to update state here, so I'm just going to send them to the login page.
            .catch(err => console.log(err.message))
    }

    return (
        <div className="formSignUp">
            <form onSubmit={onFormSubmit}>
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
