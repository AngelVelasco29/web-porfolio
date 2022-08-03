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

    const languageDark=(payload,payload2)=>{
        setState({
            ...state,
            english:payload,
            darkMode:payload2
        })
    }

    const dark=(payload)=>{
        setState({
            ...state,
            darkMode:!payload
        })
    }

    const changeTextArea=(payload)=>{
        setState({
            ...state,
            textarea:payload
        })
    }

       return {
        state,
        language,
        dark,
        changeTextArea,
        languageDark
    }
};



export default useInitialState;