import React from "react"
  
import FeaturesContent from "./features/Covid-Safe-Workplace-Services"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Features extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title=" COVID-Safe Workplace Services With Kobzo"
          description="Various cleaning and sanitization services suited to offices, factories, retail stores and more, to maintain a COVID-Safe environment for your staff and clients. COVID-free certification and quality parameter."
        />{" "}
        <FeaturesContent />
      </Layout>
    )
  }
}

export default Features
