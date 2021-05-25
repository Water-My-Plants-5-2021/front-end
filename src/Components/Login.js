import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router"
import axios from 'axios'

export default function Form() {

    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const { push } = useHistory();

    const getLogin = ((e) => {
        e.preventDefault()
        axios.post(`https://watermyplants-bw.herokuapp.com/api/login`,data)
        .then(response => {
            localStorage.setItem('token', response.data.token)
            push("/user")
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

    


    return (
        <div className="form" >
            <form onSubmit={ getLogin }>
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