import './birthday-reminder.scss';
import React, { useState } from 'react';
import BirthdayList from './BirthdayList';
import BirthdayData from './BirthdayData';

const BirthdayReminder = () => {
  const [data, setData] = useState(BirthdayData);

  const handleClick = () => {
    setData([]);
  }

  const refresh = () => {
    setData(BirthdayData)
  }

  return (
    <div className="birthday-reminder">
      <h2 className="title">
        <span>Birthday reminder</span>
      </h2>

      <div className="birthday-box">
        <h3 className="birthday-title">{data.length} birthdays today</h3>

        <BirthdayList people={data} />

        {data.length === 0 ? <button className="button" onClick={refresh}>Refresh</button> : <button className="button" onClick={handleClick}>Clear All</button>}
      </div>
    </div>
  )
}

export default BirthdayReminder;
