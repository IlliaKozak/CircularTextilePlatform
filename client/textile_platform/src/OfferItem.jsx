import React from 'react';



const offerItem = (props) => {

    const styling = {
        dispay: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px', 
        border: '1px solid black'
        
    }

    return (
        <div style={styling} onClick = {props.clicked}>
            <h1>{props.title}</h1>
            <p>{props.overview}</p>
        </div>   
    )
}

export default offerItem;