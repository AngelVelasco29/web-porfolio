import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '../styles/components/Footer.css';
import Social from './Social';
import FormContact from './FormContact';

const Footer = () => {
    const {state}= useContext(AppContext);
    const {photo}= state.myInfo;
    const {darkMode}= state;
    return (
        <div className={(darkMode) ?'Footer dark': 'Footer'}>
            <h2 className={(darkMode) ?'letter-color-dark Footer-title': 'Footer-title'}>Contacto</h2>
            <div className='Footer-container'>
                <div className='Footer-image'>
                    <img src={photo}/>
                    <div className='Footer-social'>
                        <Social/>
                    </div>
                </div>
                <FormContact/>
            </div>
        </div>
    );
};

export default Footer;