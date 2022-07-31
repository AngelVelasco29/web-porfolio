import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';

const App = () => {
    const initialState = useInitialState()
    return (

        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;