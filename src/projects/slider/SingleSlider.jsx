import React from 'react';

const SingleSlider = ({ person, position }) => {
  return (
    <div className={`slider ${position}`}>
      <div className="slider-avatar">
        <img src={person.image} alt={person.name} />
      </div>

      <h3 className="slider-name">
        {person.name}
      </h3>

      <div className="slider-designation">
        {person.designation}
      </div>

      <div className="slider-text">
        {person.message}
      </div>
    </div>
  )
}

export default SingleSlider;
