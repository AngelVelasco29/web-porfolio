import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@stylesComponents/About.css';

const About = () => {
    const { state } = useContext(AppContext);
    const { english, darkMode, myInfo } = state;
    return (
        <div className={(darkMode) ? 'About-container dark letter-color-dark' : 'About-container'}>
            <h2>{(english)? 'About me': 'Acerca de mí'}</h2>
            {(english) ? myInfo.en.about.map((info, index) => <p key={'p' + index}>{info}</p>) : myInfo.es.about.map((info, index) => <p key={'p' + index}>{info}</p>)}
            <div className='About-hobbies' >
                <p>{(english) ? 'Hobbies' : 'Pasatiempos'}</p>
                <div className='hobbies'>
                    {(english) ? myInfo.en.hobbies.map(info => <span key={info}>{info}</span>) : myInfo.es.hobbies.map(info => <span key={info}>{info}</span>)}
                </div>
            </div>
        </div>
    );
};

export default About;