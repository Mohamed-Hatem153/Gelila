import React from 'react'
import leaf from '../../Assets/images/leaf.png'
import './FeaturedProducts.css'

const FeaturedProducts = () => {
    return (
        <div className='featured-products'>
            <div className='container'>
            <div className="featured-products-title">
            <div className="grid">
              <div>
                <p>our products</p>
                <h3>featured products</h3>
                <div>
                  <img src={leaf} alt="leaf" />
                </div>
              </div>
            </div>
          </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
