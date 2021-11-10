import React from 'react';
import classes from './contact.module.css';

const Contact = () => {
    return (
        <div className={classes.Contact}>
            <span><a href='mailto:adrian.marquis78@gmail.com' className='contact-link' target='_blank'rel='noopener noreferrer'><i class="fas fa-envelope"></i></a></span>
            <span><a href='https://github.com/schism578' className='contact-link' target='_blank' rel='noopener noreferrer'><i class="fab fa-github-square"></i></a></span>
            <span><a href='https://linkedin.com/in/amarquis3' className='contact-link' target='_blank' rel='noopener noreferrer'><i class="fab fa-linkedin"></i></a></span>
        </div>
    )
}

export default Contact;