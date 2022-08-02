import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@stylesComponents/FormContact.css';
const InputText = ({name, type}) => {
    const {state}= useContext(AppContext);
    const {darkMode}= state;
    const input = React.createRef();
    const inputFocus= ()=>{
        input.current.previousElementSibling.classList.add('top');
        input.current.previousElementSibling.classList.add('focus');
        input.current.parentNode.classList.add('focus');
    }

    const inputBlur= ()=>{
        input.current.value= input.current.value.trim();
        if(input.current.value.length ==0){
            input.current.previousElementSibling.classList.remove('top');
        }
        input.current.previousElementSibling.classList.remove('focus');
        input.current.parentNode.classList.remove('focus');
    }

    return (
        <div className={(darkMode) ?'input-top input-dark': 'input-top'}>
            <label>
                <span htmlFor={name}>{name}</span>
                {(type=="text")
                    ? <input className="input input-dark" id={name} type="text" autoComplete="off" name={name} ref={input} onFocus={inputFocus} onBlur={inputBlur}/>
                    : <textarea className="input textarea" id={name} autoComplete="off" name={name} ref={input} onFocus={inputFocus} onBlur={inputBlur}/>
                }
            </label>
        </div>
    );
};

export default InputText;