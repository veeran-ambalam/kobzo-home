import React from 'react'
import * as Icon from 'react-feather'
import ReactWOW from 'react-wow'

export default function FeaturesContent() {

    function showForm(){
        document.getElementById('mainForm').style.display = "block";

    }
    return (
        <React.Fragment>
            <div className="repair-main-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="repair-banner-content">
                                <h1>All Daily Essentials Within Your Employees’ Reach</h1>
                                <p>We have got your back! Your employees can now order basic essentials from Kobzo. Kobzo’s platform gives access to a wide range of products including groceries, home essentials, stationeries and more, along with secure delivery options for all your employees.</p>
                                <button className="btn btn-primary" onClick={showForm} >Contact Us</button>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="repair-banner-image">
                                <img 
                                    src={require('../../images/repair-banner-image/delivery.png')} 
                                    alt="image" 
                                />
                                <ReactWOW animation='rotateme'>
                                    <img 
                                        src={require('../../images/repair-banner-image/circle.png')} 
                                        className="rotateme" 
                                        alt="image" 
                                    />
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="repair-services-area ptb-80 bg-f7fafd">
                <div className="container">                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg1">
                                <div className="icon-food"></div>

                                <h3>Food</h3>
                                <p>Hungry? Order food online and get food delvered to your door steps.</p>                                
                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg2">
                                <div className="icon-gro"></div>

                                <h3>Groceries</h3>
                                <p>We deliver all your kithcen favourite products, fruits and vegetables.</p>
                                
                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg3">
                                <div className="icon-diary">
                                </div>

                                <h3>Dairy Products</h3>
                                <p>Healthy fresh and organic Dairy products with rich source of energy.</p>
                                
                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg4">
                                <div className="icon-wash">
                                </div>

                                <h3>Washing & Cleaning Supplies</h3>
                                <p>Keep your family with our high quality Washing and Cleaning Supplies</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg5">
                                <div className="icon-sketch">
                                </div>

                                <h3>Stationery</h3>
                                <p>Get all Stationery Products from wide range of categories and trusted brands.</p>                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg6">
                                <div className="icon-home">
                                </div>
                                <h3>Home Essentials</h3>
                                <p>Buy wide range of Home Essentials from top brands with us.</p>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                        <div className="repair-main-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="repair-banner-content">
                                <h1>COVID-Safe Initiative!</h1>
                                <p>Kobzo understands the difficulties associated with the lockdown and has become your employees’ one stop for all essentials. You can share Kobzo’s initiative with your employees so they have access to these services.</p>
                                <button className="btn btn-primary" onClick={showForm} >Contact Us</button>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="repair-banner-image">
                                <img 
                                    src={require('../../images/repair-services-img/7.png')} 
                                    alt="image" 
                                />
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require('../../images/repair-banner-image/1.png')} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="image" 
                                    />
                                </ReactWOW>
                                
                                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                    <img 
                                        src={require('../../images/repair-banner-image/2.png')} 
                                        className="wow fadeInLeft" 
                                        data-wow-delay="0.6s" 
                                        alt="image" 
                                    />
                                </ReactWOW>

                                <ReactWOW animation='rotateme'>
                                    <img 
                                        src={require('../../images/repair-banner-image/circle.png')} 
                                        className="rotateme" 
                                        alt="image" 
                                    />
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="features-area ptb-160 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Anything & Everything Available</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.BarChart />
                                </div>

                                <h3>Smooth Lockdown Services</h3>
                                <p>Kobzo has partnered with reputed services such as Metro Cash & Carry to ensure a smooth and safe lockdown for your employees.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Mail />
                                </div>

                                <h3>Safe & Secure Delivery Channels</h3>
                                <p>Kobzo’s delivery channels will ensure ease, sanitation and safety throughout the delivery process.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Activity />
                                </div>

                                <h3>Improve Employee Relations</h3>
                                <p>Thoughtful actions such as this, will go a long way towards benefitting your organization and enhancing trust, respect and productivity in your company culture. This will consequently boost employee retention and satisfaction.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Award />
                                </div>

                                <h3>Increased satisfaction & happiness</h3>
                                <p>Engaging with your employees will raise employee happiness and will thus greatly improve employee retention within your organization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
