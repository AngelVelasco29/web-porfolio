import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@stylesComponents/WebSite.css';
import photo from '@images/photo.jpg'
import border from '@images/border.png'
const WebSite = () => {
    const {state}= useContext(AppContext);
    const {es}= state.language;
    const {en}=state.language;
    const {english, darkMode}= state;
    return (
        <div className='Visual-web'>
            <div className='Web-content'>
                <div className='Web-slider'>
                    <input type="radio" name="slider-1" id="radio-1" checked="true"/>
                    <input type="radio" name="slider-1" id="radio-2" checked="false"/>
                    <input type="radio" name="slider-1" id="radio-3" checked="false"/>
                    <div className="cards">
                        <label htmlFor="radio-1" className="card" id="card-1">
                            
                        </label>
                        <label htmlFor="radio-2" className="card" id="card-2">
                            
                        </label>
                        <label htmlFor="radio-3" className="card" id="card-3">
                            <img className='border-top' src={border}/>
                            <div className='card-greeting'>
                                <p>{(english) ?en.greeting : es.greeting}</p>
                            </div>
                            <img src={photo} alt=""/>
                            <div className='card-name'>
                                <h2>Angel Velasco</h2>

                            </div>
                            <img className='border-bottom' src={border}/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebSite;