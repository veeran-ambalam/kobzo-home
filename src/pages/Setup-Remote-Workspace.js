import React from "react"
  
import FeaturesContent from "./features/Setup-Remote-Workspace"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Features extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title=" Remote Workplace Necessities, Supplies and Delivery With KobZo"
          description="Remote workplace essentials, procurement, delivery and set up for employees. Products include Work Essentials, Productivity Enhancement, Employee Wellness, Set-up & Comfort Essentials."
        />
          <FeaturesContent />
      </Layout>
    )
  }
}

export default Features
