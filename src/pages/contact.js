import React from "react"
import { Preloader, Placeholder } from "react-preloading-screen"
import ContactBody from "./contact/ContactBody"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default () => (
  <Layout>
    <SEO title="KobZo | Contact Us" />
    <Preloader>
      <Placeholder>
        <div className="preloader">
          <div className="spinner"></div>
        </div>
      </Placeholder>
      <ContactBody />
    </Preloader>
  </Layout>
)
