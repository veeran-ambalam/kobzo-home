import React from "react"
  
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <section className="features-area ptb-160 bg-f9f6f6">
      <div className="container">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
