import React from 'react';

import mainCSS from './main.module.css'; 

export default function Main() {

    return <React.Fragment>

        <div className={mainCSS.container}>

            <img className={mainCSS.bg_image} src={require('../../../Images/main.png')} alt="" />

            <div className={mainCSS.main_content}>

                <div className={mainCSS.title}>

                    <h2>Are you starving?</h2>

                    <p>Within a few clicks, find meals that are accessible near you</p>

                </div>

                <div className={mainCSS.food_box}>

                    <div className={mainCSS.top}>

                        <button><i id={mainCSS.icon} className="fa-solid fa-motorcycle"></i> <p className={mainCSS.btn_content}>Delivery</p></button>

                        <button><i id={mainCSS.icon} className="fa-solid fa-bag-shopping"></i> <p className={mainCSS.btn_content}>Pickup</p></button>

                    </div>

                    <div className={mainCSS.bottom}>

                        <form action="">

                            <div className={mainCSS.input}>

                                <label htmlFor=""><i className="fa-solid fa-location-dot"></i></label>
                                <input type="text" placeholder='Enter Your Address' />

                            </div>

                            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i> Find Food</button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    </React.Fragment>

}
