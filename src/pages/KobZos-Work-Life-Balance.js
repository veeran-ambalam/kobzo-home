import React from "react"
  

import Blog from "./blog-details/WorkLifeBalance"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Blog | 10 Ways to have a work-life balance durong work from home."
      description="Our future has changed and we need to change with it. Working from home started with a temporary solution but the circumstances are such that home is going to our office for longer than we know of. Here we discuss about some of the ways we can deal with the struggle of prioritizing between work and home chores ,having a healthy lifestyle and ways to work efficiently."
    />
    <Blog />
  </Layout>
)

export default IndexPage