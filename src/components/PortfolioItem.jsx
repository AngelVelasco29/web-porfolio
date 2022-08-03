import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@stylesComponents/PortfolioItem.css';
import { Link } from 'react-router-dom';
import WebSite from './WebSite';
const PortfolioItem = ({item}) => {
    const {state}= useContext(AppContext);
    const {english}= state;
    const ScrollLanguage= React.createRef();
    const handleScrollLeft=()=>{
        ScrollLanguage.current.scrollLeft-=80;
    }
    const handleScrollRight=()=>{
        ScrollLanguage.current.scrollLeft+=80;
    }

    return (
        <div className='Portfolio-item'>
            <img className='Portfolio-image' src={item.image} alt={item.title}/>
            <div className='card-style'></div>
            <div className='Portfolio-info'>
                <h3 title={(english) ?item.title.en:item.title.es}>{(english) ?item.title.en:item.title.es}</h3>
                <div className='Portfolio-logos' ref={ScrollLanguage}>
                    <div className='container-scroll'>
                        {item.programming.map(program=>(
                            <div className='container-program' key={program}>
                                <img src={program}/>
                            </div>
                        ))}
                    </div>
                </div>
                <i className="arrow left-arrow fa-solid fa-chevron-left" onClick={handleScrollLeft}></i>
                <i className="arrow right-arrow fa-solid fa-angle-right" onClick={handleScrollRight}></i>
                <div className='item-description'>
                        <p>{(english) ?item.description.en :item.description.es}</p>
                </div>
                <div className='Portfolio-buttons'>
                    <Link to={'/proyect/'+item.title.es.toLowerCase().split(' ').join('-')}>
                        <button className='Portfolio-button button-ver'>{(english) ? 'Web Page': 'Página Web'}</button>
                    </Link>
                    <a href={item.github} target="_blank">
                        <button className='Portfolio-button button-github'><i className="fa-brands fa-github"></i>{(english) ? 'Code': 'Código'}</button>
                    </a>
                </div>
            </div>       
                
        </div>
    );
};

export default PortfolioItem;