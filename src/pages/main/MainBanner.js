import React from 'react'
import ReactWOW from 'react-wow'

class MainBanner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isHeroActive: false,
            error: "",
            success: false,
            button: 'Request for Demo!',
            showForm: false,
        }
    }

    showForm(){
        document.getElementById('mainForm').style.display = "block";
    }
    render(){
        return (
    		<div className="main-banner">
    			<div className="d-table">
    				<div className="d-table-cell">
    					<div className="container">
    						<div className="row h-100 justify-content-center align-items-center">
    							<div className="col-lg-5">
    								<div className="hero-content">
    									<h1>Gateway to your Smart Workplace</h1>
    									<p>Kobzo is a bold and unique way to enhance your establishment with end-to-end digital integrated solutions for <strong>Seamless Procurement, Happy Employees </strong>and <strong>a Vibrant Workspace</strong>.</p>
    									
                                        <button className="btn btn-primary" onClick={this.showForm.bind(this)}>Contact Us</button>
    								</div>
    							</div>

    							<div className="col-lg-6 offset-lg-1">
    								<div className="banner-image">
                                        <ReactWOW delay='0.5s' animation='fadeInDown'>
                                            <img 
                                                src={require('../../images/banner-image/man.png')} 
                                                className="wow fadeInDown" 
                                                data-wow-delay="0.6s" 
                                                alt="man" 
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='fadeInUp'>
                                            <img 
                                                src={require("../../images/banner-image/code.png")} 
                                                className="wow fadeInUp" 
                                                data-wow-delay="0.6s" 
                                                alt="code"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='fadeInLeft'>
                                            <img 
                                                src={require("../../images/banner-image/carpet.png")} 
                                                className="wow fadeInLeft" 
                                                data-wow-delay="0.6s" 
                                                alt="carpet"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='zoomIn'>
                                            <img 
                                                src={require("../../images/banner-image/bin.png")} 
                                                className="wow zoomIn" 
                                                data-wow-delay="0.6s" 
                                                alt="bin"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='bounceIn'>
                                            <img 
                                                src={require("../../images/banner-image/book.png")} 
                                                className="wow bounceIn" 
                                                data-wow-delay="0.6s" 
                                                alt="book"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='fadeInDown'>
                                            <img 
                                                src={require("../../images/banner-image/dekstop.png")} 
                                                className="wow fadeInDown" 
                                                data-wow-delay="0.6s" 
                                                alt="dekstop"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='zoomIn'>
                                            <img 
                                                src={require("../../images/banner-image/dot.png")} 
                                                className="wow zoomIn" 
                                                data-wow-delay="0.6s" 
                                                alt="dot"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='fadeInUp'>
                                            <img 
                                                src={require("../../images/banner-image/flower-top-big.png")} 
                                                className="wow fadeInUp" 
                                                data-wow-delay="0.6s" 
                                                alt="flower-top-big"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='rotateIn'>
                                            <img 
                                                src={require("../../images/banner-image/flower-top.png")} 
                                                className="wow rotateIn" 
                                                data-wow-delay="0.6s" 
                                                alt="flower-top"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='fadeInUp'>
                                            <img 
                                                src={require("../../images/banner-image/keyboard.png")} 
                                                className="wow fadeInUp" 
                                                data-wow-delay="0.6s" 
                                                alt="keyboard"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='zoomIn'>
                                            <img 
                                                src={require("../../images/banner-image/pen.png")} 
                                                className="wow zoomIn" 
                                                data-wow-delay="0.6s" 
                                                alt="pen"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='zoomIn'>
                                            <img 
                                                src={require("../../images/banner-image/table.png")} 
                                                className="wow zoomIn" 
                                                data-wow-delay="0.6s" 
                                                alt="table"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='fadeInLeft'>
                                            <img 
                                                src={require("../../images/banner-image/tea-cup.png")} 
                                                className="wow fadeInLeft" 
                                                data-wow-delay="0.6s" 
                                                alt="tea-cup"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='rollIn'>
                                            <img 
                                                src={require("../../images/banner-image/headphone.png")} 
                                                className="wow rollIn" 
                                                data-wow-delay="0.6s" 
                                                alt="headphone"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='fadeInUp'>
                                            <img 
                                                src={require("../../images/banner-image/main-pic.png")} 
                                                className="wow fadeInUp" 
                                                data-wow-delay="0.6s" 
                                                alt="main-pic"
                                            />
                                        </ReactWOW>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
                {/*
    			<div className="shape1">
    				<img src={require("../../images/shape1.png")} alt="shape"/>
    			</div>
    			<div className="shape2 rotateme">
    				<img src={require("../../images/shape2.svg")} alt="shape"/>
    			</div>
    			<div className="shape3">
    				<img src={require("../../images/shape3.svg")} alt="shape"/>
    			</div>
    			<div className="shape4">
    				<img src={require("../../images/shape4.svg")} alt="shape"/>
    			</div>
    			<div className="shape5">
    				<img src={require("../../images/shape5.png")} alt="shape"/>
    			</div>
    			<div className="shape6 rotateme">
    				<img src={require("../../images/shape4.svg")} alt="shape"/>
    			</div>
    			<div className="shape7">
    				<img src={require("../../images/shape4.svg")} alt="shape"/>
    			</div>
    			<div className="shape8 rotateme">
    				<img src={require("../../images/shape2.svg")} alt="shape"/>
    			</div>
                */}
    		</div>
        )
    }
}

export default MainBanner