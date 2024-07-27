import React from 'react';
import { motion } from "framer-motion";

import searchCSS from './search.module.css';

export default function Search({display}) {

    const container = {

        hidden: { opacity: 0 },

        visible: {

            opacity: 1,
            transition: {

                delayChildren: 0.3,
                staggerChildren: 0.2

            }

        }

    };

    const item = {

        hidden: { y: 20, opacity: 0 },

        visible: {

            y: 0,
            opacity: 1

        }

    };

    const closeBar = () =>{

        display(false);

    }

    return <React.Fragment>

        <motion.div className={searchCSS.container} variants={container} initial="hidden" animate="visible">

            <motion.span onClick={closeBar} variants={item} className={searchCSS.span}><i className="fa-solid fa-xmark"></i></motion.span>

            <motion.form variants={item} className={searchCSS.form}>

                <input className={searchCSS.input} type="text" placeholder='What are you looking for...' />

                <button className={searchCSS.button} type='submit'>Search</button>

            </motion.form>

        </motion.div>

    </React.Fragment>

}
