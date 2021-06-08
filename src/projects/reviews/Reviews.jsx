import './reviews.scss';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import reviewData from './ReviewData';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, avatar, text } = reviewData[index];

  // This function works fine. Trying something better
  // const nextReview = () => {
  //   let newIndex = index;
  //   if (newIndex < reviewData.length - 1) {
  //     setIndex(newIndex + 1);
  //   } else {
  //     setIndex(0);
  //   }
  // }

  const checkNumber = (number) => {
    if(number > reviewData.length -1) {
      return 0;
    }

    if(number < 0) {
      return reviewData.length - 1;
    }

    return number;
  }

  const nextReview = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }

  // This function works fine. Trying something better
  // const prevReview = () => {
  //   let newIndex = index;
  //   if (newIndex > 0 ) {
  //     setIndex(newIndex - 1);
  //   } else {
  //     setIndex(reviewData.length - 1);
  //   }
  // }

  const prevReview = () => {
    setIndex(index => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }

  // This function works fine. Trying something better
  // const randomReviews = (index) => {
  //   let randomNo = Math.round(Math.random() * (reviewData.length - 1));
  //   if (randomNo === index) {
  //     if (index === reviewData.length - 1) {
  //       randomNo = index - 1;
  //     } else {
  //       randomNo = index + 1;
  //     }
  //   }
  //   setIndex(randomNo);
  // }

  const randomReview = (index) => {
    let randomNo = Math.round(Math.random() * (reviewData.length - 1));
    if(randomNo === index) {
      randomNo = index + 1;
    }
    setIndex(checkNumber(randomNo));
  }

  return (
    <div className="review-list">
      <div className="review">
        <div className="review-avatar">
          <img src={avatar} alt={name} />
        </div>

        <h2 className="review-name">{name}</h2>
        <h2 className="review-designation">{job}</h2>

        <div className="review-text">
          {text}
        </div>
      </div>

      <div className="review-nav">
        <button className="button button-text" onClick={prevReview}><FaChevronLeft /></button>
        <button className="button button-text" onClick={nextReview}><FaChevronRight /></button>
      </div>

      <div className="review-random">
        <button className="button button-medium" onClick={() => randomReview(index)}>Random Reviews</button>
      </div>
    </div>
  )
}

export default Reviews;
