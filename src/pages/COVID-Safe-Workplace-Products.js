import React from "react"
  
import FeaturesContent from "./features/Covid-Safe-Workplace-Products"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Features extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Hygiene & Safety Products For COVID-Safe Offices"
          description="A wide range of COVID-safe sanitization and cleaning products specially packaged for specific commercial, retail, factory or office needs."
        />

        <FeaturesContent />
      </Layout>
    )
  }
}

export default Features
