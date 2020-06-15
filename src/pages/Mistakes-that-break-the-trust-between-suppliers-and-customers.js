import React from "react"
import { Preloader, Placeholder } from "react-preloading-screen"

import Blog from "./blog-details/Mistakes-that-break-the-trust-between-suppliers-and-customers"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title=" Blog | Mistakes that break the trust between suppliers and customers"
      description="The importance of protecting the trust between suppliers & customers and cultivating trust in the procurement industry."
    />
    <Preloader>
      <Placeholder>
        <div className="preloader">
          <div className="spinner"></div>
        </div>
      </Placeholder>
      <Blog />
    </Preloader>
  </Layout>
)

export default IndexPage
