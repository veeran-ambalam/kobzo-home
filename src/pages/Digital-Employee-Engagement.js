import React from 'react'
   
import FeaturesContent from './features/Digital-Employee-Engagement'
import Layout from '../components/layout'
import SEO from "../components/seo"

class Features extends React.Component {
    render() {
        return (
            <Layout>
            <SEO title="Digital Employee Engagement with Kobzo" description="Digital engagement solutions for employees. Engage them virtually with online yoga, wellness, team building games and tournaments." />
            <FeaturesContent />
            </Layout>
        )
    }
}

export default Features