import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import AppContext from '@context/AppContext';
import '@stylesComponents/Header.css';
import Social from './Social';
import logo from '@logos/logo.PNG';
import logo2 from '@logos/logoWhite.png';
import mexico from '@icons/mexico.svg';
import usa from '@icons/usa.svg';
let var1;
let var2;
const Header = () => {
    const {state, language, dark,languageDark}= useContext(AppContext);
    const {es, en}= state.language;
    const {english, darkMode}= state;

    useEffect(()=>{
        if(localStorage.language==='true'){
            var1=false;
        }else{
            var1=true;
        }
        if(localStorage.darkmode==='true'){
            var2=false;
        }else{
            var2=true;
        }
        languageDark(var1,var2);
  
    },[])

    const handleLanguage= ()=>{
        language(english);
        localStorage.setItem('language',english);
    }

    const handleDarkMode=()=>{
        dark(darkMode);
        localStorage.setItem('darkmode', darkMode);
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
                        <Link to="/about" className={(darkMode) ?'letter-color-dark': ''}>
                        {(english) ?en.aboutMe : es.aboutMe}
                        </Link>
                    </li>
                    <li>
                        <Link to="/proyect" className={(darkMode) ?'letter-color-dark': ''}>
                            {(english) ?en.portfolio : es.portfolio}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={(darkMode) ?'letter-color-dark': ''}>
                            {(english) ?en.contact : es.contact}
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
