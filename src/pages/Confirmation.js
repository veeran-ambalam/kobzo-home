import React from 'react'
   
import PageTitle from './Confirmation/PageTitle';
import CheckoutBody from './Confirmation/CheckoutBody';
import Layout from '../components/layout'
class Cart extends React.Component {
    render() {
        return (
            <Layout>
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
            </Layout>
        )
    }
}

export default Cart