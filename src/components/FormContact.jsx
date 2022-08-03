import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import InputText from './InputText';

const FormContact = () => {
    const { state } = useContext(AppContext);
    const { darkMode, english } = state;
    return (
        <form className='Form-contact'>
            <p className={(darkMode) ? 'letter-color-dark' : ''}>{(english) ? 'Do you need help?': 'Necesitas ayuda?, escríbeme'}</p>
            <InputText name={(english) ? 'Name': 'Nombre'} type="text" />
            <InputText name={(english) ? 'Cell Phone': 'Celular'} type="text"  />
            <InputText name={(english) ? 'Email': 'Correo'} type="text" />
            <InputText name={(english) ? 'Message': 'Mensaje'} type="textarea" />
            <button type='button' className='Form-button'>{(english) ? 'Send': 'Enviar'}</button>
        </form>
    );
};

export default FormContact;