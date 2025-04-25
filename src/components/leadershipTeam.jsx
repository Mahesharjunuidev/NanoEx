import React from 'react'
import TeamcardCarousel from './teamcarousel'
import Data from '../data/content'

export default function LeadershipTeam({ leaderShip }) {
    const { TeamTitle, TeamText } = leaderShip
    const communityData = Data.community || {};  // Ensure communityData is always defined

    return (
        <div className='leadeship mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>{TeamTitle}</h1>
                        <p className='py-4'>{TeamText}</p>
                        <TeamcardCarousel />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <div className='communityCard text-start p-5'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h1>{communityData.commtitle}</h1>
                                    <p>{communityData.commtest}</p>
                                    <div className='socialIcons'>
                                        <img src={communityData.x} alt="X social media icon" />
                                        <img src={communityData.youtube} alt="YouTube social media icon" />
                                        <img src={communityData.mail} alt="Mail icon" style={{ width: '44px' }} />
                                        <img src={communityData.ai} alt="AI related icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
