import React from 'react'
import { Input, Container } from './Styles';




const InputBlock = ({name, value, setChange }) => {

    return (
        <Container>
            <label>{name}</label>
            <Input
                name={name}
                type={name.includes("Password" || "Repassword") ? "password" : "text"}
                placeholder={`Enter your ${name}`}
                value={value}
                onChange={(e) => setChange(e.target.value)}
                />
        </Container>
    )
}

export default InputBlock