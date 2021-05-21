import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Form() {


    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const getLogin = (() => {
        axios.post(``)
        .then(response => {
            console.log(Object.values(response.data));
          })
          .catch(err => { console.log(err) });
      })

      
      

    // useEffect(() => {
    //     console.log(data);
    // }, [data])

    const onInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    const onFormSubmit = () => {
        console.log('Login Submitted and Displayed on Next Line');
        console.log(data);

    }


    return (
        <div className="form" >
            <form onSubmit={(event) => { event.preventDefault(); onFormSubmit(); }}>
                <div>
                    <label htmlFor="username"> Username </label>
                </div>
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username / Email"
                    onChange={onInputChange}
                />

                <div>
                    <label htmlFor="password"> Password </label>
                </div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={onInputChange}
                />
                
                <button className="loginButton" type='submit'>Login</button>                   
            </form>
        </div>
    )

}