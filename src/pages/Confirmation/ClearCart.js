import React, { useContext, useState, useEffect } from 'react';
import * as Icon from 'react-feather'
import {GlobalDispatchContext, GlobalStateContext} from "../../context/GlobalContextProvider"
import Notifications, {notify} from 'react-notify-toast';
import ReactImageFallback from "react-image-fallback";

const Item=({clearCart})=> {

    const dispatch = useContext(GlobalDispatchContext);
    if(clearCart === true){
        dispatch({type: 'CLEAR_CART', payload: ""});
    }
    
    return (<></>
    )
}

export default Item