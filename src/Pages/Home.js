import React from 'react'
import BannerSlider from '../components/BannerSlider/BannerSlider'
import ServicesWeOffer from '../components/ServecisWeOffer/ServecisWeOffer'
import CoreCompetencies from '../components/CoreCompetencies/CoreCompetencies'
import WeAre from '../components/WeAre/WeAre'

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <ServicesWeOffer />
            <CoreCompetencies />
        </div>
    )
}

export default Home
