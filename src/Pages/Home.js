import React from 'react'
import BannerSlider from '../components/BannerSlider/BannerSlider'
import ServicesWeOffer from '../components/ServecisWeOffer/ServecisWeOffer'
import CoreCompetencies from '../components/CoreCompetencies/CoreCompetencies'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import WeAre from '../components/WeAre/WeAre'

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <ServicesWeOffer />
            <CoreCompetencies />
            <WhyChooseUs />
        </div>
    )
}

export default Home
