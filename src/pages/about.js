import React from "react"
  
import AboutArea from "./about/AboutArea"
import Layout from "../components/layout"
import SEO from "../components/seo"
class About extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="About KobZo, Our Mission and Our History" />

        <AboutArea />
      </Layout>
    )
  }
}

export default About
