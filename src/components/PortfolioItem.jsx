import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@stylesComponents/PortfolioItem.css';
const PortfolioItem = ({item}) => {
    const {state}= useContext(AppContext);
    const {english}= state;
    return (
        <div className='Portfolio-item'>
            <img className='Portfolio-image' src={item.image} alt={item.title}/>
            <div className='card-style'></div>
            <div className='Portfolio-info'>
                <h3>{item.title}</h3>
                <div className='Portfolio-logos'>
                    {item.programming.map(program=>(
                        <img key={program} src={program}/>
                    ))}
                </div>
                <div className='item-description'>
                        <p>{(english) ?item.description.en :item.description.es}</p>
                </div>
            </div>       
                
        </div>
    );
};

export default PortfolioItem;