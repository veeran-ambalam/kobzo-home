import React, { Component } from 'react';
import Layout from '../../components/Layout'
import * as Icon from 'react-feather'
import Notifications, {notify} from 'react-notify-toast';
import axios from 'axios';
import Item from './Item'
import MiniCart from '../checkout/MiniCart'

class ProductLists extends Component {
    constructor(props){
        super(props)
        this.state = {
            pages: 1,
            products: [],
            productCount: 0,
            errors: {},
        };
    }

    addToCart(id, name, price, quantity){
        let product = {
            name: name,
            id: id,
            price: price,
            quantity: quantity
        }
        // dispatch({type: 'ADD_CART', payload: product});
        notify.show("Added to the cart", "success", 5000);
    }

    componentDidMount(){
        axios.get('../../../ebs-execution.php?type=5').then(response=>{
            console.log(response);
            if(response != undefined && response.data['products'])
            {
                this.setState({products: response.data['products'], productCount: response.data['count']})
            }
        })
    }

    getProducts(page, type){
        let noProducts = page * 12 < this.state.productCount ? false: true;
        if(noProducts){
            return false;
        }
        if(type === 2 && page >= 1){
            axios.get('../../../ebs-execution.php?type=5&page='+page).then(response=>{
                console.log(response);
                if(response != undefined && response.data['products'])
                {
                    let npage = page+1;
                    this.setState({pages: npage, products: response.data['products']})
                }
            })
        }
        
        if(type === 1){
            axios.get('../../../ebs-execution.php?type=5&page='+page).then(response=>{
                console.log(response);
                if(response != undefined && response.data['products'])
                {
                    let npage = page - 1;
                    this.setState({pages: npage, products: response.data['products']})
                }
            })
        }


    }

    render() {
        console.log(this.state.product)
        return (
            <Layout>
            <section className="shop-area ptb-160 bg-f9f6f6">
                <Notifications />
                <div className="container">
                    <div className="section-title">
                        <h2>Products List</h2>
                    </div>
                    <div className="woocommerce-topbar">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4">
                                <div className="woocommerce-result-count">
                                    <p>There are total of {this.state.productCount} products.</p>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="pagination-area">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination">                                        
                                            <li className="page-item" onClick={this.getProducts.bind(this, this.state.pages, 1)}><a className="page-link" href="#">Prev</a></li>                                            
                                            <li className="page-item"><a className="page-link" href="#">{this.state.pages}</a></li>                                            
                                            <li className="page-item" onClick={this.getProducts.bind(this, this.state.pages, 2)}><a className="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                    {this.state.products &&  this.state.products != undefined && this.state.products.length>0 && this.state.products.map( product=>{
                        let id = product.id_product;
                        let name = product.name;
                        let price = product.price;
                        let img = product.imageLink;
                        return(
                            <Item id={id} name={name} price={price} img={img} />
                        )
                    })}
                    </div>
                </div>
            </section>
            <MiniCart />
            </Layout>
        );
    }
}

export default ProductLists