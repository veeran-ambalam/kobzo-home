import React, { Component } from 'react';
import { Link } from "gatsby"
import Layout from '../components/layout'
import {GlobalDispatchContext} from "../context/GlobalContextProvider"
class Thankyou extends Component {

    constructor(props){
        super(props)
        this.state = {
            reference: "#55555",
        };
    }
    static contextType = GlobalDispatchContext

    componentDidMount(){
        const dispatch = this.context;
        dispatch({type: 'CLEAR_CART', payload: []});
        let reference = window.location.hash;
        this.setState({reference: reference})
    }
    render() {
        return (
            <Layout>
                <div className="page-title-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <h2>Thankyou</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="thank-you-area">
                    <div className="container">
                        <h1>Your order has been confirmed.</h1>
                        <p className="text-center">Please keep the <strong>{this.state.reference}</strong> for your reference. We'll also send a confirmation to the email address.</p>
                        <Link href="/">
                            <a className="btn btn-primary" href="#">Go Home</a>
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Thankyou;
