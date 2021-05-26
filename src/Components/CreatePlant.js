import React, { useState } from 'react';
import { useHistory } from "react-router";
// import axios from "axios";

export default function EditLogin() {

    // const {  } = useHistory();

    const [data, setData] = useState({
        nickname: ``,
        species: ``,
        image: ``
    });

    const onInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    // const onFormSubmit = e => {
    //     e.preventDefault();
        
    // }

    return (
        <div className="createplantlogin">
            <form onSubmit={onFormSubmit}>
                <div>
                    <label><h2>Create the Plant</h2></label>
                </div>
                
                <div>
                    <label htmlFor="nickname"> Nickname </label>
                </div>
                <input
                    id="nickname"
                    type="text"
                    name="nickname"
                    placeholder="nickname"
                    onChange={onInputChange}
                />

                <div>
                    <label htmlFor="species"> Species  </label>
                </div>
                <input
                    id="species"
                    type="text"
                    name="species"
                    placeholder="species"
                    onChange={onInputChange}
                />

                <div>
                    <label htmlFor="image"> Image  </label>
                </div>
                <input
                    id="image"
                    type="text"
                    name="image"
                    placeholder="image"
                    onChange={onInputChange}
                />
                
                    <button className="createPlantButton" type='submit'>Plant it</button>           
            </form>
        </div>
    )}