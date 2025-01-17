import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import '../../../src/assets/KYM-logo.png';
import '../../components/Button/button.sass';
import './Main.sass';

function Main() {
        return (
            <div>
                <div className="home-container">
                    <section className="hero flex-center-col">
                        <h1>Build Your Yoga Class</h1>
                        <p>Put your class together today</p>
                        <div>
                            <button className="button-outlined">
                                <Link to={'/about'}  >Learn More</Link></button>
                            <button className={"button-solid"}>
                                <Link to={'/register'} >Start Building</Link>
                            </button>

                        </div>
                    </section>
                    <section className="get-started flex-center-col">
                        <h1>Loving it is easy</h1>
                        <div className="flex-center-row">
                            <div className="headings">
                                <span className="lg-dot"></span>
                                <h2>Heading 1</h2>
                                <p>lorem ipsom</p>
                            </div>
                            <div className="headings">
                                <span className="lg-dot"></span>
                                <h2>Heading 2</h2>
                                <p>lorem ipsom</p>
                            </div>
                            <div className="headings">
                                <span className="lg-dot"></span>
                                <h2>Heading 3</h2>
                                <p>lorem ipsom</p>
                            </div>
                        </div>
                        <Link to={'/register'} className={"button-solid"} >Start Building</Link>
                    </section>
                    <section className="content flex-center-col">
                        <h1>How It Works</h1>
                        <div className="flex-center-row">
                            <span className="sm-dot"></span>
                            <div className="pad-content">
                                <h2>Step 1</h2>
                                <p>lorem ipsom lorem ipsom</p>
                                <p>lorem ipsom lorem ipsom</p>
                            </div>
                        </div>
                        <div className="flex-center-row">
                            <span className="sm-dot"></span>
                            <div className="pad-content">
                                <h2>Step 2</h2>
                                <p>lorem ipsom lorem ipsom</p>
                                <p>lorem ipsom lorem ipsom</p>
                            </div>
                        </div>
                        <div className="flex-center-row">
                            <span className="sm-dot"></span>
                            <div className="pad-content">
                                <h2>Step 3</h2>
                                <p>lorem ipsom lorem ipsom</p>
                                <p>lorem ipsom lorem ipsom</p>
                            </div>
                        </div>
                        <div id="content-bt">
                            <button className={"button-solid"} >
                                <Link to={'/register'}>Build Your First Class</Link>
                            </button>

                        </div>
                    </section>
                    <section className="carousel">
                        Carousel
                    </section>
                </div>
            </div>
        )
    }

export default Main;