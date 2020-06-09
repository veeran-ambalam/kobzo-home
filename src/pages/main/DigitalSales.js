import React from 'react'
import * as Icon from 'react-feather';
import ReactWOW from 'react-wow'

class DigitalSales extends React.Component {

    showForm(){
        document.getElementById('mainForm').style.display = "block";
    }

    render() {
        return (
            <React.Fragment>
                <section className="repair-main-banner exception ptb-80">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12 services-left-image">
                                <ReactWOW delay='0.6s' animation='fadeInDown'>
                                    <img 
                                        src={require("../../images/services-left-image/big-monitor.png")} 
                                        className="wow fadeInDown" 
                                        data-wow-delay="0.6s" 
                                        alt="big-monitor"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../images/services-left-image/creative.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="creative"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                    <img 
                                        src={require("../../images/services-left-image/developer.png")} 
                                        className="wow fadeInLeft" 
                                        data-wow-delay="0.6s" 
                                        alt="developer"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../images/services-left-image/flower-top.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="flower-top"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='bounceIn'>
                                    <img 
                                        src={require("../../images/services-left-image/small-monitor.png")} 
                                        className="wow bounceIn" 
                                        data-wow-delay="0.6s" 
                                        alt="small-monitor"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInDown'>
                                    <img 
                                        src={require("../../images/services-left-image/small-top.png")} 
                                        className="wow fadeInDown" 
                                        data-wow-delay="0.6s" 
                                        alt="small-top"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../images/services-left-image/table.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="table"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../images/services-left-image/target.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="target"
                                    />
                                </ReactWOW>
                                
                                <img 
                                    src={require("../../images/services-left-image/cercle-shape.png")} 
                                    className="bg-image rotateme" 
                                    alt="shape"
                                />
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../images/services-left-image/service-left-main-pic.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="main-pic"
                                    />
                                </ReactWOW>
                            </div>

                            <div className="col-lg-6 col-md-12 services-content">
                                <div className="section-title">
                                    <h2>Sell to Corporates - Go Digital</h2>
                                    <div className="bar"></div>
                                    <p>The best place to find your next customer is online! Adopt KobZo’s powerful solution for your B2B Sales & Operations. Participate in Bids, Take your Customers Online, Automate your Order Management and Inventory, On-Demand Logistics, Access to Credit and Invoice Discounting.</p>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.ShoppingBag /> Order  Management
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Briefcase /> Sales Analysis
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Clipboard /> Inventory Management
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Box /> Quotation Management
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <button className="btn btn-primary" onClick={this.showForm.bind(this)}>Request for Demo</button>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default DigitalSales