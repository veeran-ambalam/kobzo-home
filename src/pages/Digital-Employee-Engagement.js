import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import FeaturesContent from './features/Digital-Employee-Engagement'
import Layout from '../components/Layout'
import SEO from "../components/seo"

class Features extends React.Component {
    render() {
        return (
            <Layout>
            <SEO title="Digital Employee Engagement with Kobzo" description="Digital engagement solutions for employees. Engage them virtually with online yoga, wellness, team building games and tournaments." />
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