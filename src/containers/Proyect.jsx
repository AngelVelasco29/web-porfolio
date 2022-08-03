import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import { useParams } from 'react-router-dom';
import VisualProyect from '../components/VisualProyect';
import '@stylesComponents/Proyect.css';

const Proyect = () => {

    const params = useParams();
    const { state } = useContext(AppContext);
    const { english, darkMode } = state;
    const pageProyect = state.portfolioItems.find(data => {
        if (data.title.es.toLowerCase().split(' ').join('-') == params.title) {
            return data;
        }
    })
    return (
        <main className={(darkMode) ? 'dark' : ''}>
            {console.log(pageProyect)}
            <div className='Proyect-description'>
                <img className='Proyect-img' src={pageProyect.image} />
                <div className={(darkMode) ? 'Proyect-data letter-color-dark' : 'Proyect-data'}>
                    <h1>{(english) ? pageProyect.title.en : pageProyect.title.en} </h1>
                    <a className='Proyect-button button-webpage' href={pageProyect.webDeploy} target="_blank">{(english) ? 'Web Page' : 'Página Web'}</a>
                    <a href={pageProyect.github} target="_blank" className='Proyect-button button-github'>
                        <i className="fa-brands fa-github"></i>{(english) ? 'Code' : 'Código'}
                    </a>
                    <p>{(english) ? pageProyect.description.en : pageProyect.description.es}</p>
                    <div className='Proyect-image-language'>
                        {pageProyect.programming.map(program => (
                            <div className='Proyect-data-language'>
                                <img className='Proyect-language' key={program} src={program} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <VisualProyect webDeploy={pageProyect.webDeploy} />
        </main>
    );
};

export default Proyect;