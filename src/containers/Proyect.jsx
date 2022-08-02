import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import { useParams } from 'react-router-dom';
import VisualProyect from '../components/VisualProyect';

const Proyect = () => {
    const params=useParams();
    const {state}= useContext(AppContext);
    const pageProyect=state.portfolioItems.find(data=>{
        if(data.title.toLowerCase().split(' ').join('-')==params.title){
            return data;
        }
    })
    console.log(pageProyect);
    return (
        <main>
            <VisualProyect webDeploy={pageProyect.webDeploy}/>
        </main>
    );
};

export default Proyect;