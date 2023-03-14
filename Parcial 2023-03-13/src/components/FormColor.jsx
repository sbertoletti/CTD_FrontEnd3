import React, { useState } from 'react'
import InputBlock from './InputBlock';
import { Form, Button } from './Styles';

const FormColor = () => {
const [ newColor, setNewColor ] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault();
        //aqui van los eventos que nos permiten guardar los datos a la BD
        console.log("color: ", e.target.value);
        setNewColor(e.target.value);
    }

    return (
        <div>
            <Form id="color-form" onSubmit={handlerSubmit} style={{ backgroundColor: {newColor} }}>
                <InputBlock name="color" value={newColor} setChange={setNewColor}/>
            </Form>
            <Button form="color-form" btn="submit" onSubmit={handlerSubmit}>Change background color</Button>

        </div>
    )
}

export default FormColor