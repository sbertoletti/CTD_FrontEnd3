import React, { useState } from 'react';
import InputBlockRegister from './InputBlockRegister';
import { Form, Button } from './Styles';


const FormRegister = () => {

    const [ error, setError ] = useState(false);

    const [ value, setValue ] = useState({
        email: "",
        username: "",
        password: "",
        repassword: "",
        name: "",
        surname: ""
    });


    const handlerSubmit = (e) => {
        e.preventDefault;

        console.log({value});

        let regex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;


        if ((e.target.value).length < 3 || e.target.value[0] === " " ){
            setError(true);
        } else if ((e.target.value.email).contains != regex){
            setError(true);
        }

        

        setValue({
            email: "",
            username: "",
            password: "",
            repassword: "",
            name: "",
            surname: ""
        });
    };

    const cleaner = (e) => {
        setValue({
            email: "",
            username: "",
            password: "",
            repassword: "",
            name: "",
            surname: ""
        });
    }

    return (
        <div>
            <Form id="register-form" onSubmit={handlerSubmit}>
                <InputBlockRegister name="Email" value={value.email} setChange={setValue} />
                <InputBlockRegister name="Username" value={value.username} setChange={setValue} />
                <InputBlockRegister name="Password" value={value.password} setChange={setValue} />
                <InputBlockRegister name="Password" value={value.repassword} setChange={setValue} />
                <InputBlockRegister name="Name" value={value.name} setChange={setValue} />
                <InputBlockRegister name="Surname" value={value.surname} setChange={setValue} />
            </Form>
            <Button form="register-form" btn="submit" onSubmit={handlerSubmit}>Register!</Button>
            <Button onClick={cleaner}>Clean</Button>
            <p style={{visibility: (error === true ? 'visible' : 'hidden'), color: 'red', fontSize: "1rem"}} >Por favor chequea que la información sea correcta</p>
        </div>
    )
};

export default FormRegister

