import React from 'react';

export default function House(props){
    return (
        <div>
            
            <h3>{props.house.name}</h3>
            <button onClick={props.deleteHouse}>DELETE</button>
        </div>
    )
}