import React from "react"
  

import Blog from "./blog-details/Companies-are-looking-beyond-price-while-procuring-office-supplies"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Blog | Companies are looking beyond price while procuring office supplies"
      description=" What companies look for during their procurement activities and how these needs can be met by suppliers"
    />

    <Blog />
  </Layout>
)

export default IndexPage
