import React, { useState } from 'react';
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function CreatePlant() {

    const { push } = useHistory();

    const [data, setData] = useState({
        nickname: ``,
        species: ``,
        h2oFrequency: "",
        image: ``
    });

    const onInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    const onFormSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("/api2/plants", data)
            .then(res => push("/user"))
            .catch(err => console.log(err))        
    }

    return (
        <div className="createPlant">
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
                    <label htmlFor="h2oFrequency"> h2o Frequency  </label>
                </div>
                <input
                    id="h2oFrequency"
                    type="text"
                    name="h2oFrequency"
                    placeholder="h2o Frequency"
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