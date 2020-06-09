import React from 'react';
import * as Icon from 'react-feather'
import ReactWOW from 'react-wow'
import ProductSection from './ProductSection'
import MiniCart from '../checkout/MiniCart'

export default function FeaturesContent() {

    function showForm(){
        console.log("showForm");
        document.getElementById('mainForm').style.display = "block";
        let email = document.getElementById('input-newsletter').value;
        console.log(email)
        document.getElementById('email6ad5').value = email;

    }

    return (
        <React.Fragment>
            <section className="features-area ptb-160 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Setup Remote Workspace</h2>
                        <div className="bar"></div>
                        <p>Kobzo knows how important it is to create a designated work space to maintain productivity. With this in mind, Kobzo has launched an initiative to streamline your procurement process as well as assist in delivery and set up at remote workplaces for your employees. <br />Our products include:</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <a className="single-box bg-f78acb mini" href="#Professional-Tools">
                                <div className="icon">
                                    <Icon.Tool /> 
                                </div>
                                <div>
                                    <h3>Professional Tools</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <a className="single-box bg-f78acb mini" href="#Productivity-Enhancement">
                                <div className="icon">
                                    <Icon.BatteryCharging /> 
                                </div>
                                <div>
                                    <h3>Productivity Enhancement</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <a className="single-box bg-f78acb mini" href="#Professional-Tools">
                                <div className="icon">
                                    <Icon.Heart /> 
                                </div>
                                <div>
                                    <h3>Employee Wellness</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <a className="single-box bg-f78acb mini" href="#Professional-Tools">
                                <div className="icon">
                                    <Icon.Home /> 
                                </div>
                                <div>
                                    <h3>Set-up & Comfort Essentials</h3>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Clipboard /> 
                                </div>

                                <h3>Remote Workspace Checklist</h3>
                                <p>Kobzo has created a concise checklist to help you guide your efforts in creating the required work environment for your employees.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.ShoppingCart />
                                </div>

                                <h3>Vast Set Of Suppliers, Brands & Essentials</h3>
                                <p>Kobzo understands different companies have different requirements and tastes. We have created an easily accessible platform for you to procure all your office essentials.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Shield />
                                </div>

                                <h3>Secure Delivery Options</h3>
                                <p>Companies can rest assured that our streamlined and efficient delivery channels maintain all degrees of safety and sanitation.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Mic />
                                </div>

                                <h3>Setup Assistance</h3>
                                <p>Kobzo’s excellent services ensure that the procured material is delivered to the required locations and required assistance is provided during setup.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-area-two bg-f9f6f6 ptb-80">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 text-center">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img 
                                    src={require("../../images/services-right-image/main-pic.png")} 
                                    className="wow fadeInUp" 
                                    data-wow-delay="0.6s" 
                                    alt="product-name"
                                />
                            </ReactWOW>
                        </div>
                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>Reap The Benefits With Kobzo</h2>
                                <div className="bar"></div>
                                <p>Working From Home can create a confusing environment that mixes the feeling of professionalism with casualness and can thus lead to a drop in work productivity. Your company can help ensure that employee seriousness and productivity is maintained with Kobzo.</p>
                                <br />
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.ArrowRightCircle /> No sudden lack of work essentials
                                    </div>
                                </div>


                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.ArrowRightCircle /> Simple & straightforward platform
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.ArrowRightCircle /> Efficient remote workspace
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.ArrowRightCircle /> Secure delivery
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="free-trial-area ptb-80 bg-ffffff">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="free-trial-image">
                                <img src={require("../../images/free-trial-img.png")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="free-trial-content">
                                <h2>Check your employee Preparedness</h2>
                                <p>Kobzo will help you evaluate the preparedness of your employee’s remote workstation.</p>
                                <form className="newsletter-form">
                                    <input type="email" id="input-newsletter" className="input-newsletter" placeholder="Enter your business email here" />
                                    <button type="button" className="btn" onClick={showForm}>Get Details</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape2 rotateme">
                    <img src={require("../../images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src={require("../../images/shape2.svg")} alt="shape" />
                </div>
            </section>
            <ProductSection />
            <MiniCart />
        </React.Fragment>
    )
}
