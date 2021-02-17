import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    //this is setting click and its value to opposite-false/true/false/true
    
    const closeMobileMenu = () => setClick(false);
    return (
        <>
        <nav className='navbar'>
            <div className = 'navbar-container container'>
                <Link to ='/' className='navbar-logo'>
                    LOGO <i className='fab fa-typo3'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {/* need to make handleclick function ^^^^^ */}
                    {/* hamburger menu */}
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                {/* Whenyou click, it changes from hamburger to bars */}
                </div>
                <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
                    {/* //"if else" */}
                    <li className = 'nav-item'>
                        <Link to = "/" className = 'nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to = "/" className = 'nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to = "/" className = 'nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
            
        </>
    )
}

export default Navbar


















// import React, {useState} from 'react'
// import {Link } from 'react-router-dom'
// // import {MdFingerprint} from 'react-icons/md'
// // import{FBars, FaTimes} from 'react-icons/fa'

// function Navbar() {
// //functions go before return
// const [click, setClick] = useState(false)
// const handleClick = () => setClick(!click)
// //whenever you click, will show display

//     return (
//         <div className="navbar">
//             <div className= "navbar-container container">
//                 <Link to ='/' className = 'navbar-logo'>
//                     {/* <MdFingerprint className='navbar-icon'/> */}
//                         NAVBAR ICON
//                 </Link>
//             <div className='menu-icon' onClick={handleClick}>
            
//             {/* {click ? <FaTimes/> : <FaBars />}  */}
//             </div>

//             </div>

//         </div>
//     )
// }

// export default Navbar;

