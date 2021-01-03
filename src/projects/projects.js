import React from 'react';
import './projects.css';

export default function Projects() {
    return (
        <div>
            <h2>projects</h2>
            <h3>- uncorked -</h3>
                <img src='/images/home.png' alt='home page screenshot' id='uncorked-image' />
                <img src='/images/main.png' alt='main page screenshot' id='uncorked-image' />
                <p>
                    Uncorked is a way to record your favorite wine experiences. 
                    <br></br>
                    <br></br>
                    Open something new, save the details, remember and revisit your 
                    favorites by searching any of those details.
                    <br></br>
                    <br></br>
                    I have employed full JWT Auth security with a custom API that saves and
                    retrieves user entries for logged wines. User search can be of one or multiple
                    criteria.
                    <br></br>
                    <br></br>
                    Future enhancements will include native camera access and image storage, 
                    social media platform, and obtaining unique awards through logging wines of distinction.
                    <br></br>
                    <br></br>
                    tech used:
                    <br></br>
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-css3-alt"></i>
                    <i className="fab fa-js-square"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-node"></i>
                    <br></br>
                    <br></br>
                    links:
                    <br></br>
                    <a href='https://uncorked-client-dqm5m1mwx.vercel.app' className='app-link' target='_blank'rel='noopener noreferrer'>live link</a>
                    <a href='https://github.com/schism578/uncorked-client.git' className='app-link' target='_blank'rel='noopener noreferrer'>client</a>
                    <a href='https://github.com/schism578/uncorked-api.git' className='app-link' target='_blank'rel='noopener noreferrer'>server</a>
                </p>
                <br></br>
                <br></br>
                <div className='split'></div>
                <h3>- YouMove -</h3>
                <img src='/images/ym-home.png' alt='home page screenshot' id='uncorked-image' />
                <img src='/images/entry.png' alt='main page screenshot' id='uncorked-image' />
                <p>
                    YouMove combines a user's caloric intake with their exercise output. 
                    By calculating the user's basal metabolic rate (BMR) and subtracting it from their daily caloric 
                    intake, a caloric deficit is produced and used to search the YouTube v3 Data API for workout videos. 
                    In the case that a user's caloric intake is lower than their BMR and their caloric deficit is a 
                    negative number, healthy recipe cooking videos are provided instead. If, or when, the videos do not 
                    suffice to provide challenge or interest, links to safe COVID-era activities at the bottom of the page 
                    are navigable.  
                    <br></br>
                    <br></br>
                    JWT Auth security is implemented along with user profile updating and React Calendar
                    which displays a user's calorie entries over time.
                    <br></br>
                    <br></br>
                    Future enhancements will include food logging for calorie calculation accuracy and linking
                    fitness watch data to the user's experience.
                    <br></br>
                    <br></br>
                    tech used:
                    <br></br>
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-css3-alt"></i>
                    <i className="fab fa-js-square"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-node"></i>
                    <br></br>
                    <br></br>
                    links:
                    <br></br>
                    <a href='https://you-move-client-qio169tja.vercel.app' className='app-link' target='_blank'rel='noopener noreferrer'>live link</a>
                    <a href='https://github.com/schism578/you-move-client.git' className='app-link' target='_blank'rel='noopener noreferrer'>client</a>
                    <a href='https://github.com/schism578/you-move-api.git' className='app-link' target='_blank'rel='noopener noreferrer'>server</a>
                </p>
        </div>
    )
}