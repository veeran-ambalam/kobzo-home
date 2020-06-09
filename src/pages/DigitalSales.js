import React from 'react'
import * as Icon from 'react-feather';
import ReactWOW from 'react-wow'

class DigitalSales extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="repair-main-banner exception ptb-80">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12 services-left-image">
                                <ReactWOW delay='0.6s' animation='fadeInDown'>
                                    <img 
                                        src={require("../images/services-left-image/big-monitor.png")} 
                                        className="wow fadeInDown" 
                                        data-wow-delay="0.6s" 
                                        alt="big-monitor"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../images/services-left-image/creative.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="creative"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                    <img 
                                        src={require("../images/services-left-image/developer.png")} 
                                        className="wow fadeInLeft" 
                                        data-wow-delay="0.6s" 
                                        alt="developer"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../images/services-left-image/flower-top.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="flower-top"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='bounceIn'>
                                    <img 
                                        src={require("../images/services-left-image/small-monitor.png")} 
                                        className="wow bounceIn" 
                                        data-wow-delay="0.6s" 
                                        alt="small-monitor"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInDown'>
                                    <img 
                                        src={require("../images/services-left-image/small-top.png")} 
                                        className="wow fadeInDown" 
                                        data-wow-delay="0.6s" 
                                        alt="small-top"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../images/services-left-image/table.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="table"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../images/services-left-image/target.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="target"
                                    />
                                </ReactWOW>
                                
                                <img 
                                    src={require("../images/services-left-image/cercle-shape.png")} 
                                    className="bg-image rotateme" 
                                    alt="shape"
                                />
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../images/services-left-image/service-left-main-pic.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="main-pic"
                                    />
                                </ReactWOW>
                            </div>

                            <div className="col-lg-6 col-md-12 services-content">
                                <div className="section-title">
                                    <h2>Sell To Corporates Digitally</h2>
                                    <div className="bar"></div>
                                    <p>The best place to find your next customer is online! Adopt Kobzo’s powerful solution to enhance and simplify your B2B Sales & Operations. With us, you can easily Participate in Bids, Take Your Customers Online, Automate Your Order Management and Inventory, Assess On-Demand Logistics, and Access Credit and Invoice Discounting.</p>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.ShoppingBag /> Manage Customers & Orders
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Briefcase /> Quotation & Rate-Contract Management
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Clipboard /> Catalog & Inventory Management
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Box /> Invoice Handling & Payment Reminders
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default DigitalSales