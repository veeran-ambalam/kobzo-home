import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import DetailsBody from './DetailsBody-3'

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