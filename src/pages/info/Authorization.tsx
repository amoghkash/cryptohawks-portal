import * as React from 'react';
import './Authorization.css'
import { Link } from 'react-router-dom';

function Authorization() {
    return(
        <div className='roots'>
        <div className='bodys'>
        <div className="scene">
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <span className="bg-403">403</span>
            <div className="text">
                <span className="hero-text"></span>
                <span className="msg">can't let <span>you</span> in.</span>
                <span className="support">
                <span>unexpected?</span>
                <a href="mailto:amoghkashyap365@gmail.com">contact support</a>
                </span>
            </div>
            <div className="lock"></div>
        </div>
        </div>
        </div>
    )
}

export default Authorization