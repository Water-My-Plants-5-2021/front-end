import React, { useState } from 'react';
import { useHistory } from "react-router";
import axios from "axios";

export default function SignUp() {

    const { push } = useHistory();

    const [data, setData] = useState({
        username: ``,
        password: ``,
        phoneNumber: ``
    });

    const onInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    const onFormSubmit = e => {
        e.preventDefault();
        axios.post("https://watermyplants-bw.herokuapp.com/api/register", data)
            .then(res => {
                console.log(res.data)
                push("/Login")
            })
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
