import React, {useState, createContext} from 'react';

export const ContextPlatform = createContext();

export const ContextPlatformProvider = props => {
    const [offers, setOffer] = useState([])

    return(
        <ContextPlatform.Provider value = {{offers: offers, setOffer: setOffer}}>
            {props.children}
        </ContextPlatform.Provider>
    )
}