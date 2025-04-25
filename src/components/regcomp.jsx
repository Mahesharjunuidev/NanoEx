import React from 'react';

export default function RegComp({ regcomp }) {
  const { rctitle, rcsubtext, lrcdetails, rrcdetails } = regcomp;

  return (
    <div className="Reg-comp">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='text-center'>{rctitle}</h1>
            <p className='text-center'>{rcsubtext}</p>
          </div>
        </div>

        <div className="row">
          {/* Left Side */}
          <div className="col-md-6">
            <h2>{lrcdetails?.rcftitle}</h2>
            <div className="reg-comp-list">
              <ul className='text-white text-start'>
                {lrcdetails?.lrcdcontent?.map((item, idx) => (
                  <li key={idx}>{item}</li> // Use a more unique key if available
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6">
            <h2>{rrcdetails?.rrcftitle}</h2>
            <div className="reg-comp-list">
              <ul className='rhslist text-white text-start'>
                {rrcdetails?.rrcdcontent?.map((item, idx) => (
                  <li key={idx}>
                    <p>
                      <strong>{item?.rclabel}:</strong> {item?.rccontent}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
