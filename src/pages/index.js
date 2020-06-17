import React from "react"
 

import MainBanner from './main/MainBanner'
import DeliveryBanner from './main/DeliveryBanner'
import DigitalProcurement from './main/DigitalProcurement'
import DigitalSales from './main/DigitalSales'
import Services from './main/Services'
import Partner from './main/Partner'
import Blog from './main/Blog'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Kobzo: Gateway to your Smart Workplace" />
            <MainBanner />
            <Services />
            <DeliveryBanner />
            <DigitalProcurement />
            <DigitalSales />
            <Partner />
            <Blog />
  </Layout>
)

export default IndexPage
