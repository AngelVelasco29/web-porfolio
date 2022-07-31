import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '../styles/components/Footer.css';
import Social from './Social';

const Footer = () => {
    const {state}= useContext(AppContext);
    const {photo}= state.myInfo;
    return (
        <div className='Footer'>
            <h2 className='Footer-title'>Contactame</h2>
            <div className='Footer-container'>
                <div className='Footer-image'>
                    <img src={photo}/>
                    <div className='Footer-social'>
                        <Social/>
                    </div>
                </div>
                <form className='Footer-form'>

                </form>
            </div>
        </div>
    );
};

export default Footer;