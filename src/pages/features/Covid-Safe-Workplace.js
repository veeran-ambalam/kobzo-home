import React from 'react'
import * as Icon from 'react-feather'
import ReactWOW from 'react-wow'

export default function FeaturesContent() {

    function showForm(){
        document.getElementById('mainForm').style.display = "block";

    }
    return (
        <React.Fragment>
            <section className="features-area ptb-160 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>COVID-Safe Workplace</h2>
                        <div className="bar"></div>
                        <p>Following the current seriousness of the COVID-19 situation, your company will be seeking to revamp sanitation and safety procedures at the workplace. Kobzo’s wide range of products and services will help you maintain a COVID-friendly workplace.</p>
                    </div>
                </div>
            </section>
            <section className="repair-about-area ptb-80">
                <div className="container">
                    <div className="row flex-wrap flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="repair-about-content">
                            	<div className="section-title">
			                        <h2>COVID - Safe Products</h2>
			                        <div className="bar"></div>
			                    </div>
                                <p>Returning to the office environment will require proper planning in terms of sanitation and safety. Our wide range of products are well suited to the different aspects of your organization including basic back to office safety baskets.</p>
                                <button className="btn btn-primary" type="button" onClick={showForm}>Get Product List</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="repair-about-image d-flex justify-content-center align-items-center">
                                <img 
                                    src={require('../../images/repair-banner-image/equipments.png')} 
                                    alt="image" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="repair-about-area ptb-80">
                <div className="container">
                    <div className="row flex-wrap flex-column-reverse flex-lg-row">
                    	<div className="col-lg-6">
                            <div className="repair-about-content">
                            	<div className="section-title">
			                        <h2>COVID - Safe Services</h2>
			                        <div className="bar"></div>
			                    </div>
                                <p>Our services will help you understand, evaluate and execute the necessary steps to ensure your employees feel safe and productive at their workplace. Kobzo will help maintain regular sanitation standards and practices for your employees and clients. Kobzo’s partners also provide sanitation certification for your organization.</p>

                                <ul>
                                    <li><span><Icon.Check /> Deep cleaning</span></li>
                                    <li><span><Icon.Check /> Standard Cleaning & Training</span></li>
                                    <li><span><Icon.Check /> Sanitation Inspections</span></li>
                                    <li><span><Icon.Check /> Certification For COVID Safe Workplace</span></li>
                                </ul>
                                <button className="btn btn-primary" type="button" onClick={showForm}>Get Services List</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="repair-about-image d-flex justify-content-center align-items-center">
                                <img 
                                    src={require('../../images/repair-banner-image/clean.png')} 
                                    alt="image" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
