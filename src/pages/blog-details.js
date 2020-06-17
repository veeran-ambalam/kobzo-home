import React from "react"

import NoSSR from 'react-no-ssr';

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogDetails = () => (
  <Layout>
    <SEO title="Home" />
    <NoSSR>
        
            <h1>Blog Details</h1>
        
    </NoSSR>
  </Layout>
)

export default BlogDetails
