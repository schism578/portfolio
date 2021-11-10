import classes from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <AiOutlineMenu className={classes.Hamburger} size="40px" color="black" onClick={() => setOpen(!open) } />

    const closeIcon = <AiOutlineClose className={classes.Hamburger} size="40px" color="black" onClick={() => setOpen(!open) } />

    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className={classes.MobileNavigation}>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}

export default MobileNavigation;