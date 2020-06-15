import React from "react"
import { Preloader, Placeholder } from "react-preloading-screen"
import AboutArea from "./about/AboutArea"
import Layout from "../components/layout"
import SEO from "../components/seo"
class About extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="About KobZo, Our Mission and Our History" />
        <Preloader>
          <Placeholder>
            <div className="preloader">
              <div className="spinner"></div>
            </div>
          </Placeholder>
          <AboutArea />
        </Preloader>
      </Layout>
    )
  }
}

export default About
