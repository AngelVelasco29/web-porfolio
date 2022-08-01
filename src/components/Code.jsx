import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import '@stylesComponents/Code.css';
let lines=[];

const Code = () => {
    const InputTextarea = React.createRef();
    const {state, changeTextArea}=useContext(AppContext);
    const {textarea}=state;
    lines=textarea.split("\n");;
    const handleTextArea = () => {
        changeTextArea(InputTextarea.current.value);
        lines = textarea.split("\n");
    }

    return (
        <div className='Visual-code'>
            <ul className='Visual-numbers'>
                {lines.map((line, index) => {
                    return <li key={index}>{index + 1}</li>
                })}
            </ul>
            <textarea ref={InputTextarea} onChange={handleTextArea} value={textarea} />
        </div>
    );
};

export default Code;