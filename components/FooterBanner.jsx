import Link from 'next/link';
import React from 'react';

const FooterBanner = () => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="beats-solo">Small Text</p>
                <h3>Mid Text</h3>
                <img className='hero-banner-image' src="" alt="headphones" />
                <div>
                    <Link href='{/product/ID}'><button type='button'>button text</button></Link>
                    <div className="dsc">
                        <h5>Description</h5>
                        <p>DESCRIPTION</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBanner;