/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./Footer"
import GoTop from '../pages/GoTop';
import Form from '../pages/main/MainForm'

import "./css/bootstrap.min.css"
import "./css/slick.css"
import "./css/animate.css"
import "./css/flaticon.css"
import "./css/boxicons.min.css"


import "./styles/style.scss"
// import "./styles/brink-pink-style.scss"
import "./css/responsive.css"
const Layout = ({ children }) => {

  return (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" type="image/png" href={require("../images/favicon.png")}></link>
        {/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script> */}
        <Header />
        <main>{children}</main>
        <Form />
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
