import React from 'react'
import * as Icon from 'react-feather'
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
export default function FeaturesContent() {

    function showForm(name){
        console.log(name)
        let x = name ? name : "Sign board for instructions - Prevention";
        document.getElementById('pname').innerHTML = name;
        document.getElementById('mainForm').style.display = "block";

    }
    return (
        <React.Fragment>
            <section className="features-area ptb-160 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>COVID-Safe workplace products</h2>
                        <div className="bar"></div>
                        <p>Companies looking to return to the office environment will require proper planning in terms of sanitation and safety. With Kobzo, this process can be simplified and streamlined with our wide range of products that are well suited to the different aspects of your organization including basic back to office safety baskets.</p>
                    </div>
                </div>
            </section>
            <div className="agency-services-area ptb-24">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <h2>Our Products</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-12 col-md-4">
                            <div className="agency-services-box">
                                <img src={require("../../images/agency-image/s1.png")} alt="image" />

                                <a href="#alcohol" className="content"><h5>Alcohol wipes</h5></a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-12 col-md-4">
                            <div className="agency-services-box">
                                <img src={require("../../images/agency-image/s2.png")} alt="image" />

                                <a href="#thermal" className="content"><h5>Thermal scanners</h5></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-4">
                            <div className="agency-services-box">
                                <img src={require("../../images/agency-image/s3.png")} alt="image" />

                                <a href="#uv" className="content"><h5>UV light disinfectant</h5></a>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-12 col-md-4">
                            <div className="agency-services-box">
                                <img src={require("../../images/agency-image/s4.png")} alt="image" />

                                <a href="#seat" className="content"><h5>Toilet seat paper covers</h5></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-4">
                            <div className="agency-services-box">
                                <img src={require("../../images/agency-image/s6.png")} alt="image" />

                                <a href="#face" className="content"><h5>Face shield</h5></a>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-12 col-md-4">
                            <div className="agency-services-box">
                                <img src={require('../../images/agency-image/s5.png')}  alt="image" />

                                <a href="#blaster" className="content"><h5>UV blaster</h5></a>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-12 col-md-4">
                            <div className="agency-services-box">
                                <img src={require("../../images/agency-image/s7.png")} alt="image" />

                                <a href="#mobile" className="content"><h5>Mobile Pouch</h5></a>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-12 col-md-4">
                            <div className="agency-services-box">
                                <img src={require("../../images/agency-image/s8.svg")} alt="image" />

                                <a href="#sign" className="content"><h5>Sign board for instructions</h5></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="repair-about-area ptb-80" id="alcohol">
                <div className="container">
                    <div className="row flex-wrap flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="repair-about-content">
                            	<div className="section-title">
			                        <h2>Alcohol wipes - Disinfecting</h2>
			                        <div className="bar"></div>
			                    </div>
                                <p>Infected employees can spread viruses and germs to 50% of workplace surfaces within 4 hours of arriving at work. It is thus important to maintain a proper supply of hygiene products for employees.</p>
                                <p>Alcoholic wipes provide clinical efficacy and cleanliness of surfaces and increased hand hygiene. Various alcoholic wipes have been clinically proven to kill 99.99% of germs and bacteria.</p>
                                <p>Kobzo provides high quality and reliable alcoholic cleaning wipes that can kill more than 90% of germs and bacteria and are safe for use on skin</p>

                                <div>
                                    <h5>Buy Certified Alcohol Wipes from Rs. 110 across India.</h5>
                                    <button className="btn btn-primary" type="button" onClick={(e)=>showForm("Alcohol wipes - Disinfecting")}>Check Availability</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="repair-about-image d-flex justify-content-center align-items-center">
                                <img 
                                    src={require('../../images/agency-image/s1.png')} 
                                    alt="image" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="repair-about-area ptb-80" id="thermal">
                <div className="container">
                    <div className="row flex-wrap">
                        <div className="col-lg-6">
                            <div className="repair-about-image d-flex justify-content-center align-items-center">
                                <img 
                                    src={require('../../images/agency-image/s2.png')} 
                                    alt="image" 
                                />
                            </div>
                        </div>
                    	<div className="col-lg-6">
                            <div className="repair-about-content">
                            	<div className="section-title">
			                        <h2>Thermal scanners - Prevention</h2>
			                        <div className="bar"></div>
			                    </div>
                                <p>The use of thermal scanners has been proposed as a noninvasive, speedy, cost effective and fairly accurate means for mass blind screening of potential SARS infected persons. It is highly recommended that workplaces procure thermal scanners for efficient screening practices.</p>
                                <p>Kobzo helps companies procure efficient thermal scanners that have been tested as highly reliable screening products for office use.</p>

                                <div>
                                    <h5>Get Thermal Scanners from Rs. 2000 across India.</h5>
                                    <button className="btn btn-primary" type="button" onClick={(e)=>showForm("Thermal scanners - Prevention")}>Check Availability</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="repair-about-area ptb-80" id="uv">
                <div className="container">
                    <div className="row flex-wrap flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="repair-about-content">
                                <div className="section-title">
                                    <h2>UV light disinfectant</h2>
                                    <div className="bar"></div>
                                </div>
                                <p>Disinfection of surfaces and common appliances such as keyboards in the office can be conducted via UV-based disinfection products. Research that has compared UV decontamination of keyboards reported more than 99% reduction in bacteria.</p>
                                <p>Kobzo provides the relevant products that can be useful for disinfection of high touch surfaces like electronic equipment, computers, office furniture and other gadgets in laboratories and offices that are not suitable for chemical disinfection methods.</p>
                                <p>Kobzo’s UV disinfectant products are of high quality, efficient and quick that can kill more than 99% of germs and bacteria.</p>

                                <div>
                                    <h5>Get UV Light Disinfectants from Rs. 11209 across India.</h5>
                                    <button className="btn btn-primary" type="button" onClick={(e)=>showForm("UV light disinfectant")}>Check Availability</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="repair-about-image d-flex justify-content-center align-items-center">
                                <img 
                                    src={require('../../images/agency-image/s3.png')} 
                                    alt="image" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="repair-about-area ptb-80" id="seat">
                <div className="container">
                    <div className="row flex-wrap">
                        <div className="col-lg-6">
                            <div className="repair-about-image d-flex justify-content-center align-items-center">
                                <img 
                                    src={require('../../images/agency-image/s4.png')} 
                                    alt="image" 
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="repair-about-content">
                                <div className="section-title">
                                    <h2>Toilet seat paper covers - Prevention</h2>
                                    <div className="bar"></div>
                                </div>
                                <p>Good hygiene behaviour is integral to keeping people clean and healthy to prevent</p>
                                <p>spread of diseases like coronavirus. Toilet seats are one of the highest contact surfaces of disease causing microorganism if not maintained and used correctly.</p>
                                <p>Public spaces such as offices where different people regularly interact are recommended to provide toilet seat paper covers to reduce contact to such surfaces and maintain cleanliness.</p>
                                <p>Kobzo helps procure good quality and affordable sanitized toilet seat paper covers.</p> 

                                <div>
                                    <h5>Procure Toilet Seat Paper Covers from Rs. 140 across India.</h5>
                                    <button className="btn btn-primary" type="button" onClick={(e)=>showForm("Toilet seat paper covers - Prevention")}>Check Availability</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="repair-about-area ptb-80" id="face">
                <div className="container">
                    <div className="row flex-wrap flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="repair-about-content">
                                <div className="section-title">
                                    <h2>Face shield - Prevention</h2>
                                    <div className="bar"></div>
                                </div>
                                <p>Research has found that adherence to face masks significantly reduced the risk for infections.</p>
                                <p>Regular single use face masks show a bacteria filtration of about 95%, while surgical face masks filter 98% of bacteria and may filter small particles as well. Respirator masks such as N99 can filter more than 99% of bacteria and small particles.</p>
                                <p>Hence in public spaces it is important for employees to use the relevant masks depending on the work environment.</p>
                                <p>Kobzo helps companies select and procure high quality certified protective face masks of different types tested for efficiency and protection.</p>

                                <div>
                                    <h5>Procure Certified Face Masks from Rs. 254 across India.</h5>
                                    <button className="btn btn-primary" type="button" onClick={(e)=>showForm("Face shield - Prevention")}>Check Availability</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="repair-about-image d-flex justify-content-center align-items-center">
                                <img 
                                    src={require('../../images/agency-image/s6.png')} 
                                    alt="image" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="repair-about-area ptb-80" id="blaster">
                <div className="container">
                    <div className="row flex-wrap">
                        <div className="col-lg-6">
                            <div className="repair-about-image d-flex justify-content-center align-items-center">
                                <img 
                                    src={require('../../images/agency-image/s5.png')} 
                                    alt="image" 
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="repair-about-content">
                                <div className="section-title">
                                    <h2>UV blaster - Prevention</h2>
                                    <div className="bar"></div>
                                </div>
                                <p>UV light is extremely effective in disinfecting most microorganisms. The UV Blaster can be used to sanitize hotels, restaurants, airports, shopping malls, metros, factories, warehouses and more for disinfection of high touch surfaces.</p>
                                <p>This system is effective in disinfecting a room of about 12x12 feet dimension in 10 minutes, while for a 400 square feet area, it would take 30 minutes by positioning the equipment at different places within the room.</p>
                                <p>With Kobzo, companies can acquire an efficient and quick UV light disinfection system that is highly reliable and guaranteed to sanitize all high contact surfaces and workspaces.</p>

                                <div>
                                    <h5>Buy Certified UV Blaster from Rs. 100,000 across India.</h5>
                                    <button className="btn btn-primary" type="button" onClick={(e)=>showForm("UV blaster - Prevention")}>Check Availability</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="repair-about-area ptb-80" id="mobile">
                <div className="container">
                    <div className="row flex-wrap flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="repair-about-content">
                                <div className="section-title">
                                    <h2>Mobile Pouch</h2>
                                    <div className="bar"></div>
                                </div>
                                <p>The average person checks their mobile phone approximately once every 12 minutes and it is no surprise that they are crawling with bacteria and germs. Scientists at the University of Arizona have found that cell phones carry 10 times more bacteria than most toilet seats including serious pathogens such as Streptococcus, MRSA and even E. coli.</p>
                                <p>Since mobiles have contact to not only our hands but also our faces and ears, they can pose a serious threat to spread of diseases such as COVID-19.</p>
                                <p>Kobzo provides good quality protective mobile sanitizer pouches that can keep the mobile relatively cleaner and reduce chances of such spread.</p>

                                <div>
                                    <h5>Procure Mobile Pouches from Rs. 210 across India.</h5>
                                    <button className="btn btn-primary" type="button" onClick={(e)=>showForm("Mobile Pouch")}>Check Availability</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="repair-about-image d-flex justify-content-center align-items-center">
                                <img 
                                    src={require('../../images/agency-image/s7.png')} 
                                    alt="image" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="repair-about-area ptb-80" id="sign">
                <div className="container">
                    <div className="row flex-wrap">
                        <div className="col-lg-6">
                            <div className="repair-about-image d-flex justify-content-center align-items-center">
                                <img 
                                    src={require('../../images/agency-image/s8.svg')}
                                    alt="image" 
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="repair-about-content">
                                <div className="section-title">
                                    <h2>Sign board for instructions - Prevention</h2>
                                    <div className="bar"></div>
                                </div>
                                <p>According to a study by Infection Control Today, only 54% of people surveyed globally reported good personal hygiene. The easiest way to improve hygiene at the workplace is by increasing knowledge and understanding of personal hygiene.</p>
                                <p>Instructional boards on practices such as correct handwashing technique, washroom practices, pantry hygiene and more can greatly boost the cleanliness of the office and its employees, clients and visitors.</p>
                                <p>Kobzo helps companies attain simple, straightforward instructional boards to enhance in-office hygiene practices.</p>

                                <div>
                                    <h5>Buy Instructional Sign Board from starting Rs. 250 / sqft across India.</h5>
                                    <button className="btn btn-primary" type="button" onClick={(e)=>showForm("Sign board for instructions - Prevention")}>Check Availability</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
