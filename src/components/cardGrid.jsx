import React, { useState } from 'react';

export default function CardGrid({ maincontent }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { Title, Subtitle, content, bottomcontent, cardGrid } = maincontent;

  return (
    <div className="icon-box">
      {/* Header Section */}
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>{Title}</h1>
          <h2 className="py-3">{Subtitle}</h2>
          <p>{content}</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row">
        {cardGrid?.map((cardItem, index) => (
          <div className="col custom-columns text-start mb-3" key={index}>
            <div
              className="card grad-card px-3"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={hoveredIndex === index ? cardItem.img : cardItem.img2}
                alt={`Card ${index}`}
                className="img-fluid"
              />
              <div className="card-body px-0">
                <h3 className="card-title">{cardItem.Title}</h3>
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={{ __html: cardItem.content }}
                ></p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Content */}
      {bottomcontent && (
        <div className="row">
          <div className="col-md-12 text-center mt-3">
            <p>{bottomcontent}</p>
          </div>
        </div>
      )}
    </div>
  );
}
