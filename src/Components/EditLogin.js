import React, { useState } from 'react';
// import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function EditLogin() {

    // const {  } = useHistory();

    const [data, setData] = useState({
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
        axiosWithAuth().put("")
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className="formeditlogin">
            <form onSubmit={onFormSubmit}>
                <div>
                    <label><h2>Edit</h2></label>
                </div>
                
                <div>
                    <label htmlFor="password"> New Password </label>
                </div>
                <input
                    id="password"
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={onInputChange}
                />

                <div>
                    <label htmlFor="phoneNumber"> New Phone Number </label>
                </div>
                <input
                    id="phoneNumber"
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={onInputChange}
                />
                
                    <button className="editLoginButton" type='submit'>Sign-Up</button>           
            </form>
        </div>
    )}
