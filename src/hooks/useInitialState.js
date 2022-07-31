import {useState} from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state,setState]= useState(initialState);

    const language=(payload)=>{
        setState({
            ...state,
            english:!payload
        })
    }

    const dark=(payload)=>{
        setState({
            ...state,
            darkMode:!payload
        })
    }

       return {
        state,
        language,
        dark,
    }
};



export default useInitialState;