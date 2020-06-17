import React from "react"
  
import FeaturesContent from "./features/Covid-Safe-Workplace"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Features extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Make Your Office COVID - Safe Workplace With Kobzo"
          description=" Kobzo’s wide range of best practices, sanitization products and cleaning services to keep your premises a certified COVID-safe workplace."
        />
        <FeaturesContent />
      </Layout>
    )
  }
}

export default Features
