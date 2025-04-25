import React from 'react';

export default function Banner({ Title, Subtitle, Running, Image }) {
  return (
    <div className="Banner">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-8 text-center text-md-start">
            <h1>{Title}</h1>
            <h2>{Subtitle}</h2>
            <p>{Running}</p>
          </div>

          {/* Right Column */}
          <div className="col-md-4 text-end">
            <img src={Image} alt="Banner" className="img-fluid" />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 text-center text-md-start">
            <button className="btn btn-primary me-3">White Paper</button>
            <button className="btn btn-secondary how-to-buy">How to Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
