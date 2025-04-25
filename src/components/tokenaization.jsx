import React from 'react';

export default function Tokenaization({ tokenData }) {
    const { TokenTitle, TokenSubtitle, Tokepara, bottomText, TokeBox } = tokenData;

    return (
        <div className='tokenization mt-0 mt-md-5'>
            <div className="container">
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>{TokenTitle}</h1>
                        <h2 className='py-4'>{TokenSubtitle}</h2>
                        <p>{Tokepara}</p>
                    </div>
                </div>
                <div className='row mb-4'>
                    {TokeBox?.map((tokenItem, index) => (
                        <div className='col-md-4' key={index}>
                            <div className='toke-box mb-3 mb-md-0'>
                                <div className='gradient-border'>
                                    <h1>{tokenItem.Boxtitle}</h1>
                                    <h2>{tokenItem.BoxsubTitle}</h2>
                                    <p>{tokenItem.BoxText}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='row mb-0 mb-md-5'>
                    <p>{bottomText}</p>
                </div>
            </div>
        </div>
    );
}
