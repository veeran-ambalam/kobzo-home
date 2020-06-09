import React from 'react'
import * as Icon from 'react-feather'
import ReactWOW from 'react-wow'
import Contact from '../Contact/Contact'

export default function FeaturesContent() {
    return (
        <React.Fragment>
            <section className="features-area ptb-160 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Digital Employee Engagement</h2>
                        <div className="bar"></div>
                        <p>Kobzo has the perfect solution for companies looking to maintain digital employee engagement and productivity. Kobzo’s products include digital yoga sessions, online gaming, e-sport tournaments and more. Kobzo’s excellent services will aid your company from the initial selection to the final execution of employee engagement practices.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.BarChart />
                                </div>

                                <h3>Increased productivity</h3>
                                <p>Better engagement within employees will negate feelings of isolation and consequently increase the productivity of your company.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Mail />
                                </div>

                                <h3>Improved team interactions</h3>
                                <p>Creating the provision for your employees to interact with their teams digitally will also enhance team bonding and thus improve team contributions during work projects.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Activity />
                                </div>

                                <h3>Better employee health</h3>
                                <p>Digital employee engagement will provide a sense of familiarity that your employees associated with the workplace. This will consequently lead to better health and performance.</p>
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
            {/* <!-- End Features Area --> */}

            {/* Mini Header*/}
            <section className="repair-cta-area bg-0f054b">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta-repair-content">
                                <h3>Let Your Team Relax a Bit!</h3>
                                <br/>
                                <ul className="row">
                                    <li>E-Sports & Games <br /><a href="#gamingSection">Know More</a></li>
                                    <li>Yoga and Wellness<br /><a href="#yogaSection">Know More</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                        <div className="cta-repair-img">
                            <img src={require('../../images/man-and-women.png')} alt="Digital Employee Engagement" />
                        </div>
                        </div>
                    </div>
                </div>

                <div className="circle-box"><img src={require('../../images/circle.png')} alt="Digital Employee Engagement" /></div>
                <div className="cta-shape"><img src={require('../../images/cta-shape.png')} alt="Digital Employee Engagement" /></div>
            </section>

            {/* <!-- Start Features Area --> */}
            <section className="features-area-two ptb-80 bg-f7fafd" id="yogaSection">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>Yoga</h2>
                                <div className="bar"></div>
                                <p>Integrating yoga into your employees' lives can enhance their physical, social and mental health, especially in such periods of self-isolation and social distancing. It will also reduce body pains and stress related to working long hours at home. Yoga will lead to an increase in energy levels that will allow your employees to be more productive and motivated.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img 
                                    src={require("../../images/yoga/yoga1.png")} 
                                    className="wow fadeInUp" 
                                    data-wow-delay="0.6s" 
                                    alt="product-name"
                                />
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-area ptb-80 justify-content-around d-flex flex-wrap">
                <div className="col-lg-3 yoga">
                    <div className="main-pic">
                        <img 
                            src={require("../../images/yoga/yoga2.png")} 
                            alt="product-name"
                        />
                    </div>
                    <div className="section-title">
                        <h2>Yoga For Lower Back Pain</h2>
                        <br />
                        <p>For a mild to moderate low back pain, this carefully adapted set of yoga stretches can be the best remedy to ease the discomfort.</p>
                        <br />
                        <a href="https://kobzo.com/home/product-details/Yoga-For-Lower-Back-Pain" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
                <div className="col-lg-3 yoga">
                    <div className="main-pic">
                        <img 
                            src={require("../../images/yoga/yoga3.png")} 
                            alt="product-name"
                        />
                    </div>
                    <div className="section-title">
                        <h2>Yoga For Quieting The Monkey Mind</h2>
                        <br />
                        <p>Being indoors for long can get to you and your employees and thus increase boredom frustration, lack of focus, and confusion.</p>
                        <br />
                        <a href="https://kobzo.com/home/product-details/Yoga-For-Quieting-The-Monkey-Mind" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </section>
            <section className="features-area ptb-80 justify-content-around d-flex flex-wrap bg-f7fafd">
                <div className="col-lg-3 yoga">
                    <div className="main-pic">
                        <img 
                            src={require("../../images/yoga/yoga4.png")} 
                            alt="product-name"
                        />
                    </div>
                    <div className="section-title">
                        <h2>Yoga For Boredom</h2>
                        <br />
                        <p>Self quarantining in the same place can easily foster a sense of boredom and lethargy.</p>
                        <br />
                        <a href="https://kobzo.com/home/product-details/Yoga-For-Boredom" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
                <div className="col-lg-3 yoga">
                    <div className="main-pic">
                        <img 
                            src={require("../../images/yoga/yoga5.png")} 
                            alt="product-name"
                        />
                    </div>
                    <div className="section-title">
                        <h2>Yoga For Habit Change</h2>
                        <br />
                        <p>Being stuck at home can easily create a rut and lead to adoption of unhealthy habits. Ensuring your employees wellness and good health will ensure creativity and wellness within your work culture.</p>
                        <br />
                        <a href="https://kobzo.com/home/product-details/Yoga-For-Habit-Change" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </section>
            <section className="features-area ptb-80 justify-content-around d-flex flex-wrap">
                <div className="col-lg-3 yoga">
                    <div className="main-pic">
                        <img 
                            src={require("../../images/yoga/yoga6.png")} 
                            alt="product-name"
                        />
                    </div>
                    <div className="section-title">
                        <h2>Yoga For Burnout</h2>
                        <br />
                        <p>Working from home can become quite hectic and draining. This can lead to employees easily feeling exhausted, demotivated or anxious.</p>
                        <br />
                        <a href="https://kobzo.com/home/product-details/Yoga-For-Burnout" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
                <div className="col-lg-3 yoga">
                    <div className="main-pic">
                        <img 
                            src={require("../../images/yoga/yoga7.png")} 
                            alt="product-name"
                        />
                    </div>
                    <div className="section-title">
                        <h2>Yoga For Memory & Focus</h2>
                        <br />
                        <p>Lack of attention leads to forgetfulness or partial remembrance of information.</p>
                        <br />
                        <a href="https://kobzo.com/home/product-details/Yoga-For-Memory-and-Focus" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </section>
            <section className="free-trial-area ptb-80" id="gamingSection">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="free-trial-image">
                                <img src={require("../../images/free-trial-img.png")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="free-trial-content services-content">
                                <div className="section-title">
                                    <h2>Gaming</h2>
                                    <div className="bar"></div>
                                    <p>Setting up gaming events for your employees and their teams can not only boost morale and creativity for those drained by work from home, but will also increase companionship and teamwork in such times of lockdown and isolation.</p>
                                    <br />
                                </div>
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
            <section className="features-area ptb-80 justify-content-around d-flex flex-wrap">
                <div className="col-lg-3 yoga">
                    <div className="svg-pic">
                        <img 
                            src={require("../../images/sports.svg")} 
                            alt="product-name"
                        />
                    </div>
                    <div className="section-title">
                        <h2>Asphalt 8</h2>
                        <br />
                        <p>Get in gear and take on the world’s best, most fearless street racer pros to become the next Asphalt Legend – from the creators of Asphalt 8: Airborne.</p>
                        <br />
                        <a href="#cform" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
                <div className="col-lg-3 yoga">
                    <div className="svg-pic">
                        <img 
                            src={require("../../images/console.svg")} 
                            alt="product-name"
                        />
                    </div>
                    <div className="section-title">
                        <h2>PUBG</h2>
                        <br />
                        <p>PUBG MOBILE delivers the most intense free-to-play multiplayer action on mobile. Drop in, gear up, and compete.</p>
                        <br />
                        <a href="#cform" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </section>
            <section className="features-area ptb-80 justify-content-around d-flex flex-wrap">
                <div className="col-lg-3 yoga">
                    <div className="svg-pic">
                        <img 
                            src={require("../../images/gestures.svg")} 
                            alt="product-name"
                        />
                    </div>
                    <div className="section-title">
                        <h2>8 Ball Pool</h2>
                        <br />
                        <p>8-Ball Pool is the most commonly played version of pool in the United States. You can play our free 8 Ball Pool Game online without a six-pocket table and cue stick.</p>
                        <br />
                        <a href="#cform" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
                <div className="col-lg-3 yoga">
                    <div className="svg-pic">
                        <img 
                            src={require("../../images/gaming.svg")} 
                            alt="product-name"
                        />
                    </div>
                    <div className="section-title">
                        <h2>Ludo</h2>
                        <br />
                        <p>Ludo King™ is a classic board game played between friends and family. Play the dice game of kings!</p>
                        <br />
                        <a href="#cform" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </section>
            <Contact page={"10"} />
        </React.Fragment>
    )
}
