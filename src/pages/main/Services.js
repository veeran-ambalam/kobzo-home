import React, { Component } from 'react';
import { Link } from "gatsby"
import * as Icon from 'react-feather';

class Services extends Component {
    render() {
        return (
            <section className="ml-services-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>COVID-19 Initiatives</h2>
                        <div className="bar"></div>
                        <p>Kobzo is dedicated to enhance the workplace experience for all organizations and this spirit is evident in the services we offer</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src={require("../../images/services-image/1.png")} alt="solutions" />
                                </div>
                                <h3>
                                    <Link to="/Digital-Employee-Engagement">
                                        Digital Employee Engagement
                                    </Link>
                                </h3>
                                <p>With these unprecedented situations, all your employees have been put into a completely different work environment which can lead to added stress, demotivation and under-productiveness. Boost your team’s performance and morale by engaging with them digitally via Online eSports, Digital Yoga, Counselling & more.</p>
                                <br />
                                <p><Link className="read-more-btn" to="/Digital-Employee-Engagement">Know More <Icon.ArrowRight /></Link></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src={require("../../images/services-image/6.png")} alt="solutions" />
                                </div>
                                <h3>
                                    <Link to="/Setup-Remote-Workspace">
                                        Setup Remote Workspace
                                    </Link>
                                </h3>
                                <p>Your employees may be under-equipped to effectively Work From Home. Assess your employee's preparedness and empower them with what they lack. With access to our extensive platform and secure delivery systems, Kobzo can help set up remote and safe workspaces at your employee’s home.</p>
                                <br />
                                <p><Link className="read-more-btn" to="/Setup-Remote-Workspace">Know More <Icon.ArrowRight /></Link></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src={require("../../images/services-image/3.png")} alt="solutions" />
                                </div>
                                <h3>
                                    <Link to="/Covid-Safe-Workplace">
                                        Covid-Safe Workplace
                                    </Link>
                                </h3>
                                <p>If you are planning to open-up your office premises before June, it is advised you get your workplace Covid-Friendly. Kobzo helps you understand, evaluate and execute the necessary steps to ensure your employees feel safe and productive at their workplace.</p>
                                <br />
                                <p><Link className="read-more-btn" to="/Covid-Safe-Workplace">Know More <Icon.ArrowRight /></Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                {/*
                <div className="shape1">
                    <img src={require("../../images/shape1.png")} alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src={require("../../images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape3">
                    <img src={require("../../images/shape3.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src={require("../../images/shape2.svg")} alt="shape" />
                </div>*/}
            </section>
        );
    }
}

export default Services;