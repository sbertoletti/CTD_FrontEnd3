import React from 'react'
import { Input, Container } from './Styles';




const InputBlockRegister = ({name, value, setChange }) => {

    return (
        <Container>
            <label>{name}</label>
            <Input
                name={name}
                type={name.includes("Password" || "Repassword") ? "password" : "text"}
                placeholder={`Enter your ${name}`}
                value={value}
                onChange={(e) => setChange({...value, [value.name]:e.target.value})}
                />
        </Container>
    )
}

export default InputBlockRegister