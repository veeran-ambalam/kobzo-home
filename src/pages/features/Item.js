import React, { useContext, useState, useEffect } from 'react';
import * as Icon from 'react-feather'
import {GlobalDispatchContext, GlobalStateContext} from "../../context/GlobalContextProvider"
import Notifications, {notify} from 'react-notify-toast';
import ReactImageFallback from "react-image-fallback";

const Item=({id, name, img, price})=> {

    const [data, setData] = useState([]);

    const dispatch = useContext(GlobalDispatchContext);
    const state = useContext(GlobalStateContext);


    const changeQuantity=(id, type)=>{
        console.log(id)
        let x = document.getElementById(id);
        if(type === 1 & x.value <= 0){
            notify.show("Please check the Quantity", "error", 5000);
        }
        if(type === 1){
            x.value = x.value-1;
        }
        if(type === 2){
            x.value = x.value+1;
        }
    }

    function addToCart(id, name, price){
        let product = {
            name: name,
            id: id,
            price: price,
            quantity: 1,
        }
        dispatch({type: 'ADD_CART', payload: product});
        notify.show("Product added to the cart", "success", 5000);
    }
    
    return (
        <div className="col-lg-3 col-md-6">
            <div className="single-products">
                <div className="products-image">
                    <ReactImageFallback
                        src={img}
                        fallbackImage="../../images/no-prod.png"
                        initialImage="../../images/no-prod.png"
                        alt={name}/>
                </div>
                <div className="products-content">
                    <h3>{name}</h3>
                    <p className="text-center">Rs {price}</p>
                    {/*
                    <div className="quantity">
                        <span className="minus-btn" onClick={()=>changeQuantity(id, 1)}><Icon.Minus /></span>
                        <input type="text"  id={id+"_cart"} value="1"/>
                        <span className="plus-btn" onClick={()=>changeQuantity(id, 2)}><Icon.Plus /></span>
                    </div>*/}
                    <button className="add-to-cart-btn" 
                            onClick={()=>addToCart(id, name, price)}>
                            Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item