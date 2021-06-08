import './tabs.scss';
import React, { useState } from 'react';
import TabsDetails from './TabsDetails';
import TabsData from './TabsData';

const Tabs = () => {
  const [jobs] = useState(TabsData);
  const [value, setValue] = useState(0);

  const showTabs = (index) => {
    setValue(index);
  }

  return (
    <div className="tabs-main">
      <h2 className="title">
        <span>Our Tabs</span>
      </h2>

      <div className="tabs-holder">
        <ul className="tabs">
          {
            jobs.map((item, index) => {
            return (
                <li className={value === index ? 'active' : ''} key={item.id} onClick={() => showTabs(index)}>{item.name}</li>
              )
            })
          }
        </ul>

        <TabsDetails newData={jobs[value]} />
      </div>
    </div>
  )
}

export default Tabs;
