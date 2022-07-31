import clonTwitter from '@portfolio/clon-twitter.PNG';
import clonYoutube from '@portfolio/clon-youtube.PNG';
import pokedex from '@portfolio/pokedex.PNG';
import timer from '@portfolio/timer.PNG';
import inicioMV from '@portfolio/inicioMV.PNG';
import wordle from '@portfolio/wordle.PNG';
import html5 from '@portfolio/html5.svg';
import css from '@portfolio/css.svg';
import javascript from '@portfolio/Javascript.svg';


export default {
    english:false,
    darkMode:false,
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
            'description':{
                'es':'Este proyecto tuvo como proposito mejorar mis habilidades en CSS, como por ejemplo en el uso de GRID, FLEX.',
                'en':' english'
            },
        },
        {
            'id': '2',
            'image': wordle,
            'title': 'Encuentra la Palabra',
            'programming':[javascript],
            'description':{
                'es':'Este proyecto tuvo como proposito mejorar mis habilidades en javaScript, como por ejemplo en el uso de Arrays y sus metodos.',
                'en':' english'
            },
        },
        {
            'id': '3',
            'image': clonYoutube,
            'title': 'Clon de Youtube',
            'programming':[css],
            'description':{
                'es':'Este proyecto tuvo como proposito mejorar mis habilidades en CSS, como por ejemplo en el uso de GRID, FLEX.',
                'en':' english'
            },
        },
        {
            'id': '4',
            'image': timer,
            'title': 'Cronometro, Temporizador y Pomodoro',
            'programming':[html5],
            'description': {
                'es':'Este proyecto tuvo como proposito mejorar mis habilidades en JavaScript, como por ejemplo el uso del setInterval y manejo del DOM. ',
                'en':' english'
            },
        },
        {
            'id': '5',
            'image': clonTwitter,
            'title': 'Clon de inicio de Sesión de Twitter',
            'programming':[html5],
            'description': {
                'es':'Este proyecto tuvo como proposito mejorar mis habilidades en CSS, como por ejemplo el posicionamiento de los elementos, manejo del DOM y creacion de formularios. ',
                'en':' english'
            },
        },
        {
            'id': '6',
            'image': inicioMV,
            'title': 'Inicio de sesión',
            'programming':[css],
            'description': {
                'es':'Este proyecto tuvo como proposito mejorar mis habilidades en CSS, como por ejemplo el posicionamiento de los elementos y creacion de formularios. ',
                'en':' english'
            },
        },
        
    ],
};