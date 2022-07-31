import React, { useContext } from 'react';
import PortfolioItem from '@components/PortfolioItem';
import AppContext from '@context/AppContext';
import '@stylesComponents/Portfolio.css';
const Portfolio = () => {
    const {state}= useContext(AppContext);
    const {portfolioItems}=state;
    const {es}= state.language;
    const {en}=state.language;
    const {english, darkMode}= state;
    return (
        <div className='Portfolio-container'>
            <h2>{(english) ?en.portfolio : es.portfolio}</h2>
            <div className='Portfolio-items'>
                {portfolioItems.map(item=>(<PortfolioItem key={item.id} item={item}/>))}
            </div>
        </div>
    );
};

export default Portfolio;