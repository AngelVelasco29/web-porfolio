import clonTwitter from '@portfolio/clon-twitter.jpeg';
import clonYoutube from '@portfolio/clon-youtube.PNG';
import pokedex from '@portfolio/pokedex.PNG';
import timer from '@portfolio/timer.PNG';
import inicioMV from '@portfolio/inicioMV.jpeg';
import wordle from '@portfolio/wordle.PNG';
import html5 from '@portfolio/html5.svg';
import css from '@portfolio/css.svg';
import javascript from '@portfolio/Javascript.svg';
import ittg from '@portfolio/ittg.svg';
import platzi from '@portfolio/platzi.png';
import photo from '@images/photo.jpg';
import react from '@portfolio/React.svg';
import webPortfolio from '@portfolio/portfolio.PNG';
import arduino from '@portfolio/arduino.svg';

export default {
    english:false,
    darkMode:false,
    proLanguage:{
        'html': html5,
        'css': css,
        'javascript':javascript,
        'react': react,
        'arduino': arduino,
    },
    textarea:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width">\n  <title>Acerca de mí</title>\n</head>\n<body>\n  <div>\n    <p>EN CONSTRUCCION</p>\n  </div>\n</body>\n</html>',
    myInfo:{
        'photo': photo,
    },
    training:{
        'es':{

        },
        'en':{

        },
        'images':{
            'ittg': ittg,
            'platzi': platzi,
        }
    },
    language:{
        'es': {
            'aboutMe':'Acerca de mí',
            'contact':'Contacto',
            'portfolio':'Portafolio',
            'blog': 'Blog',
            'greeting': 'Hola, yo soy',
            'name':'Angel Velasco'
        },    
        'en':{
            'aboutMe':'About me',
            'contact':'Contact',
            'portfolio':'Portfolio',
            'blog': 'Blog',
            'greeting': "Hi, I'm",
            'name':'Angel Velasco'
        }    
    },
    portfolioItems:[
        {
            'id': '1',
            'image': pokedex,
            'title': 'PokeDex',
            'programming':[javascript],
            'github':'https://github.com/AngelVelasco29/pokedex',
            'webDeploy':'https://angelvelasco29.github.io/pokedex/',
            'description':{
                'es':'Este proyecto tuvo como proposito mejorar mis habilidades en CSS, como por ejemplo en el uso de GRID, FLEX.',
                'en':' english'
            },
        },
        {
            'id': '2',
            'image': webPortfolio,
            'title': 'Portafolio Web',
            'programming':[react],
            'github':'https://github.com/AngelVelasco29/web-porfolio',
            'webDeploy':'https://angelvelasco29.github.io/web-porfolio/',
            'description':{
                'es':'Este proyecto me ayudo a conocer el manejo React, useContext, useRef, useState',
                'en':' english'
            },
        },
        {
            'id': '3',
            'image': wordle,
            'title': 'Encuentra la Palabra',
            'programming':[javascript],
            'github':'https://github.com/AngelVelasco29/Wordle',
            'webDeploy':'https://angelvelasco29.github.io/Wordle/',
            'description':{
                'es':'Este proyecto tuvo como proposito mejorar mis habilidades en javaScript, como por ejemplo en el uso de Arrays y sus metodos.',
                'en':' english'
            },
        },
        {
            'id': '4',
            'image': clonYoutube,
            'title': 'Clon de Youtube',
            'programming':[css],
            'github':'https://github.com/AngelVelasco29/clon-you-tube',
            'webDeploy':'https://angelvelasco29.github.io/clon-you-tube/',
            'description':{
                'es':'Este proyecto tuvo como proposito mejorar mis habilidades en CSS, como por ejemplo en el uso de GRID, FLEX.',
                'en':' english'
            },
        },
        {
            'id': '5',
            'image': timer,
            'title': 'Cronometro, Temporizador y Pomodoro',
            'programming':[html5],
            'github':'https://github.com/AngelVelasco29/PlatziTime',
            'webDeploy':'https://angelvelasco29.github.io/PlatziTime/',
            'description': {
                'es':'Este proyecto tuvo como proposito mejorar mis habilidades en JavaScript, como por ejemplo el uso del setInterval y manejo del DOM. ',
                'en':' english'
            },
        },
        {
            'id': '6',
            'image': clonTwitter,
            'title': 'Clon de inicio de Sesión de Twitter',
            'programming':[html5],
            'github':'https://github.com/AngelVelasco29/twitter-clon',
            'webDeploy':'https://angelvelasco29.github.io/twitter-clon/',
            'description': {
                'es':'Este proyecto tuvo como proposito mejorar mis habilidades en CSS, como por ejemplo el posicionamiento de los elementos, manejo del DOM y creacion de formularios. ',
                'en':' english'
            },
        },
        {
            'id': '7',
            'image': inicioMV,
            'title': 'Inicio de sesión',
            'programming':[css],
            'github':'https://github.com/AngelVelasco29/inicio-de-sesion-mv',
            'webDeploy':'https://angelvelasco29.github.io/inicio-de-sesion-mv/',
            'description': {
                'es':'Este proyecto tuvo como proposito mejorar mis habilidades en CSS, como por ejemplo el posicionamiento de los elementos y creacion de formularios. ',
                'en':' english'
            },
        },
        
    ],
};