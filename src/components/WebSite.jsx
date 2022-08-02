import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@stylesComponents/WebSite.css';
import border from '@images/border.png'
const WebSite = () => {
    const { state } = useContext(AppContext);
    const { ittg, platzi } = state.training.images;
    const { photo } = state.myInfo;
    const { proLanguage} = state;
    return (
        <div className='Visual-web'>
            <div className='Web-content'>
                <div className='Web-slider'>
                    <input type="radio" name="slider-1" id="radio-1" checked="true" />
                    <input type="radio" name="slider-1" id="radio-2" checked="false" />
                    <input type="radio" name="slider-1" id="radio-3" checked="false" />
                    <div className="cards">
                        <label htmlFor="radio-1" className="card" id="card-1">
                            <img className='border-top' src={border} />
                            <h3>Formación y habilidades:</h3>
                            <div className='training-data'>
                                <img src={ittg} />
                                <div className='training-info'>
                                    <ul>
                                        <li>Ingeniería en Electrónica</li>
                                        <li>Programación C++ y Arduino</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='training-data'>
                                <img src={platzi} />
                                <div className='training-info'>
                                    <ul>
                                        <li>Html5, CSS, JavaScript</li>
                                        <li>React</li>

                                    </ul>
                                </div>
                            </div>
                            <img className='border-bottom' src={border} />
                        </label>
                        <label htmlFor="radio-2" className="card" id="card-2">
                            <img className='border-top' src={border} />
                            <h3>Lenguajes de Programación:</h3>
                            <div className='training-data'>
                                <img src={proLanguage.arduino} />
                                <div className='training-info'>
                                    <ul>
                                        <li>Diseños electronicos</li>
                                        <li>IoT Internet de las cosas</li>
                                        <li>Manejo de Microcontroladores</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='training-data'>
                                <img src={proLanguage.javascript} />
                                <div className='training-info'>
                                    <ul>
                                        <li>Manejo del DOM</li>
                                        <li>Manejo de Arrays</li>
                                        <li>Programación estructurada</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='training-data'>
                                <img src={proLanguage.react} />
                                <div className='training-info'>
                                    <ul>
                                        <li>Manejo useState, useContext, useRef</li>
                                        <li>Manejo de Rutas</li>
                                        <li>Conocimientos en webpack</li>

                                    </ul>
                                </div>
                            </div>
                            <img className='border-bottom' src={border} />
                        </label>
                        <label htmlFor="radio-3" className="card" id="card-3">
                            <img className='border-top' src={border} />
                            <img className='card-photo' src={photo} alt="" />
                            <div className='card-name'>
                                <p>Hola soy</p>
                                <h2>Angel Velasco</h2>
                                <p>Ingeniero en Electrónica y Programador Frontend Developer</p>
                            </div>
                            <img className='border-bottom' src={border} />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebSite;