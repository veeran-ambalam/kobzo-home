import React from 'react'
import * as Icon from 'react-feather'
import axios from 'axios';

export default class ContactBody extends React.Component {

    state = {
        submitting: false,
        submitted: false,
        buttonState: '',
        formFields: {
            name: '',
            email: '',
            subject: '',
            phone: '',
            text: '',
            loading: false,
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state.formFields;
        console.log(data);
        this.setState({loading: true});
        let place = "NA";
        if(typeof window !== 'undefined'){
            place = window.location.pathname;
        }
        const headers = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://kobzo.com',
        };

        axios.get('https://www.kobzo.com/get_eliteResponse2.php?&place='+place+'&cust_name='+data.name+'&email='+data.email+'&mobile='+data.phone+'&subject='+data.subject+'&text='+data.text+'&page=0&form=4', {headers})
        .then(res => {
            if(res.status === 200){this.setState({ submitted: true })};
            let formFields = Object.assign({}, this.state.formFields);
            formFields.name = '';
            formFields.email = '';
            formFields.phone = '';
            formFields.subject = '';
            formFields.text = '';
            this.setState({formFields});
            this.setState({loading: false});
        });
    }

    nameChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.name = e.target.value;
        this.setState({formFields});
    }

    emailChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.email = e.target.value;
        this.setState({formFields});
    }

    phoneChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.phone = e.target.value;
        this.setState({formFields});
    }

    subjectChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.subject = e.target.value;
        this.setState({formFields});
    }

    textChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.text = e.target.value;
        this.setState({formFields});
    }

    onHideSuccess = () => {
        this.setState({submitted: false});
    }

    successMessage = () => {
        if (this.state.submitted){
            return (
                <div className="alert alert-success">
                    <strong>Thank you!</strong> Our Team will contact you shortly
                    <button onClick={this.onHideSuccess} type="button" className="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="contact-info-area ptb-80">
                    <div className="container ptb-80">
                        <div className="section-title">
                            <h2>Contact Us</h2>
                            <div className="bar"></div>
                        </div>
                        <div className="d-flex justify-content-around flex-wrap">
                            <div className="col-lg-4 col-md-4">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <Icon.Mail />
                                    </div>
                                    <h3>Mail Here</h3>
                                    <p className="text-center">
                                        <a href="mailto:hello@kobzo.com">
                                             hello@kobzo.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <a className="whatsapp" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=+919361133463">
                                            <img src={require("../../images/wappp.png")} alt="blog-details" />
                                        </a>
                                    </div>
                                    <h3>Whatsapp</h3>
                                    <p className="text-center">
                                        <a className="whatsapp" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=+919361133463">
                                            9361133463
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <Icon.Phone />
                                    </div>
                                    <h3>Call Here</h3>
                                    <p className="text-center">
                                        <a href="tel:+91 93611 33463">
                                            +91 9361133463
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-area ptb-80">
                    <div className="container">
                        <div className="section-title">
                            <h2>Get In Touch With Us</h2>
                            <div className="bar"></div>
                        </div>

                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src={require("../../images/about-four.png")} alt="contact" />
                            </div>

                            <div className="col-lg-6 col-md-12">
                            {this.state.loading == true ?
                            <div className="loadingGif">
                                <img src={require("../../images/5.gif")} />
                            </div>:null}
                                <form 
                                    id="contactForm" 
                                    onSubmit={this.onSubmit}
                                >
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    className="form-control" 
                                                    required data-error="Please enter your name" 
                                                    placeholder="Name" 
                                                    value={this.state.formFields.name}
                                                    onChange={this.nameChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    className="form-control" 
                                                    required 
                                                    data-error="Please enter your email" 
                                                    placeholder="Email" 
                                                    value={this.state.formFields.email}
                                                    onChange={this.emailChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="tel"
                                                    pattern="[0-9]{10}"
                                                    name="phone" 
                                                    className="form-control" 
                                                    required
                                                    placeholder="Ex: 9842772238" 
                                                    value={this.state.formFields.phone}
                                                    onChange={this.phoneChangeHandler}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="subject"
                                                    className="form-control" 
                                                    required
                                                    placeholder="Subject" 
                                                    value={this.state.formFields.subject}
                                                    onChange={this.subjectChangeHandler}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea 
                                                    name="message" 
                                                    className="form-control" 
                                                    id="message" 
                                                    cols="30" 
                                                    rows="5" 
                                                    required 
                                                    data-error="Write your message" 
                                                    placeholder="Your Message" 
                                                    value={this.state.formFields.text}
                                                    onChange={this.textChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">

                                            <button type="submit" className="btn btn-primary">Send Message</button>

                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                    {this.successMessage()}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
