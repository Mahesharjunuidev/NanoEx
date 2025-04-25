import React from 'react';

export default function Htworks({ htworkDetails }) {
    const { htTitle, htsubTitle, htText, htworkBox } = htworkDetails;

    return (
        <div className='htWorks'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>{htTitle}</h1>
                        <h2>{htsubTitle}</h2>
                        <p className='py-4'>{htText}</p>
                    </div>
                </div>

                <div className='row'>
                    {htworkBox?.map((htworkItem, index) => {
                        const { htboxTitle, htboxSubtitle, htboxtext } = htworkItem;
                        const isLastOddItem = htworkBox.length % 2 !== 0 && index === htworkBox.length - 1;
                        
                        return (
                            <div
                                key={index}
                                className={`col-md-6 ${isLastOddItem ? 'offset-md-3' : ''}`}>
                                <div className='htworkBox'>
                                    <div className='row align-items-center'>
                                        <div className='col-md-4 border-right'>
                                            <h4>{htboxTitle}</h4>
                                            <h5>{htboxSubtitle}</h5>
                                        </div>
                                        <div className='col-md-8'>
                                            <p>{htboxtext}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
