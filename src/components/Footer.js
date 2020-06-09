import React from 'react'
import { Link } from "gatsby"
import * as Icon from 'react-feather'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area bg-f7fafd">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link to="/#">
                                            <img src={require("../images/logo.png")} alt="logo" />
                                    </Link>
                                </div>
                                <p>Formerly known as Kobster.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget pl-2">
                                <h3>Company</h3>
                                <ul className="list">
                                    <li>
                                        <Link to="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget pl-2">
                                <h3>Solutions</h3>
                                <ul className="list">
                                    <li>
                                        <Link to="/Covid-Safe-Workplace">
                                            Covid-Safe Workplace
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Setup-Remote-Workspace">
                                            Setup Remote Workspace
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Digital-Employee-Engagement">
                                            Digital Employee Engagement
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contact</h3>
                                
                                <ul className="footer-contact-info">
                                    <li>
                                        <Icon.Mail />
                                        <a href="mailto:hello@kobzo.com">hello@kobzo.com</a>
                                    </li>
                                    <li> 
                                        <Icon.PhoneCall />
                                        <a href="tel:+91 93611 33463">+91 93611 33463 (10am - 6pm)</a>
                                    </li>
                                </ul>
                                <ul className="social-links">
                                    <li>
                                        <a className="whatsapp" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=+919361133463">
                                            <img src={require("../images/wapp.svg")} alt="blog-details" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/KobzoOfficial/"><Icon.Facebook /></a>
                                    </li>
                                    <li>
                                        <a className="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/KobzoOfficial"><Icon.Twitter /></a>
                                    </li>
                                    <li>
                                        <a className="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/kobzo"><Icon.Linkedin /></a>
                                    </li>
                                    <li>
                                        <a className="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kobzo.official/"><Icon.Instagram /></a>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="copyright-area">
                                <p>© 2012-2020 Kobzo.com. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={require("../images/map.png")} className="map" alt="map" />
                {/*<div className="shape1"><img src={require("../images/shape1.png")} alt="shape" /></div>
                <div className="shape8 rotateme"><img src={require("../images/shape2.svg")} alt="shape" /></div>*/}
            </footer>
        )
    }
}
