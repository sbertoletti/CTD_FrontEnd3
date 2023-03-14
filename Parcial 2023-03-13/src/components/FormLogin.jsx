import React, { useState } from 'react'
import InputBlock from './InputBlock';
import { Form, Button } from './Styles';


const FormLogin = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault();
        //aqui van los eventos que nos permiten guardar los datos a la BD
        console.log("Username: ", username);
        console.log("Password: ", password);
        setUsername("");
        setPassword("");
        
    }

    return (
        <div>
            <Form id="login-form" onSubmit={handlerSubmit}>
                <InputBlock name="Username" value={username} setChange={setUsername}/>
                <InputBlock name="Password" value={password} setChange={setPassword} />
            </Form>
            
            <Button form="login-form" btn="submit" onSubmit={handlerSubmit}>Submit</Button>
            <Button onClick={()=> {console.log("por ahora nada por aqui")}}>Register</Button>

        </div>
    )
}

export default FormLogin