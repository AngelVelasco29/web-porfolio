import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import VisualLogo from "@logos/visualLogo.png";
import '@stylesComponents/Visual.css';
import WebSite from './WebSite';
import Code from './Code';
const Visual = () => {
    const {state}= useContext(AppContext);
    const {darkMode}= state;
    return (
        <div className={(darkMode) ?'Visual-container body-dark': 'Visual-container'}>
            <div className='Visual'>
                <div className='Visual-options'>
                    <img src={VisualLogo} alt="Logo Visual Studio Code" />
                    <span>File</span>
                    <span>Edit</span>
                    <span>Selection</span>
                    <span>View</span>
                    <span>Go</span>
                    <span>Run</span>
                    <span>Terminal</span>
                    <span>Help</span>
                </div>
                <div className='Visual-icons'>
                    <i className="fa-solid fa-copy select-icon"></i>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-code-branch"></i>
                    <i className="fa-solid fa-play"></i>
                    <i className="fa-solid fa-cubes"></i>
                </div>
                <div className='Visual-explorer'>
                    <span className='span-explorer'>EXPLORER</span>
                    <p><i className="fa-solid fa-angle-down"></i>Portfolio</p>
                    <div className='Visual-explorer-container'>
                        <span><i className="fa-brands fa-html5"></i>index.html</span>
                        <span><i className="fa-brands fa-css3-alt"></i>style.css</span>
                        <span><i className="fa-brands fa-square-js"></i>js.js</span>

                    </div>
                </div>
                <div className='Visual-panel Visual-left-panel'>
                    <div className='Visual-files'>
                        <button>
                            <i className="fa-brands fa-html5"></i>   index.html
                        </button>
                        <button>
                            <i className="fa-brands fa-css3-alt"></i>   style.css
                        </button>
                        <button>
                            <i className="fa-brands fa-square-js"></i>   js.js
                        </button>
                    </div>
                    <span><i className="fa-brands fa-html5"></i>   index.html</span>
                    <Code/>
                </div>
                <div className='Visual-panel Visual-right-panel'>
                    <div className='Visual-files'>
                        <button>
                            <i className="fa-solid fa-align-left"></i>   Simple Browser
                        </button>
                    </div>
                    <div className="Visual-link">
                        <i className="fa-solid fa-arrow-left"></i>
                        <i className="fa-solid fa-arrow-right"></i>
                        <i className="fa-solid fa-rotate-right"></i>
                        <div className='Visual-local'>
                            <span>http://localhost/</span>
                        </div>
                    </div>
                    <WebSite/>

                </div>

            </div>
        </div>
    );
};

export default Visual;