import React from "react"
import { Preloader, Placeholder } from "react-preloading-screen"
import FeaturesContent from "./features/Covid-19-Essentials"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Features extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Subsidized Daily Essentials Delivery Service During COVID-19"
          description="Your employees can order groceries, food, cleaning supplies and other work and home essentials during COVID-19 lockdown"
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
