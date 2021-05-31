import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function EditLogin() {

    const { push } = useHistory();
    const { id } = useParams();

    const [data, setData] = useState({
        nickname: ``,
        species: ``,
        h2oFrequency: "",
        image: ``
    });

    useEffect(() => {
        axiosWithAuth().get(`https://watermyplants-bw.herokuapp.com/api2/plants/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [id])

    const onInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    const onFormSubmit = e => {
        e.preventDefault();
        axiosWithAuth().put(`/api2/plants/${id}`, data)
        .then(() => push("/user"))
        .catch(err => console.log(err))
    }

    return (
        <div className="updatePlant">
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
                    value={data.nickname}
                    onChange={onInputChange}
                />

                <div>
                    <label htmlFor="species"> Species  </label>
                </div>
                <input
                    id="species"
                    type="text"
                    name="species"
                    value={data.species}
                    onChange={onInputChange}
                />

                <div>
                    <label htmlFor="h2oFrequency"> h2o Frequency  </label>
                </div>
                <input
                    id="h2oFrequency"
                    type="text"
                    name="h2oFrequency"
                    value={data.h2oFrequency}
                    onChange={onInputChange}
                />

                <div>
                    <label htmlFor="image"> Image  </label>
                </div>
                <input
                    id="image"
                    type="text"
                    name="image"
                    value={data.image}
                    onChange={onInputChange}
                />
                
                    <button className="updatePlantButton" type='submit'>Update it</button>           
            </form>
        </div>
    )}