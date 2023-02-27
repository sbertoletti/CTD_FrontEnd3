import React from 'react'


const OptionComponent = ({ type, id }) => {
    return (
        <option value={type} key={id}>{type}</option>
    )
}

export default OptionComponent;