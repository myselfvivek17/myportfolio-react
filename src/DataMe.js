import React from 'react';

export default function DataMe(props) {
    const { number, name, color, description } = props;

    return (
        <div className='data-me'>
            <div className='number' style={{ fontSize: "100px", color: "#8491A0" }}>0{number}</div>
            <div className='name' style={{ color: color }}><h2>{name}</h2></div>
            <div className='description'>{description}</div>
        </div>
    );
}
