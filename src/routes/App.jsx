import React from 'react';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Proyect from '@container/Proyect'
import NotFound from '../containers/NotFound';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';
import Portfolio from '../components/Portfolio';

const App = () => {
    const initialState = useInitialState()
    return (

        <AppContext.Provider value={initialState}>
            <HashRouter basename='/'>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/proyect" element={<Portfolio/>} />
                        <Route exact path="/proyect/:title" element={<Proyect/>} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </HashRouter>
        </AppContext.Provider>
    );
};

export default App;