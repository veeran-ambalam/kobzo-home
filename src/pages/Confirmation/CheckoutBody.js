import React, { useContext } from 'react';
import Notifications, {notify} from 'react-notify-toast';
import { navigate } from "gatsby"
import * as Icon from 'react-feather';
import {GlobalDispatchContext, GlobalStateContext} from "../../context/GlobalContextProvider"
import axios from 'axios';

class CheckoutBody extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            quantity: 0,
            submitted: false,
            loading: false,
            disable: true,
            errors: {},
            products: [],
        };
    }
    static contextType = GlobalStateContext
    

    // componentDidMount(){
    //     const script = document.createElement('script');
    //     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    //     script.async = true;
    //     document.body.appendChild(script);

    //     const context = this.context;
    //     console.log(context)
    //     //It will get the data from context, and put it into the state.
    //     this.setState({ products: context.product });
        
    // }

    handleOnChange(e) {
        let firstName   = document.getElementById('firstName').value.trim();
        let lastName    = document.getElementById('lastName').value.trim();
        let address     = document.getElementById('address').value.trim();
        let city        = document.getElementById('city').value.trim();
        let state       = document.getElementById('state').value.trim();
        let zip         = document.getElementById('zip').value.trim();
        let email       = document.getElementById('email').value.trim();
        let phone       = document.getElementById('phone').value.trim();

        console.log(firstName)
        console.log(lastName)

        let string      = /^[a-zA-Z]+$/;
        let pincode     = /^\d{6}$/;
        let emailre     = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let phonere     = /^\d{10}$/;

        let errors = [];
        let ret = 0;
        if(!string.test(firstName)){
            errors['firstName']     = "Please enter valid name";
            ret = 1;
        }
        if(!string.test(lastName)){
            errors['lastName']      = "Please enter valid name";
            ret = 1;
        }
        if(!address){
            errors['address']       = "Please enter address";
            ret = 1;
        }
        if(!city || (!string.test(city) && city.length > 36)){
            errors['city']          = "Please check city name";
            ret = 1;
        }
        if(!state || (!string.test(state) && state.length > 36)){
            errors['state']         = "Please check state name";
            ret = 1;
        }
        if(!zip || !pincode.test(zip)){
            errors['zip']           = "Please check pincode";
            ret = 1;
        }
        if(!email || !emailre.test(email)){
            errors['email']         = "Please check email address";
            ret = 1;
        }
        if(!phone || !phonere.test(phone)){
            errors['phone']         = "Please check mobile number";
            ret = 1;
        }
        this.setState({errors: errors})
        // setError(errors);
        if(ret == 1){
            this.setState({disable: true})
            console.log("setDisable")
        }
        else{
            this.setState({disable: false})
            // setDisable(false)
        }
        return ret;
    }
    verify(signature, payment_id, order_id){
        axios.get('../../ebs-execution.php?&type=7&signature='+signature+'&payment_id='+payment_id+'&order_id='+order_id)
              .then(res => {
                console.log(res);
                if(res.data['success']){
                    navigate('/Thankyou/#'+order_id)
                }
            })
    }
    onSubmit(e){
        e.preventDefault();

        console.log("getSecret")
        if(typeof window !== 'undefined'){
            let id = this.state.product_id;
            let name = this.state.product_name;
            let price = this.state.unit_price;
            let quantity = this.state.quantity;

            let firstName   = document.getElementById('firstName').value.trim();
            let lastName    = document.getElementById('lastName').value.trim();
            let company     = document.getElementById('company').value.trim();
            let address     = document.getElementById('address').value.trim();
            let city        = document.getElementById('city').value.trim();
            let state       = document.getElementById('state').value.trim();
            let zip         = document.getElementById('zip').value.trim();
            let email       = document.getElementById('email').value.trim();
            let phone       = document.getElementById('phone').value.trim();
            let note        = document.getElementById('notes').value.trim();
            let products    = JSON.stringify(this.state.products);
            document.getElementById('loader').style.display = "flex";
            const headers = {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'https://kobzo.com',
            };
            axios.get('https://www.kobzo.com/ebs-execution.php?&type=6&products='+products+'&note='+note+'&product_id='+id+'&product_name='+name+'&unit_price='+price+'&quantity='+quantity+'&firstName='+firstName+'&lastName='+lastName+'&company='+company+'&address='+address+'&city='+city+'&state='+state+'&zip='+zip+'&email='+email+'&phone='+phone, {headers})
              .then(res => {
                console.log(res);
                console.log(res.data);
                document.getElementById('loader').style.display = "none";
                if(res.data){
                    navigate('/Thankyou/#'+res.data['order_id'])

                    // let options = {    
                    //     "key": "rzp_test_7OBALkfN0UCIHW",
                    //     "amount": res.data['amount_due'], 
                    //     "currency": "INR",    
                    //     "name": firstName,    
                    //     "image": "https://kobzo.com/img/logo.png",    
                    //     "order_id": res.data['id'], 
                    //     "handler": function (response){        
                    //             console.log(response.razorpay_payment_id);        
                    //             console.log(response.razorpay_order_id);        
                    //             console.log(response.razorpay_signature)
                    //             // this.verify.bind(this, response.razorpay_signature, response.razorpay_order_id, response.razorpay_payment_id)
                    //             let order_id = response.razorpay_order_id;
                    //             axios.get('../../ebs-execution.php?&type=7&signature='+response.razorpay_signature+'&payment_id='+response.razorpay_payment_id+'&order_id='+response.razorpay_order_id)
                    //               .then(res => {
                    //                 console.log(res);
                    //                 if(res.data['success']){
                    //                     this.setState({clearCart: true})
                    //                     navigate('/Thankyou/#'+order_id)
                    //                 }
                    //             })
                    //         },    
                    //     "prefill": {        
                    //         "name": name,        
                    //         "email": email,        
                    //         "contact": phone    
                    //     },    
                    //     "theme": {        
                    //         "color": "#F37254"    
                    //     }
                    // };

                    // let rzp = new window.Razorpay(options);
                    // console.log(rzp)
                    // rzp.open();
                }
              })
        }
    }
    render(){
        const errorStyle = {
            color: "red",
            fontSize: "13px"
        };
    
    const { errors} = this.state;
    let cartTotal = 0;
    return (
        <section className="checkout-area ptb-80">
            <div id="loader"><div className="spinner"></div> </div>
            <div className="container">
                <form onSubmit={this.onSubmit.bind(this)} id="place_order_form">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title">Billing Details</h3>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>First Name <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="firstName"
                                                id="firstName"
                                                className="form-control" 
                                                onChange={this.handleOnChange.bind(this)}
                                                
                                            />
                                            {errors && errors.firstName && <p style={errorStyle}>{errors.firstName}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Last Name <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="lastName"
                                                id="lastName"
                                                className="form-control" 
                                                onChange={this.handleOnChange.bind(this)}
                                                
                                            />
                                            {errors && errors.lastName && <p style={errorStyle}>{errors.lastName}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input 
                                                type="text" 
                                                name="company"
                                                id="company"
                                                className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Address <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="address"
                                                id="address"
                                                className="form-control" 
                                                onChange={this.handleOnChange.bind(this)}
                                                
                                            />
                                            {errors && errors.address && <p style={errorStyle}>{errors.address}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Town / City <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="city"
                                                id="city"
                                                className="form-control" 
                                                onChange={this.handleOnChange.bind(this)}
                                                
                                            />
                                            {errors && errors.city && <p style={errorStyle}>{errors.city}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>State <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="state"
                                                id="state"
                                                className="form-control" 
                                                onChange={this.handleOnChange.bind(this)}
                                                
                                            />
                                            {errors && errors.state && <p style={errorStyle}>{errors.state}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Postcode / Zip <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="zip"
                                                id="zip"
                                                className="form-control"
                                                onChange={this.handleOnChange.bind(this)}
                                                
                                            />
                                            {errors && errors.zip && <p style={errorStyle}>{errors.zip}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Email Address <span className="required">*</span></label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                id="email"
                                                className="form-control" 
                                                onChange={this.handleOnChange.bind(this)}
                                                
                                            />
                                            {errors && errors.email && <p style={errorStyle}>{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Phone <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="phone"
                                                id="phone"
                                                className="form-control" 
                                                onChange={this.handleOnChange.bind(this)}
                                                
                                            />
                                            {errors && errors.phone && <p style={errorStyle}>{errors.phone}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="notes" id="notes" cols="30" rows="4" placeholder="Order Notes" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="order-details">
                                <h3 className="title">Your Order</h3>

                                <div className="order-table table-responsive">
                                    <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.products != undefined && this.state.products.length > 0 && this.state.products.map((data) => 
                                    {
                                    cartTotal = cartTotal + (data.price * data.quantity)
                                    return(
                                    <tr key={data.id}>
                                        <td className="product-name">
                                            <a>{data.name}</a>
                                            <p>Quantity: {data.quantity}</p>
                                        </td>

                                        <td className="product-total">
                                            <span className="subtotal-amount">Rs. {parseFloat(data.price * data.quantity).toFixed(2)}</span>
                                        </td>
                                    </tr>
                                    )
                                })}
                                <tr>
                                    <td className="total-price">
                                        <span>Order Total</span>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">Rs. {parseFloat(cartTotal).toFixed(2)}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                                </div>

                                <div className="payment-method">
                                    <span>Pay Sum of Rs {parseFloat(cartTotal).toFixed(2)} Incl of Tax</span>
                                    <button disabled={this.state.disable} className={`btn btn-primary order-btn ${this.state.disable ? 'btn-disabled' : ''}`} type="submit" >Pay on Delivery</button>
                                    {this.state.disable == true ?
                                        <label>Fill the Billing Details to Complete the Order<span className="required">*</span></label>
                                    :null}
                                </div>
                            <Notifications />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
    }
}

export default CheckoutBody;
