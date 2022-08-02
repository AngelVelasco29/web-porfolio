import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import InputText from './InputText';

const FormContact = () => {
    const { state } = useContext(AppContext);
    const { darkMode } = state;
    return (
        <form className='Form-contact'>
            <p className={(darkMode) ? 'letter-color-dark' : ''}>Necesitas ayuda, escribeme</p>
            <InputText name="Nombre" type="text" />
            <InputText name="Celular" type="text" />
            <InputText name="Email" type="text" />
            <InputText name="Mensaje" type="textarea" />
            <button type='button' className='Form-button'>Enviar</button>
        </form>
    );
};

export default FormContact;