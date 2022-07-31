import React, { useState } from 'react';
import '@stylesComponents/Code.css';
let lines = [1, 2, 3];
const numbers = [];


const Code = () => {
    const textArea = React.createRef();
    const [change, setChange] = useState(false);
    const handleTextArea = () => {
        lines = textArea.current.value.split("\n");
        setChange(!change);
    }

    return (
        <div className='Visual-code'>
            <ul className='Visual-numbers'>
                {lines.map((line, index) => {
                    return <li key={index}>{index + 1}</li>
                })}
            </ul>
            <textarea ref={textArea} onChange={handleTextArea} />
        </div>
    );
};

export default Code;