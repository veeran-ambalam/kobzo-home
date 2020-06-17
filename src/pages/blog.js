import React from "react"
  
import NoSSR from "react-no-ssr"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Home" />
    <NoSSR>
      <h1>Blog</h1>
    </NoSSR>
  </Layout>
)

export default Blog
