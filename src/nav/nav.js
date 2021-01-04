import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return (
        <div>
            <ul className='nav-links'>
                <li>
                </li>
                <li className='nav-button'>
                    <Link to='/'>home</Link>
                </li>
                <li className='nav-button'>
                    <Link to='/bio'>bio</Link>
                </li>
                <li className='nav-button'>
                    <Link to='/projects'>projects</Link>
                </li>
                <li className='nav-button'>
                    <Link to='/future'>future</Link>
                </li>
                <li className='nav-button'>
                    <Link to='/contact'>contact</Link>
                </li>
            </ul>
        </div>
    )
}