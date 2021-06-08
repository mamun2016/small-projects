import './slider.scss';
import React, { useState, useEffect } from 'react';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import SingleSlider from './SingleSlider';
import SliderData from './SliderData';

const Slider = () => {
  const [people] = useState(SliderData);
  const [index, setIndex] = useState(0);

  useEffect (() => {
    const lastItem = people.length - 1;
    if(index < 0) {
      setIndex(lastItem);
    }
    if(index > lastItem) {
      setIndex(0);
    }
  }, [index, people])

  useEffect (() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000);
    return () => clearInterval(slider);
  }, [index])

  return (
    <div className="slider-main">
      <h2 className="title">
        <span>My Slider</span>
      </h2>

      <div className="slider-list">
        <button className="slider-prev" onClick={() => setIndex(index - 1)}><VscChevronLeft /></button>
        <button className="slider-next" onClick={() => setIndex(index + 1)}><VscChevronRight /></button>
        
        {
          people.map((person, personIndex) => {
            let position = 'slider-next-slide';
            if(personIndex === index) {
              position = 'slider-active-slide';
            }
            if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
              position = 'slider-prev-slide';
            }
            return (
              <SingleSlider position={position} key={person.id} person={person} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Slider;
