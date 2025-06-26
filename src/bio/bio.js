import React from 'react';
import classes from './bio.module.css';

const Bio = () => {
    return (
        <div className={classes.Bio}>
            <p>After completing Thinkful's Full Stack Web Development bootcamp in 2021, I transitioned into tech following 
            two decades in Chicago's fine dining industry. This career shift was driven by a desire to challenge myself 
            and explore the full breadth of web development. With a creative eye and a methodical mindset, I found a 
            natural alignment with front-end development &mdash; where design, structure, and user experience converge.</p>
          <p>Along the way, I've come to appreciate the deep connection between programming and storytelling. Just as in
             narrative writing, building an application involves characters, dialogue, interaction, and an intentional 
             path forward &mdash; each element working together to deliver a purposeful outcome.</p>
          <p>I bring to my work a strong sense of duty, a commitment to environmental conservation, and a passion for 
            building tools that uplift others. With imagination as the starting point, I believe technology can &mdash; and 
            should &mdash; serve the greater good.</p>
        </div>
    )
}

export default Bio;