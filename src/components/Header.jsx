import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import AppContext from '@context/AppContext';
import '@stylesComponents/Header.css';
import Social from './Social';
import logo from '@logos/logo.PNG';
import logo2 from '@logos/logoWhite.png';
import mexico from '@icons/mexico.svg';
import usa from '@icons/usa.svg';

const Header = () => {
    const {state, language, dark}= useContext(AppContext);
    const {es}= state.language;
    const {en}=state.language;
    const {english, darkMode}= state;

    const handleLanguage= ()=>{
        console.log(english);
        language(english);
    }

    const handleDarkMode=()=>{
        console.log(darkMode);

        dark(darkMode);
    }

    return (
        <header className={(darkMode) ?'Header dark': 'Header'}>
            <Link to="/" className='logos-container'>
                <img src={(darkMode) ?logo2 : logo} alt='logo' className='logo'/>
                <h1 className={(darkMode) ?'letter-color-dark': ''}>Angel Velasco</h1>
            </Link>
            <nav className='Header-nav'>
                <ul className={(darkMode) ?'Header-nav-ul letter-color-dark': 'Header-nav-ul'}>
                    <li>
                        <Link to="/" className={(darkMode) ?'letter-color-dark': ''}>
                        {(english) ?en.aboutMe : es.aboutMe}
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className={(darkMode) ?'letter-color-dark': ''}>
                            {(english) ?en.portfolio : es.portfolio}
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className={(darkMode) ?'letter-color-dark': ''}>
                            {(english) ?en.contact : es.contact}
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className={(darkMode) ?'letter-color-dark': ''}>
                            {(english) ?en.blog : es.blog}
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='Header-config'>
                <div className='Header-language'>
                    <img src={mexico} alt="idioma: español" />
                    <label className='switch'>
                        <input type="checkbox" checked={english} onChange={handleLanguage}/>
                        <span className="slider round color-language"></span>
                    </label>
                    <img src={usa} alt="language: english" />
                </div>
                <div className='Header-dark-mode'>
                    <i className={(darkMode) ?'letter-color-dark fa-solid fa-sun': 'fa-solid fa-sun'}></i>
                    <label className='switch'>
                        <input type="checkbox" checked={darkMode} onChange={handleDarkMode}/>
                        <span className="slider round color-dark"></span>
                    </label>
                    <i className={(darkMode) ?'letter-color-dark fa-solid fa-moon': 'fa-solid fa-moon'}></i>
                </div>
            </div>
            <Social/>
        </header>
    );
};

export default Header;
