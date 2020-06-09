import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import ContactBody from './contact/ContactBody'
import Layout from '../components/layout'
export default () => (
    <Layout>
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
