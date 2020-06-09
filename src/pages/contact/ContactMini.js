import React from 'react'
import axios from 'axios';

export default class ContactBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
            submitted: false,
            buttonState: '',
            name: "",
            formFields: {
                name: '',
                email: '',
                subject: '',
                phone: '',
                text: '',
                loading: false,
            }
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state.formFields;
        console.log(data);
        let place = "NA";
        if(typeof window !== 'undefined'){
            place = window.location.pathname;
        }
        this.setState({loading: true});

        let name = document.getElementById('pname');
        let pname = name.textContent;
        
        const headers = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://kobzo.com',
        };
        axios.get('https://www.kobzo.com/get_eliteResponse2.php?&pname='+pname+'&place='+place+'&mp='+this.props.page+'&cust_name='+data.name+'&email='+data.email+'&mobile='+data.phone+'&subject='+data.subject+'&text='+data.text+'&page=0&form=4',{headers})
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

    hiddenChangeHandler = (e) => {
        console.log("hiddenChangeHandler")
        this.setState({name: e.target.value})
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
                <section id="cform" className="contact-area ptb-24">
                    <div className="container">
                        <div className="section-title">
                            <h2>Get In Touch With Us</h2>
                            <div className="bar"></div>
                        </div>
                        {this.state.loading == true ?
                        <div className="load">
                            <img src={require("../../images/5.gif")} />
                        </div>:null}
                        <div className="col-lg-12 p-24 hCalc">
                            <div className="col-lg-12 col-md-12">
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
                                                    id="email6ad5"
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
                                                    placeholder="Phone" 
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
                                                    placeholder="Subject" 
                                                    required
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
                                            <span id="pname" className="" ></span>
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
