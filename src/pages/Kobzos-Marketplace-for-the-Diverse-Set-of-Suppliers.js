import React from "react"
  

import Blog from "./blog-details/Kobzos-Marketplace-for-the-Diverse-Set-of-Suppliers"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title=" Blog | Kobzo’s Marketplace for the Diverse Set of Suppliers"
      description="How technology, digitalization and AI have revolutionized and enhanced the procurement and selling processes for companies."
    />
    <Blog />
  </Layout>
)

export default IndexPage
