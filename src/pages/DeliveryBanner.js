import React, { Component } from 'react';
import ReactWOW from 'react-wow'

class MainBanner extends Component {
    render() {
        return (
            <div className="repair-main-banner exception">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="repair-banner-image">
                                <img 
                                    src={require('../images/home-delivery-image/delivery-banner-img.png')} 
                                    alt="banner"
                                />
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require('../images/home-delivery-image/1.png')} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="banner"
                                    />
                                </ReactWOW>
                                
                                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                    <img 
                                        src={require('../images/home-delivery-image/2.png')} 
                                        className="wow fadeInLeft" 
                                        data-wow-delay="0.6s" 
                                        alt="banner"
                                    />
                                </ReactWOW>

                                <ReactWOW animation='rotateme'>
                                    <img 
                                        src={require('../images/home-delivery-image/circle.png')} 
                                        className="rotateme" 
                                        alt="banner"
                                    />
                                </ReactWOW>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2>COVID-19: All Daily Essentials Within Your Employees’ Reach </h2>
                                <div className="bar"></div>
                                <p>Despite the uncertainty associated with this lockdown - life must go on. Corporations and their employees can order all essentials via Kobzo to be delivered securely to their homes through our safe distribution channels. Be it work supplies, food or other equipment, Kobzo has all your employees covered during these trying times. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;
