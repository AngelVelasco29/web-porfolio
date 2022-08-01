import React, { useContext } from 'react';
import AppContext from '@context/AppContext';

const Social = () => {
    const { state } = useContext(AppContext);
    const { darkMode } = state;
    return (
        <nav className='Header-social'>
            <ul className='Header-social-ul'>
                <li>
                    <a href="https://github.com/AngelVelasco29" target="_blank" className={(darkMode) ? 'letter-color-dark' : ''}>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/angel_velasco_b" target="_blank" className={(darkMode) ? 'letter-color-dark' : ''}>
                        <i className="fa-brands fa-square-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href='https://www.facebook.com/profile.php?id=100004156099448' target="_blank" className={(darkMode) ? 'letter-color-dark' : ''}>
                        <i className="fa-brands fa-square-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href='https://instagram.com/angel_velasco_bonifaz?igshid=YmMyMTA2M2Y=' target="_blank" className={(darkMode) ? 'letter-color-dark' : ''}>
                        <i className="fa-brands fa-square-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href='https://wa.me/qr/CCLGT7QKC2THI1' target="_blank" className={(darkMode) ? 'letter-color-dark' : ''}>
                        <i className="fa-brands fa-square-whatsapp"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Social;