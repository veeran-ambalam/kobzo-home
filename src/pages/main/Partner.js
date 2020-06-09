import React from 'react'

export default class Partner extends React.Component {
    showForm(){
        document.getElementById('mainForm').style.display = "block";
    }
    render() {
        return (
            <React.Fragment>
                <section className="ready-to-talk">
                    <div className="container">
                        <h3>Our Clients</h3>
                    </div>
                </section>

                <div className="partner-area partner-section">
                    <div className="container">

                        <div className="partner-inner">
                            <div className="d-flex justify-content-center align-items-center flex-wrap">

                                <div className="col-lg-2 col-md-3 col-6">
                                    <a>
                                        <img src={require("../../images/partner-img/partner-2.png")} alt="partner" />
                                        <img src={require("../../images/partner-img/partner-hover2.png")} alt="partner" />
                                    </a>
                                </div>

                                <div className="col-lg-2 col-md-3 col-6">
                                    <a>
                                        <img src={require("../../images/partner-img/partner-3.png")} alt="partner" />
                                        <img src={require("../../images/partner-img/partner-hover3.png")} alt="partner" />
                                    </a>
                                </div>

                                <div className="col-lg-2 col-md-3 col-6">
                                    <a>
                                    <img src={require("../../images/partner-img/partner-4.png")} alt="partner" />
                                    <img src={require("../../images/partner-img/partner-hover4.png")} alt="partner" />
                                    </a>
                                </div>

                                <div className="col-lg-2 col-md-3 col-6">
                                    <a>
                                        <img src={require("../../images/partner-img/partner-5.png")} alt="partner" />
                                        <img src={require("../../images/partner-img/partner-hover5.png")} alt="partner" />
                                    </a>
                                </div>


                                <div className="col-lg-2 col-md-3 col-6">
                                    <a>
                                        <img src={require("../../images/partner-img/partner-1.png")} alt="partner" />
                                        <img src={require("../../images/partner-img/partner-hover1.png")} alt="partner" />
                                    </a>
                                </div>
                                <div className="col-lg-2 col-md-3 col-6">
                                    <a>
                                        <img src={require("../../images/partner-img/partner-10.png")} alt="partner" />
                                        <img src={require("../../images/partner-img/partner-hover10.png")} alt="partner" />
                                    </a>
                                </div>
                                <div className="col-lg-2 col-md-3 col-6">
                                    <a>
                                        <img src={require("../../images/partner-img/partner-9.png")} alt="partner" />
                                        <img src={require("../../images/partner-img/partner-hover9.png")} alt="partner" />
                                    </a>
                                </div>
                                <div className="col-lg-2 col-md-3 col-6">
                                    <a>
                                        <img src={require("../../images/partner-img/partner-8.png")} alt="partner" />
                                        <img src={require("../../images/partner-img/partner-hover8.png")} alt="partner" />
                                    </a>
                                </div>
                                <div className="col-lg-2 col-md-3 col-6">
                                    <a>
                                        <img src={require("../../images/partner-img/partner-7.png")} alt="partner" />
                                        <img src={require("../../images/partner-img/partner-hover7.png")} alt="partner" />
                                    </a>
                                </div>
                                <div className="col-lg-2 col-md-3 col-6">
                                    <a>
                                        <img src={require("../../images/partner-img/partner-6.png")} alt="partner" />
                                        <img src={require("../../images/partner-img/partner-hover6.png")} alt="partner" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
		        </div>
            </React.Fragment>
        )
    }
}
