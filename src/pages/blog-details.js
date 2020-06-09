import React from "react"
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogDetails = () => (
  <Layout>
    <SEO title="Home" />
    <NoSSR>
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <h1>Blog Details</h1>
        </Preloader>
    </NoSSR>
  </Layout>
)

export default BlogDetails
