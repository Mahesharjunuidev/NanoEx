import React from 'react';

export default function Keyfeature({ keyData }) {
  const { KeyTitle, KeySubtitle, keyBottm, KeyPara, keyBox } = keyData;

  return (
    <div className='key-feature'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>{KeyTitle}</h1>
            <h2 className='my-4'>{KeySubtitle}</h2>
            <p>{KeyPara}</p>
          </div>
        </div>
        <div className='row mt-5'>
          {keyBox?.map((keyItem, index) => (
            <div className='col-md-3 mb-4' key={index}>
              <div className='feature-box'>
                <div className='gradient-bac'>
                  <img src={keyItem.kicon} className='img-fluid' alt={keyItem.kboxTitle} />
                  <h5>{keyItem.kboxTitle}</h5>
                  <p>{keyItem.kboxtext}</p>
                </div>
              </div>
            </div>
          ))}
          <p className='my-5'>{keyBottm}</p>
        </div>
      </div>
    </div>
  );
}
