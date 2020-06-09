import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import FeaturesContent from './features/Setup-Remote-Workspace'
import Layout from '../components/Layout'
import SEO from "../components/seo"

class Features extends React.Component {
    render() {
        return (
            <Layout>
            <SEO title="Remote Workplace Necessities, Supplies & Delivery" description="Remote workplace essentials, procurement, delivery and set up for employees. Products include Work Essentials, Productivity Enhancement, Employee Wellness, Set-up & Comfort Essentials." />
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