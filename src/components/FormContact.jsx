import React from 'react';
import InputText from './InputText';

const FormContact = () => {
    return (
        <form className='Form-contact'>
            <p>Necesitas ayuda, escribeme</p>
            <InputText name="Nombre" type="text"/>
            <InputText name="Celular" type="text"/>
            <InputText name="Email" type="text"/>
            <InputText name="Mensaje" type="textarea"/>
            <button type='button' className='Form-button'>Enviar</button>
        </form>
    );
};

export default FormContact;