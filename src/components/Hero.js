import React from 'react';
import '../styles/hero.css'

// hero image section - react was so kind to have informed me to toString for my url.
export default function Hero({ heroImg, selfImg }){
    return (
        <>
            <div className="hero" style={{ backgroundImage: `url(${heroImg.toString()})`}}>
                <img className="selfie" src={ selfImg } />
                <h2>zMaG33z</h2>
            </div>
        </>
    );
}