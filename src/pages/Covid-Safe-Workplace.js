import React from "react"
import { Preloader, Placeholder } from "react-preloading-screen"
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
        <Preloader>
          <Placeholder>
            <div className="preloader">
              <div className="spinner"></div>
            </div>
          </Placeholder>
          <FeaturesContent />
        </Preloader>
      </Layout>
    )
  }
}

export default Features
