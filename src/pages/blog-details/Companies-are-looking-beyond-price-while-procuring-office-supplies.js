import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import DetailsBody from './DetailsBody-5'

export default () => (
    <Preloader>
        <Placeholder>
            <div className="preloader">
                <div className="spinner"></div>
            </div>
        </Placeholder>
        <DetailsBody />
    </Preloader>
);