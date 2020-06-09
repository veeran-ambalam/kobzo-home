import React, { useContext } from 'react';
import * as Icon from 'react-feather'
import {GlobalStateContext} from "../../context/GlobalContextProvider"
import { navigate } from "gatsby"

const MiniCart = ({count}) => {
	const state = useContext(GlobalStateContext);
    console.log(state)
    return (
        <div className="cart-float" onClick={()=>navigate('/cart')}>
            <span>{state.product.length > 0 ? <Icon.ShoppingCart />:null}</span>
            {state.product.length > 0 ? state.product.length : <Icon.ShoppingCart />}
        </div>
    )
}

export default MiniCart