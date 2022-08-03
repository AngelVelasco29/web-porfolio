import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@stylesComponents/WebSite.css';
import border from '@images/border.png'
const WebSite = () => {
    const { state } = useContext(AppContext);
    const { mv, ittg, platzi } = state.training.images;
    const { myInfo, proLanguage, english } = state;
    return (
        <div className='Visual-web'>
            <div className='Web-content'>
                <div className='Web-slider'>
                    <input type="radio" name="slider-1" id="radio-1" value="radio-1"  />
                    <input type="radio" name="slider-1" id="radio-2" value="radio-2" />
                    <input type="radio" name="slider-1" id="radio-3" value="radio-3" defaultChecked/>
                    <div className="cards">
                        <label htmlFor="radio-1" className="card" id="card-1">
                            <img className='border-top' src={border} />
                            <h3>Formación y habilidades:</h3>
                            <div className='training-data'>
                                <img src={ittg} />
                                <div className='training-info'>
                                    <ul>
                                    {(english) ? myInfo.en.ittg.map((info)=> <li key={info}>{info}</li>):myInfo.es.ittg.map(info=> <li key={info}>{info}</li>) }
                                    </ul>
                                </div>
                            </div>
                            <div className='training-data'>
                                <img src={platzi} />
                                <div className='training-info'>
                                    <ul>
                                        {(english) ? myInfo.en.platzi.map((info)=> <li key={info}>{info}</li>):myInfo.es.platzi.map(info=> <li key={info}>{info}</li>) }
                                    </ul>
                                </div>
                            </div>
                            <div className='training-data'>
                                <img src={mv} />
                                <div className='training-info'>
                                    <ul>
                                        {(english) ? myInfo.en.mv.map((info)=> <li key={info}>{info}</li>):myInfo.es.mv.map(info=> <li key={info}>{info}</li>) }
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
                                    {(english) ? myInfo.en.arduino.map((info)=> <li key={info}>{info}</li>):myInfo.es.arduino.map(info=> <li key={info}>{info}</li>) }
                                    </ul>
                                </div>
                            </div>
                            <div className='training-data'>
                                <img src={proLanguage.javascript} />
                                <div className='training-info'>
                                    <ul>
                                    {(english) ? myInfo.en.javascript.map((info)=> <li key={info}>{info}</li>):myInfo.es.javascript.map(info=> <li key={info}>{info}</li>) }
                                    </ul>
                                </div>
                            </div>
                            <div className='training-data'>
                                <img src={proLanguage.react} />
                                <div className='training-info'>
                                    <ul>
                                    {(english) ? myInfo.en.react.map((info)=> <li key={info}>{info}</li>):myInfo.es.react.map(info=> <li key={info}>{info}</li>) }

                                    </ul>
                                </div>
                            </div>
                            <img className='border-bottom' src={border} />
                        </label>
                        <label htmlFor="radio-3" className="card" id="card-3">
                            <img className='border-top' src={border} />
                            <img className='card-photo' src={myInfo.photo} alt="" />
                            <div className='card-name'>
                                <p>{(english) ?myInfo.en.hello : myInfo.es.hello}</p>
                                <h2>Angel Velasco</h2>
                                <p>{(english) ?myInfo.en.engineer : myInfo.es.engineer}</p>
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