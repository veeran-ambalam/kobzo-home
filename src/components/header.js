import React from 'react'
import { Link } from "gatsby"
import * as Icon from 'react-feather';

class Header extends React.Component {

    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.src = '//js.hs-scripts.com/7673033.js';
        script.async = true;
        script.defer = true;
        script.id ="hs-script-loader"
        document.body.appendChild(script);
        
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    render(){
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <header id="header">
                <div id="navbar" className={`startp-nav`}>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                                <a 
                                    className="navbar-brand"
                                    onClick={() => window.location.refresh()}
                                    href="/"
                                >
                                    <img src={require("../images/logo.png")} alt="logo" />
                                </a>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
    
                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav nav ml-auto">
                                    <li className="nav-item">
                                        <Link activeClassName="active" to="/Digital-Employee-Engagement">
                                            Digital Employee Engagement
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link activeClassName="active" to="/Setup-Remote-Workspace">
                                            Setup Remote Workspace
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.kobzo.com/home/Covid-Safe-Workplace">
                                            Covid-Safe Workplace <Icon.ChevronDown />
                                            <ul className="dropdown_menu">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="https://www.kobzo.com/home/COVID-Safe-Workplace-Products">
                                                        COVID-Safe Workplace Products
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="https://www.kobzo.com/home/COVID-Safe-Workplace-Services">
                                                        COVID-Safe Workplace Services
                                                    </a>
                                                </li>
                                            </ul>
                                        </a>
                                    </li>    
                                    <li className="nav-item">
                                        <Link activeClassName="active" to="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link activeClassName="active" to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div> 
                </div>
    
            </header>
        )
    }
}

export default Header