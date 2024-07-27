import React, { useEffect, useState } from 'react';

import headerCSS from './header.module.css'
import { Link, NavLink } from 'react-router-dom';
import Search from './Search-Bar/Search';

export default function Header() {

    const [count, setCount] = useState(0)
    const [searchDisplay, setSearchDisplay] = useState(false)

    useEffect(() => {

        // ====== nav-phone-handling ====== //

        const nav_ph = document.getElementById('nav_ph');
        const nav = document.getElementById('nav');

        nav_ph.onclick = () => {

            setCount(count+1);

            if(count % 2 === 0){

                nav.classList.add(headerCSS.display_nav);
                nav_ph.classList.add(headerCSS.change);

            }
            else{

                nav.classList.remove(headerCSS.display_nav);
                nav_ph.classList.remove(headerCSS.change);

            }

        };

        nav.onclick = () =>{

            nav.classList.remove(headerCSS.display_nav);
            nav_ph.classList.remove(headerCSS.change);
            setCount(0);

        };

        // ====== Handling-Search-Bar ====== //

        const navBtn = document.getElementById('searchBar');

        navBtn.onclick = () =>{

            setSearchDisplay(true);

        }

    } , [count]);

    return <React.Fragment>

        <header>

            {searchDisplay ? <Search display={setSearchDisplay} /> : ''}

            <div className={headerCSS.logo}>

                <Link to={'/'}><img src={require('../../Images/logo-1.png')} alt="" /></Link>

            </div>

            <div className={headerCSS.location}>

                <p className={headerCSS.location_title}>Deliver to:</p>

                <div className={headerCSS.location_det}>

                    <i className="fa-solid fa-location-dot"></i>
                    <span className={headerCSS.static}>Current Location</span>
                    <span className={headerCSS.dynamic}>Mohammadpur Bus Stand, Dhaka</span>

                </div>

            </div>

            <nav id='nav'>

                <div id='searchBar' className={headerCSS.navLinks}><i className="fa-solid fa-magnifying-glass"></i> <span>Search</span></div>

                <NavLink className={headerCSS.navLinks} to={'/auth'}><i className="fa-regular fa-user"></i> <span>Sign Up</span></NavLink>

                <NavLink className={headerCSS.navLinks} to={'/cart'}><i className="fa-solid fa-cart-shopping"></i> <span>User Cart</span></NavLink>

                <NavLink className={headerCSS.navLinks} to={'/wish'}><i className="fa-regular fa-heart"></i> <span>Wish List</span></NavLink>

            </nav>

            <div id='nav_ph'  className={headerCSS.nav_ph}>

                <span className={headerCSS.nav_span}></span>
                <span className={headerCSS.nav_span}></span>
                <span className={headerCSS.nav_span}></span>

            </div>

        </header>

    </React.Fragment>

}
