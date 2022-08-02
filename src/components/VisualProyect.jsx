import React from 'react';
import '@stylesComponents/VisualProyect.css';
const VisualProyect = ({webDeploy}) => {
    window.scrollTo(0, 0);
    return (
        <iframe className='VisualProyect-iframe' src={webDeploy}>

        </iframe>
    );
};

export default VisualProyect;