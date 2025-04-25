import React from 'react'

export default function Investers({ investMain }) {
    const { invesTitle, invesSubtitle, invesImg, subContent, bottomContent, investbox } = investMain;

    return (
        <div className='investorSection'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 text-start'>
                        <h1>{invesTitle}</h1>
                        <h2>{invesSubtitle}</h2>
                        <p>{subContent}</p>
                    </div>

                    <div className='col-md-4'>
                        <img src={invesImg} className='img-fluid' alt="Investment Image" />
                    </div>
                </div>

                <div className='row'>
                    {investbox?.map((Inqett) => (
                        <div className='col-md-4' key={Inqett.invesTitlee}>
                            <div className='invest-box text-start'>
                                <h5 className='invest-title' style={{
                                    backgroundImage: Inqett.background, 
                                    backgroundClip: "text",             
                                    WebkitBackgroundClip: "text",        
                                    color: "transparent",                
                                    WebkitTextFillColor: "transparent",  
                                }}>
                                    {Inqett.invesTitlee}
                                </h5>
                                <p>{Inqett.invesContent}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='row'>
                    <p>{bottomContent}</p>
                </div>
            </div>
        </div>
    )
}
