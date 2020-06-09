import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import FeaturesContent from './features/Covid-Safe-Workplace-Services'
import Layout from '../components/Layout'
import SEO from "../components/seo"

class Features extends React.Component {
    render() {
        return (
            <Layout>
            <SEO title="Make Your Office COVID - Safe Workplace With Kobzo" description="Comprehensive solutions and products for cleaning and sanitation practices for offices to maintain your office COVID safe." />
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <FeaturesContent />
            </Preloader>
            </Layout>
        )
    }
}

export default Features