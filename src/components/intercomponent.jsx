import React from 'react';

export default function Intercomponent({ compData }) {
  const { compToken, tokenomics } = compData;
  const distribution = tokenomics?.distribution[0]; // Accessing first item safely

  return (
    <div className="intercomp my-5">
      <div className="container">
        {/* Token Overview Section */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-4">
            <img src={compToken.tokenImg} className="img-fluid" alt="Token Image" />
          </div>
          <div className="col-md-8 text-start">
            <h1>{compToken.title}</h1>
            <h2>{compToken.subtitle}</h2>
            <p>{compToken.subtext}</p>
          </div>
        </div>

        {/* Tokenomics Section */}
        <div className="row mb-4">
          <div className="col-md-12 text-center">
            <h1>{tokenomics.totitle}</h1>
            <img src={tokenomics.toimage} className="img-fluid w-50" alt="Tokenomics Chart" />
          </div>
        </div>

        {/* Token Distribution Section */}
        <div className="row justify-content-center">
          <div className='col-md-9'>
            <h4>{distribution?.sectionTitle}</h4>
            <div className="row">
              <div className="col-md-4">
                <ul>
                  <div className='gradient-border'>
                    {distribution?.labels?.map((label, idx) => (
                      <li key={`label-${idx}`}>{label}</li>
                    ))}
                  </div>
                </ul>
              </div>
              <div className="col-md-8">
                <ul>
                  <div className='gradient-border'>
                    {distribution?.values?.map((value, idx) => (
                      <li key={`value-${idx}`}>{value}</li>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
