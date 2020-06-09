import React from 'react'
import axios from 'axios';
import ReactImageFallback from "react-image-fallback";
import {GlobalDispatchContext} from "../../context/GlobalContextProvider"
import Notifications, {notify} from 'react-notify-toast';

export default class ContactBody extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            rowOne: [],
            rowTwo: [],
            rowThree: [],
            rowFour: [],
        }
    }

    static contextType = GlobalDispatchContext

    componentDidMount(){
        axios('../../ebs-execution.php?&type=2').then(response=>{
            console.log(response.data)
            if(response.data != undefined && response.data['row1'] != undefined){
                console.log(response.data['row1'].length)
                console.log(response.data['row1'])
                console.log(response.data)

                this.setState({rowOne: response.data['row1']})        
                this.setState({rowTwo: response.data['row2']})        
                this.setState({ rowThree: response.data['row3']})        
                this.setState({ rowFour: response.data['row4']})        
            }            
        });        
    }

    addToCart(id, name, price, quantity){
        let product = {
            name: name,
            id: id,
            price: price,
            quantity: quantity
        }
        this.context({type: 'ADD_CART', payload: product});
        notify.show("Product added to the cart", "success", 5000);
    }

    render() {
        return (
            <section className="features-area-two bg-f9f6f6 ptb-80">
                <div className="container mb-40" id="Professional-Tools">
                    <div className="section-title d-flex justify-content-between align-items-center mb-8">
                        <div>
                            <h2>Professional Tools</h2>
                            <div className="bar"></div>
                        </div>
                        <a href="/home/Product-List/" className="btn btn-primary">View all</a>
                    </div>
                    <div className="row align-items-center">
                    {this.state.data &&  this.state.rowOne != undefined && this.state.rowOne.length>0 && this.state.rowOne.map( product=>{
                        let id = product.id_product;
                        let name = product.name;
                        let price = product.price;
                        let img = product.imageLink;
                        return(
                        <div className="col-lg-3 col-md-6">
                            <div className="single-products">
                                <div className="products-image">
                                    <ReactImageFallback
                                        src={img}
                                        fallbackImage="../images/no-prod.png"
                                        initialImage="../images/no-prod.png"
                                        alt={name}/>
                                </div>
                                <div className="products-content">
                                    <h3>{name}</h3>
                                    <p className="text-center">Rs {parseFloat(price).toFixed(2)}</p>
                                    <button className="add-to-cart-btn" 
                                            onClick={this.addToCart.bind(this,id, name, price, 1)}>
                                            Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>)
                    })}
                    </div>
                </div>
                <div className="container mb-40" id="Productivity-Enhancement">
                    <div className="section-title d-flex justify-content-between align-items-center mb-8">
                        <div>
                            <h2>Productivity Enhancement</h2>
                            <div className="bar"></div>
                        </div>
                        <a href="/home/Product-List/" className="btn btn-primary">View all</a>
                    </div>
                    <div className="row align-items-center">
                        {this.state.data &&  this.state.rowTwo != undefined && this.state.rowTwo.length>0 && this.state.rowTwo.map( product=>{
                            let id = product.id_product;
                            let name = product.name;
                            let price = product.price;
                            let img = product.imageLink
                            return(
                            <div className="col-lg-3 col-md-6">
                                <div className="single-products">
                                    <div className="products-image">
                                        <ReactImageFallback
                                            src={img}
                                            fallbackImage="../images/no-prod.png"
                                            initialImage="../images/no-prod.png"
                                            alt={name}/>
                                    </div>
                                    <div className="products-content">
                                        <h3>{name}</h3>
                                        <p className="text-center">Rs {parseFloat(price).toFixed(2)}</p>
                                        <button className="add-to-cart-btn" 
                                                onClick={this.addToCart.bind(this,id, name, price, 1)}>
                                                Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
                <Notifications />
            </section>
        )
    }
}
