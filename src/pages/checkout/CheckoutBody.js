import React from 'react';
import Notifications, {notify} from 'react-notify-toast';
import { navigate } from "gatsby"
import * as Icon from 'react-feather';
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
        };
    }

    componentDidMount(){
    if(typeof  window !== 'undefined'){
        let product_id      = localStorage.getItem("product_id");
        let product_name    = localStorage.getItem("product_name");
        let unit_price      = localStorage.getItem("unit_price");
        this.setState({product_id: product_id, product_name: product_name, unit_price: unit_price});
        
        let type = localStorage.getItem("type");
        if(type == 1 && this.state.quantity === 0){
            // setQuantity(10);
            this.setState({quantity: 10})
        }
        else if(this.state.quantity === 0){
            // setQuantity(60)
            this.setState({quantity: 51})
        }
        }
    }

    checkQuantity(e){
        console.log(e)
        console.log(e.target.value)
        let value = e.target.value;
        let reg = /^\d+$/;
        let res = reg.test(value);
        console.log(res)
        if(typeof  window !== 'undefined'){
            if(res){
                let model = localStorage.getItem("type");
                let minLimit = model == 1 ? 10 : 50;
                let maxLimit = model == 1 ? 51 : 200;
                let plan = model == 1 ? "Standard":"Premium";

                if(value < minLimit){
                    notify.show(plan+" plan should have minimum "+minLimit+" users", "error", 5000);
                    // setQuantity(minLimit)
                    this.setState({quantity: minLimit})
                    return false
                }
                if(value > maxLimit){
                    notify.show(plan+" plan can have maximum "+maxLimit+" users", "error", 5000);
                    // setQuantity(maxLimit)
                    this.setState({quantity: maxLimit})
                    return false
                }
                // setQuantity(value)/
                this.setState({quantity: value})
            }
            else{
                this.setState({disable: true})
                notify.show("Please check the quantity", "error", 5000);
            }
        }
    }
    
    changeQuantity(type){
        console.log("changeQuantity")
        if(typeof window !== 'undefined'){
            let model = localStorage.getItem("type");
            let minLimit = model == 1 ? 10 : 50;
            let maxLimit = model == 1 ? 51 : 200;
            let plan = model == 1 ? "Standard":"Premium";

            console.log(minLimit)
            console.log(maxLimit)
            if(this.state.quantity <= minLimit && type === 1){
                notify.show(plan+" plan should have minimum "+minLimit+" users", "error", 5000);
                return false
            }
            if(this.state.quantity >= maxLimit  && type === 2){
                notify.show(plan+" plan can have maximum "+maxLimit+" users", "error", 5000);
                return false
            }
            if(type === 1 && this.state.quantity > 0){
                let x = parseInt(this.state.quantity) - 1;
                // setQuantity(x);
                this.setState({quantity: x})
            }
            else if(type === 2 && this.state.quantity > 0){
                let x = parseInt(this.state.quantity) + 1;
                // setQuantity(x+1);
                this.setState({quantity: x})
            }
        }

    }

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

    onSubmit(e){
        e.preventDefault();
        console.log("getSecret")
        if(typeof window !== 'undefined'){
            let id = this.state.product_id;
            let name = this.state.product_name;
            let price = this.state.unit_price;
            let quantity = this.state.quantity;

            let reg = /^\d+$/;
            if(quantity <= 0 && reg.test(quantity))
            {
                notify.show("Please check the quantity", "error", 5000);
                return false;
            }

            let firstName   = document.getElementById('firstName').value.trim();
            let lastName    = document.getElementById('lastName').value.trim();
            let company    = document.getElementById('company').value.trim();
            let address     = document.getElementById('address').value.trim();
            let city        = document.getElementById('city').value.trim();
            let state       = document.getElementById('state').value.trim();
            let zip         = document.getElementById('zip').value.trim();
            let email       = document.getElementById('email').value.trim();
            let phone       = document.getElementById('phone').value.trim();
            let note       = document.getElementById('notes').value.trim();
            document.getElementById('loader').style.display = "flex";
            axios.get('../../ebs-execution.php?&getSecret=1&note='+note+'&product_id='+id+'&product_name='+name+'&unit_price='+price+'&quantity='+quantity+'&firstName='+firstName+'&lastName='+lastName+'&company='+company+'&address='+address+'&city='+city+'&state='+state+'&zip='+zip+'&email='+email+'&phone='+phone)
              .then(res => {
                console.log(res);
                console.log(res.data);
                document.getElementById('loader').style.display = "none";
                if(res.data['success'] == 1){
                    navigate('/Thankyou/#'+res.data['reference_no'])
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
                                            <label>State / County <span className="required">*</span></label>
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
                                        <tbody>
                                            <tr >
                                                <td colSpan="2" className="product-name">
                                                    <a><strong>{this.state.product_name}</strong></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-subtotal">
                                                    <span>Unit Price</span><br />
                                                    <span>Rs. {parseFloat(this.state.unit_price).toFixed(2)}</span>
                                                </td>

                                                <td className="product-subtotal">
                                                    <div className="quantity">
                                                        <span className="minus-btn" onClick={this.changeQuantity.bind(this,1)}><Icon.Minus /></span>
                                                        <input type="text" onChange={(e)=>this.setState({quantity: e.target.value})}  onBlur={this.checkQuantity.bind(this)} value={this.state.quantity}/>
                                                        <span className="plus-btn" onClick={this.changeQuantity.bind(this, 2)}><Icon.Plus /></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="total-price">
                                                    <span>Order Total (tax incl)</span>
                                                </td>

                                                <td className="product-subtotal">
                                                    <span className="subtotal-amount">Rs. {parseFloat(this.state.unit_price*this.state.quantity).toFixed(2)} Incl of Tax</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="payment-method">
                                    <span>Pay Sum of Rs {this.state.unit_price*this.state.quantity} Incl of Tax</span>
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
                <form name="frmPaymentConfirm" id="frmPaymentConfirm" action="https://secure.ebs.in/pg/ma/sale/pay" method="POST">
                    <input type="hidden" name="channel" id="frmchannel"/>
                    <input type="hidden" name="account_id"  id="frmaccount_id"/>
                    <input type="hidden" name="reference_no"  id="frmreference_no"/>
                    <input name="amount" type="hidden"  id="frmamount"/>
                    <input name="description" type="hidden"  id="frmdescription"/>
                    <input type="hidden" value="INR" name="currency"  id="frmcurrency"/>
                    <input name="name" type="hidden"  id="frmname"/>
                    <input name="address" type="hidden"  id="frmaddress"/>
                    <input name="city" type="hidden"  id="frmcity"/>
                    <input name="postal_code" type="hidden"  id="frmpostal_code"/> 
                    <input name="country" type="hidden"  id="frmcountry"/> 
                    <input name="email" type="hidden"  id="frmemail"/> 
                    <input name="phone" type="hidden"  id="frmphone"/> 
                    <input name="return_url" type="hidden" size="60" id="frmreturn_url"/> 
                    <input name="secure_hash" type="hidden" size="100" id="frmsecure_hash"/> 
                    <input name="mode" type="hidden" size="60" id="frmmode"/>
                </form>
            </div>
        </section>
    );
    }
}

export default CheckoutBody;
