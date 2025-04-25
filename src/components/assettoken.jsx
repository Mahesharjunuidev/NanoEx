import React from 'react';
import CardCarousel from './carosuel';
import Data from '../data/content';

export default function AssetToken({ carDetails }) {
  const { assetTitle, assetContent, assetImage } = carDetails;

  return (
    <div className="AssetToken">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="lhstitle">{assetTitle}</h1>
            <p className="lhstext">{assetContent}</p>
            <img src={assetImage} alt="Asset" className="img-fluid" />
          </div>

          {/* Right Column */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="rhstitle">Why Invest in Tokenized Real World Assets?</h1>
            <CardCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
