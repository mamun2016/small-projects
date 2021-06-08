import React from 'react';

const BirthdayList = ({ people }) => {
  return (
    <>
      {
        people.map(person => {
          const { id, image, name, age } = person;

          return (
            <div key={id} className="birthday-list">
              <div className="birthday-avatar">
                <img src={image} alt={name} />
              </div>

              <div className="birthday-details">
                <h4>{name}</h4>
                <p>{age} years old</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default BirthdayList;
