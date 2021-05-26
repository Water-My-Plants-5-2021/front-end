import React, { useState } from 'react';
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function Card(props) {
    const { data } = props;
    
    const [isWatered, setIsWatered] = useState(data.watered);

    const { push } = useHistory();

    const colorBasedOnState = currentState => {
        if(currentState === true){
            return 'royalblue';
          }
          else{
            return '#8a0303';
          }
        }

    const statusBarColor = {
        backgroundColor: colorBasedOnState(isWatered)
    }

    const editPlant = () => {
        push("/user/edit-plant")
    }

    const deletePlant = () => {
        axiosWithAuth().delete("")
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    if (data === null) {
        return (
            <h2>LOADING...</h2>
        )
    }
    else {
        return(
            <section>
                <div style={statusBarColor}><h4>{isWatered === true ? 'Plant Has Been Watered' : 'Plant Needs Water'}</h4></div>
                <div>
                    <img src={data.image}></img>
                </div>
                <div>
                    <h2>{data.nickname}</h2>
                    <p>{`Species: ${data.species}`}</p>
                    <p>{`Watering Frequency: ${(data.h2oFrequency).toUpperCase()}`}</p>
                    <p></p>
                    <button onClick = {() => {setIsWatered(true)}} style={{width:'10em', margin: '0 auto'}}>Water</button>
                </div>
                <div>
                    <button onClick={editPlant}>Edit</button>
                    <button onClick={deletePlant}>Delete</button>
                </div>
            </section>
        )
        
    }
}