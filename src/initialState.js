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
import mv from '@portfolio/mv.png';

export default {
    english: false,
    darkMode: false,
    proLanguage: {
        'html': html5,
        'css': css,
        'javascript': javascript,
        'react': react,
        'arduino': arduino,
    },
    textarea: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width">\n  <title>Acerca de mí</title>\n</head>\n<body>\n  <div>\n    <p>EN CONSTRUCCION</p>\n  </div>\n</body>\n</html>',
    myInfo: {
        'photo': photo,
        'es': {
            'hello': 'Hola soy',
            'engineer': 'Ingeniero en Electrónica y Programador Frontend Developer',
            'ittg': [
                'Ingeniería en Electrónica',
                'Programación C++ y Arduino',
            ],
            'platzi': [
                'Html5, CSS, JavaScript',
                'React'
            ],
            'mv': [

            ],
            'arduino': [
                'Diseños electronicos',
                'IoT Internet de las cosas',
                'Manejo de Microcontroladores'
            ],
            'javascript': [
                'Manejo del DOM',
                'Manejo de Arrays',
                'Programación estructurada',
            ],
            'react': [
                'Manejo useState, useContext, useRef',
                'Manejo de Rutas',
                'Conocimientos en webpack'
            ],
            'about': [
                'Hola soy Angel Velasco, Ingeniero en Electrónica, egresado del Instituto Tecnológico de Tuxtla Gutiérrez.',
                'Actualmente dirijo una empresa de Electrónica y componentes tecnológicos.',
                'Tengo conocimientos en programación, marketing, diseño, electrónica.',
                'Mi mayor pasión es la programación y en la actualidad me estoy especializando más para poder obtener mejores herramientas que permitan obtener mejor posicionamiento profesional y laboral.',
                'Dentro de mis metas a mediano plazo se encuentra poder trabajar de freelance en una empresa en el extranjero, pero si se presenta la oportunidad de poder viajar fuera de mi país, sin duda sería una gran experiencia. ',
            ],
            'hobbies': [
                'Programar', 'Estudiar', 'Viajar', 'Ver peliculas', 'Ir al cine', 'Jugar Futbol', 'Jugar Voleibol', 'Nadar', 'Cocinar postres', 'Leer', 'Armar Rompecabezas'
            ],
        },
        'en': {
            'hello': 'Hi I am',
            'engineer': 'Electronic Engineer and Programmer Frontend Developer',
            'ittg': [
                'Electronic Engineering',
                'C++ and Arduino programming',
            ],
            'platzi': [
                'Html5, CSS, JavaScript',
                'React'
            ],
            'mv': [

            ],
            'arduino': [
                'Electronic designs',
                'IoT internet of things',
                'Handling of Microcontrollers'
            ],
            'javascript': [
                'DOM handling',
                'Array Management',
                'structured programming'
            ],
            'react': [
                'Handling useState, useContext, useRef',
                'Route Management',
                'Knowledge in webpack'
            ],
            'about': [
                'I am an Electronic Engineer, graduated from the Technological Institute of Tuxtla Gutiérrez.',
                'I am ran an electronics and technology components company.',
                'My greatest passion is programming and I am currently specializing more in order to obtain better tools that allow me to obtain better professional and job positioning.',
                'Within my medium term goals is work as a freelancer in a company abroad. But if the opportunity arises to travel outside my country, it would certainly be a great experience',
            ],
            'hobbies': [
                'Programming', 'To Study', 'Read', 'Assamble puzzle','To travel','Watch Movies','Go to the movies','Play Soccer','Play voleybol','Swim','Cook',
            ],
        }
    },
    training: {
        'es': {

        },
        'en': {

        },
        'images': {
            'ittg': ittg,
            'platzi': platzi,
            'mv': mv
        }
    },
    language: {
        'es': {
            'aboutMe': 'Acerca de mí',
            'contact': 'Contacto',
            'portfolio': 'Portafolio',
            'blog': 'Blog',
        },
        'en': {
            'aboutMe': 'About me',
            'contact': 'Contact',
            'portfolio': 'Portfolio',
            'blog': 'Blog',
        }
    },
    portfolioItems: [
        {
            'id': '1',
            'image': pokedex,
            'title':
            {
                'es': 'PokeDex',
                'en': 'PokeDex'
            },
            'programming': [javascript,css, html5],
            'github': 'https://github.com/AngelVelasco29/pokedex',
            'webDeploy': 'https://angelvelasco29.github.io/pokedex/',
            'description': {
                'es': 'Este proyecto tuvo como propósito mejorar mis habilidades en CSS, como por ejemplo en el uso de GRID, FLEX.',
                'en': 'This project had the purpose of improving my skills in CSS, such as the use of GRID, FLEX.'
            },
        },
        {
            'id': '2',
            'image': webPortfolio,
            'title':
            {
                'es': 'Portafolio Web',
                'en': 'Portfolio Web',
            },
            'programming': [react, css],
            'github': 'https://github.com/AngelVelasco29/web-porfolio',
            'webDeploy': 'https://angelvelasco29.github.io/web-porfolio/',
            'description': {
                'es': 'Este proyecto me ayudó a conocer el manejo React, useContext, useRef, useState',
                'en': 'This project helped me get to know React, useContext, useRef, useState handling'
            },
        },
        {
            'id': '3',
            'image': wordle,
            'title': {
                'es': 'Encuentra la Palabra',
                'en': 'Find the Word'
            },
            'programming': [javascript, css, html5],
            'github': 'https://github.com/AngelVelasco29/Wordle',
            'webDeploy': 'https://angelvelasco29.github.io/Wordle/',
            'description': {
                'es': 'Este proyecto me permitió mejorar mis habilidades en javaScript, como por ejemplo en el uso de Arrays y sus métodos.',
                'en': 'This project allowed me to improve my JavaScript skills, such as the use of Arrays and their methods.'
            },
        },
        {
            'id': '4',
            'image': clonYoutube,
            'title': {
                'es': 'Clon de Youtube',
                'en': 'Youtube clone'
            },
            'programming': [css, html5],
            'github': 'https://github.com/AngelVelasco29/clon-you-tube',
            'webDeploy': 'https://angelvelasco29.github.io/clon-you-tube/',
            'description': {
                'es': 'Este proyecto tuvo como proposito mejorar mis habilidades en CSS, como por ejemplo en el uso de GRID, FLEX.',
                'en': 'This project had the purpose of improving my skills in CSS, such as the use of GRID, FLEX.'
            },
        },
        {
            'id': '5',
            'image': timer,
            'title': {
                'es': 'Cronometro, Temporizador y Pomodoro',
                'en': 'Stopwatch, Timer and Pomodoro'
            },
            'programming': [javascript,css,html5],
            'github': 'https://github.com/AngelVelasco29/PlatziTime',
            'webDeploy': 'https://angelvelasco29.github.io/PlatziTime/',
            'description': {
                'es': 'Con este proyecto tuve la oportunidad  de mejorar mis habilidades en JavaScript, como por ejemplo el uso del setInterval y manejo del DOM. ',
                'en': 'With this project I had the opportunity to improve my JavaScript skills, such as the use of setInterval and handling of the DOM.'
            },
        },
        {
            'id': '6',
            'image': clonTwitter,
            'title': {
                'es': 'Clon de inicio de Sesión de Twitter',
                'en': 'Twitter Login Clone'
            },
            'programming': [css,html5],
            'github': 'https://github.com/AngelVelasco29/twitter-clon',
            'webDeploy': 'https://angelvelasco29.github.io/twitter-clon/',
            'description': {
                'es': 'El propósito de este proyecto fue mejorar mis habilidades de CSS, como el posicionamiento de elementos. ',
                'en': 'The purpose of this project was to improve my CSS skills, such as the positioning of elements.'
            },
        },
        {
            'id': '7',
            'image': inicioMV,
            'title': {
                'es': 'Inicio de sesión',
                'en': 'Login'
            },
            'programming': [javascript,css, html5],
            'github': 'https://github.com/AngelVelasco29/inicio-de-sesion-mv',
            'webDeploy': 'https://angelvelasco29.github.io/inicio-de-sesion-mv/',
            'description': {
                'es': 'El propósito de este proyecto fue mejorar mis habilidades de CSS, como el posicionamiento de elementos.',
                'en': 'The purpose of this project was to improve my CSS skills, such as the positioning of elements.'
            },
        },

    ],
};