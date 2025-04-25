import React from 'react';

export default function Whychoosenano({ wchData }) {
    const { wcnTitle, wcntext, whcimg, sititle, siconten } = wchData;

    return (
        <div className='container'>
            <div className='whychoose-nano'>
                <div className='wcn-top'>
                    <div className='row align-items-center order-reverse'>
                        <div className='col-md-7'>
                            <h1>{wcnTitle}</h1>
                            <p>{wcntext}</p>
                        </div>
                        <div className='col-md-5'>
                            <img src={whcimg} className='img-fluid' alt="Why Choose Nano" />
                        </div>
                        <div className='col-md-12'>
                            <button
                                className='btn-lg btn-primary w-auto px-4'
                                aria-label="Join the Giveaway"
                            >
                                Join The Giveaway
                            </button>
                        </div>
                    </div>
                </div>
                <div className='start-invest-token mb-5'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>{sititle}</h1>
                            <p className='py-4'>{siconten}</p>
                            <button
                                className='btn btn-primary'
                                aria-label="Sign Up Now"
                            >
                                Sign Up Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
