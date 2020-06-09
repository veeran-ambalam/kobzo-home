import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import CheckoutBody from './CheckoutBody';
import Layout from '../../components/layout'
class Cart extends React.Component {
    render() {
        return (
            <Layout>
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <div className="page-title-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <h2>Checkout</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <CheckoutBody />
            </Preloader>
            </Layout>
        )
    }
}

export default Cart