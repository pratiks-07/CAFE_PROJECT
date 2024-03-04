import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
const About = () => {
    return (
        <>
            <section className="about" id='about'>
                <div className="container">
                    <div className="banner">
                        <div className="top">
                            <h1 className="heading">About Us</h1>
                            <p>The only thing we're sirious about is food !!!</p>
                        </div>
                        <p className='mid'>
                            We are a small, family-owned restaurant that has been serving
                            delicious, homemade food for over 20 years.
                            Our passion for
                            cooking and our commitment to using only the freshest
                            ingredients make our food a unique and enjoyable dining
                            experience.
                            Our menu features a variety of dishes, including our famous
                            homemade pasta, mouthwatering pizzas, and a selection of
                            appetizers and salads. We also offer a full bar with a
                            variety of wines, beers, and cocktails

                        </p>
                        <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight /></span></Link>
                    </div>

                    <div className="banner">
                        <img src="/about.png" alt="png" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default About