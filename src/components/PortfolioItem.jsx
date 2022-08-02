import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@stylesComponents/PortfolioItem.css';
import { Link } from 'react-router-dom';
const PortfolioItem = ({item}) => {
    const {state}= useContext(AppContext);
    const {english}= state;
    return (
        <div className='Portfolio-item'>
            <img className='Portfolio-image' src={item.image} alt={item.title}/>
            <div className='card-style'></div>
            <div className='Portfolio-info'>
                <h3 title={item.title}>{item.title}</h3>
                <div className='Portfolio-logos'>
                    {item.programming.map(program=>(
                        <img key={program} src={program}/>
                    ))}
                </div>
                <div className='item-description'>
                        <p>{(english) ?item.description.en :item.description.es}</p>
                </div>
                <div className='Portfolio-buttons'>
                    <Link to={'/proyect/'+item.title.toLowerCase().split(' ').join('-')}>
                        <button className='Portfolio-button button-ver'>Pagina Web</button>
                    </Link>
                    <a href={item.github} target="_blank">
                        <button className='Portfolio-button button-github'><i className="fa-brands fa-github"></i>Codigo</button>
                    </a>
                </div>
            </div>       
                
        </div>
    );
};

export default PortfolioItem;