import React from 'react'

const colorPicker = (type) => {
    switch (type) {
        case "fire":
            return "red"
        case "water":
            return "blue"
        case "electric":
            return "yellow"
        case "air":
        default:
        return "lightblue";
    }
}

const Card = ({ id, name, avatar, powerLevel, type , nº}) => {
    return (
    <div
        className='nieto'
        style={{    
            margin: "1px",
            padding: "1px",
            fontFamily: "Arial, sans-serif",
            border: `4px solid ${colorPicker(type)}`,
            width: "150px",
            backgroundColor: `${colorPicker(type)}`,
            color: "white",
            borderRadius: "20px",}}
    >
    
    <p>Nº: {nº}</p>
    <p>{name}</p>
    <div style={{ width: "100%", height: "300px"}}>
        <img style={{ width: "100%", borderRadius: "20px", 
        backgroundColor: 'rgba(80, 120, 230, 0.75)',}} src={avatar} alt={name} />
    </div>
    <p>PowerLevel: {powerLevel}</p>
    </div>
    )
}

export default Card;