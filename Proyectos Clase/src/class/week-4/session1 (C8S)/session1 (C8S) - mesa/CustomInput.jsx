import React from "react";

export const CustomInput = ({ name, value, setChange }) => {
    return (
        <Container>
            <label>{name}</label>
            <Input
            name={name}
            type={name.includes("Password") ? "password" : "text"}
            palceholder={`Enter you ${name}`}
            value={value}
            onChange={(e) => setChange(e.target.value)}
            />
        </Container>
    )
}
