import React, { useContext } from 'react';
import * as Icon from 'react-feather'
import Layout from '../components/layout'
import Notifications, {notify} from 'react-notify-toast';
import {GlobalDispatchContext, GlobalStateContext} from "../context/GlobalContextProvider"

const Cart = () => {

	const dispatch = useContext(GlobalDispatchContext);
	const state = useContext(GlobalStateContext);
	console.log(state)

    const handleQuantity=(id, name, price, type)=>{
        console.log(id)
        let x = document.getElementById(id+"_cart");
        let value = parseInt(x.value);
        if(type === 1 & value <= 1){
            notify.show("Please check the Quantity", "error", 5000);
            return false
        }
        if(type === 1){
            value = value-1;
        }
        if(type === 2){
            value = value+1;
        }
        addToCart(id, name, price, value)
    }

    function isActive(){
    	return state.product.length > 0;
    }

    function addToCart(id, name, price, quantity){
        let product = {
            name: name,
            id: id,
            price: price,
            quantity: quantity,
        }
        dispatch({type: 'ADD_CART', payload: product});
        notify.show("Product Quantity Updated to the cart", "success", 5000);
    }

    function handleRemove(id, name, price, quantity){
        let product = {
            name: name,
            id: id,
            price: price,
            quantity: 1,
        }
        dispatch({type: 'REMOVE_CART', payload: product});
        notify.show("Product Removed from the cart", "success", 5000);
    }

    let cartTotal = 0;
    return (
    	<Layout>
	    	<section className="cart-area ptb-80">
	    		<div className="page-title-area">
		            <div className="d-table">
		                <div className="d-table-cell">
		                    <div className="container">
		                        <h2>Cart</h2>
		                    </div>
		                </div>
		            </div>
		        </div>
	            <div className="container ptb-80">
	                <div className="row">
	                    <div className="col-lg-12 col-md-12">
                            <div className="cart-table table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total (tax incl)</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {state != undefined && state.product.length ?
								        (
								            state.product.map((data) => {
								            	cartTotal = cartTotal + (data.price * data.quantity);
								                return(
								                    <tr key={data.id}>
								                        <td className="product-name">
								                            <a href="#">{data.name}</a>
								                        </td>

								                        <td className="product-price">
								                            <span className="unit-amount">Rs. {parseFloat(data.price).toFixed(2)}</span>
								                        </td>

								                        <td className="product-quantity">
								                            <div className="input-counter">
								                                    <span 
								                                        className="minus-btn"
								                                        onClick={()=>{handleQuantity(data.id, data.name, data.price, 1)}}
								                                    >
								                                        <Icon.Minus />
								                                    </span>
								                                    <input 
								                                    	id={data.id+"_cart"}
								                                        type="text" 
								                                        className="form-control" 
								                                        value={data.quantity} 
								                                        min="1" 
								                                        max={10} 
								                                        readOnly={true}
								                                        onChange={e => (e)}
								                                    />
								                                    <span 
								                                        className="plus-btn"
								                                        onClick={()=>{handleQuantity(data.id, data.name, data.price, 2)}}
								                                    >
								                                        <Icon.Plus />
								                                    </span>
								                                </div>
								                        </td>

								                        <td className="product-subtotal">
								                            <span className="subtotal-amount">Rs. {parseFloat(data.price * data.quantity).toFixed(2)}</span>

								                                <a
								                                    onClick={(e)=>{handleRemove(data.id)}}
								                                    href="#"
								                                >
								                                    <Icon.Delete />
								                                </a>
								                        </td>
								                    </tr>
								                )
								            })

								        ): (
								            <tr>
								                <td className="product-thumbnail">
								                    <p>Empty.</p>
								                </td>
								            </tr>
								        )}
                                    </tbody>
                                </table>
                            </div>
            	            <div className="cart-buttons">
			                    <div className="row align-items-center">
			                        <div className="col-lg-5 col-md-5">
			                            <div className="continue-shopping-box">
			                                <a className="btn btn-light" href="/home/Product-List">Continue Shopping</a>
			                            </div>
			                        </div>

			                        <div className="col-lg-7 col-md-7">
			                            <div className="text-right">
			                                <p className="text-right">Total Inclusive of Tax: Rs. {parseFloat(cartTotal).toFixed(2)}/- </p>
			                                {isActive ? <a href="/home/Confirmation" className="btn btn-primary">Proceed to Checkout</a> : null}
			                            </div>
			                        </div>
			                    </div>
			                </div>
	                    </div>
	                </div>
	            </div>
	        </section>
	        <Notifications />
        </Layout>
    )
}

export default Cart