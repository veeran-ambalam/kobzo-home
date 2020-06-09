import React, { Component } from 'react';
import ReactWOW from 'react-wow'

class MainBanner extends Component {

    showForm(){
        document.getElementById('mainForm').style.display = "block";
    }
    render() {
        return (
            <div className="repair-main-banner exception">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="repair-banner-image">
                                <img 
                                    src={require('../../images/home-delivery-image/delivery-banner-img.png')} 
                                    alt="delivery" 
                                />
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require('../../images/home-delivery-image/1.png')} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="delivery" 
                                    />
                                </ReactWOW>
                                
                                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                    <img 
                                        src={require('../../images/home-delivery-image/2.png')} 
                                        className="wow fadeInLeft" 
                                        data-wow-delay="0.6s" 
                                        alt="delivery" 
                                    />
                                </ReactWOW>

                                <ReactWOW animation='rotateme'>
                                    <img 
                                        src={require('../../images/home-delivery-image/circle.png')} 
                                        className="rotateme" 
                                        alt="delivery" 
                                    />
                                </ReactWOW>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2>COVID-19: Get essentials delivered to your employees during lockdown</h2>
                                <div className="bar"></div>
                                <p>Your employees can order for essential items on our platform and it will be delivered to their homes through a secure and safe last mile distribution channel.</p>
                                <a href="./Covid-19-Essentials" className="btn btn-primary">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;
