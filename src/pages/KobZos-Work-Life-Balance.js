import React from "react"
import { Preloader, Placeholder } from "react-preloading-screen"

import Blog from "./blog-details/WorkLifeBalance"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Blog | 10 Ways to have a work-life balance durong work from home."
      description=""
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