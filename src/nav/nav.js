import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return(
        <div>
            <ul className='nav-links'>
                <li>
                </li>
                <li>
                    <Link to='/'>
                        <button type='submit' className='nav-button'>
                            home
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='/bio'>
                        <button type='submit' className='nav-button'>
                            bio
                        </button>
                    </Link>
                </li>            
                <li>
                    <Link to='/projects'>
                        <button type='submit' className='nav-button'>
                            projects
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='/future'>
                        <button type='submit' className='nav-button'>
                            future
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        <button type='submit' className='nav-button'>
                            contact
                        </button>
                    </Link>
                </li>        
            </ul>
        </div>
    )
}