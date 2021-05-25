import React, { useState } from 'react';

export default function Card(props) {
    const { data } = props;
    
    const [isWatered, setIsWatered] = useState(data.watered);

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
            </section>
        )
        
    }
}