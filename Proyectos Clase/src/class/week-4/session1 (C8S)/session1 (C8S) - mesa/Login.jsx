import React, { useState } from "react";
import { CustomInput } from './CustomInput';

const Login = () => {
    // States iniciados vacios para acumular informacion y cambios
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        
    }; 



    return (
        <FormContainer from="login">
            <form id="login-form" onSubmit={handleSubmit}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <img src={logo} width={120} />
                </div>
                <CustomInput name="Email" value={email} setChange={setEmail} />
                <CustomInput name="Password" value={password} setChange={setPassword} />
            </form>
            <Container content="row">
                <Button btn="cancel">Cancel</Button>
                <Button form="login-form" btn="submit">Submit</Button>
            </Container>
        </FormContainer>
    )


};