import React from 'react';

export default function Contentscroll({ scrolldata }) {
  const { scrollTitle, TitleContent, scrollContent, Lhsimg } = scrolldata;

  return (
    <div className='scrollContent'>
      <div className='row'>
        <div className='col-md-6'>
          <figure>
            <img src={Lhsimg} alt="Left-hand image" className='w-100' />
          </figure>
        </div>
        <div className='col-md-6 text-start'>
          <h1>{scrollTitle}</h1>
          <p>{TitleContent}</p>
          <div className='scrollSection'>
            {scrollContent.map((content, index) => (
              <div key={index}>
                <h5>{content.Title}</h5>
                <p>{content.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
