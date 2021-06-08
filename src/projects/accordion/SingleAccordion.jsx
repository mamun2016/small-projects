import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SingleAccordion = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false)

  const toggleItem = () => {
    setToggle(!toggle);
  }

  return (
    <div className="accordion">
      <h5 className="accordion-title" onClick={toggleItem}>
        {question}

        <button className="button button-text">
          {toggle ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </h5>

      {toggle && 
        <div className="accordion-text">
          {answer}
        </div>
      }
    </div>
  )
}

export default SingleAccordion;
