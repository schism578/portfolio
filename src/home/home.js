import React from 'react';
import classes from './home.module.css';

const Home = () => {
    return (
        <div className={classes.Home}>
            <p className='home-quote'>
                Where imagination meets engineering, the future takes shape.<br />
                Science fiction becomes science fact, and what was once impossible becomes inevitable.<br />
                Technology is not just a tool &mdash; it is a language of change, a bridge between vision and reality.<br />
                Code can protect the wild, empower the vulnerable, and connect the world with purpose.<br />
                Every line written is a chance to heal, to build, to inspire.<br />
                In the hands of the thoughtful, creation becomes conservation.<br />
                The future is not found &mdash; it is made.
            </p>
        </div>
    )
}

export default Home;