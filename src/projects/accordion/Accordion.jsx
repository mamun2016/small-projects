import './accordion.scss';
import React from 'react';
import SingleAccordion from './SingleAccordion';
import AccordionData from './AccordionData';

const Accordion = () => {
  return (
    <div className="accordion-main">
      <h2 className="title">
        <span>My Accordion</span>
      </h2>

      <div className="accordion-list">
        {
          AccordionData.map(accordion => <SingleAccordion key={accordion.id} {...accordion} />)
        }
      </div>
    </div>
  )
}

export default Accordion;
