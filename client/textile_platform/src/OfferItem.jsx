import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const offerItem = (props) => {

    

    const styling = {
        dispay: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px', 
        border: '1px solid black'
    }

    // function toSingleOffer () {
    //     useHistory().push("/1")
    // }

    return (
        
        <div style={styling} onClick = {props.clicked}>
            <h1>{props.title}</h1>
            <p>{props.overview}</p>
        </div>
       
        
    )
}

export default offerItem;