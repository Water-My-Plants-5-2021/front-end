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
        <div className="updateplantlogin">
            <form onSubmit={onFormSubmit}>
                <div>
                    <label><h2>Update the Plant</h2></label>
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
                
                    <button className="updatePlantButton" type='submit'>Update it</button>           
            </form>
        </div>
    )}