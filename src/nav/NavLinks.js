import classes from './NavLinks.module.css';
import { motion } from 'framer-motion';

const NavLinks = (props) => {

    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };

    return (
        <div className={classes.NavLinks}>
            <nav>
                <ul>
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay:0.05}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href='/'>home</a>
                    </motion.li>
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay:0.10}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href='/bio'>bio</a>
                    </motion.li>
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay:0.20}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href='/projects'>projects</a>
                    </motion.li>
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay:0.30}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href='/future'>future</a>
                    </motion.li>
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay:0.40}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href='/contact'>contact</a>
                    </motion.li>
                </ul>
            </nav>
        </div>
    )
}

export default NavLinks;