import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Log from '../components/log/Log';

const Home = () => {
    return (
        <div id='home'>
            <h1>Home Page</h1>
            <Header />
            <Form />
            <Log />
        </div>
    );
};

export default Home;