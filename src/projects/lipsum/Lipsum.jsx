import './lipsum.scss';
import React, { useState } from 'react';
import LoremText from './LoremText';

const Lipsum = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setCount(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const generated = LoremText.slice(0, count).map((item, index) => {
    return <p key={index}>{item}</p>
    })
    setData(generated);
  }

  return (
    <div className="lipsum">
      <h2 className="title">
        <span>Dummy Text Generator</span>
      </h2>

      <form className="lipsum-button" onSubmit={handleSubmit}>
        Paragraph: 
        <input type="number" min="0" max={LoremText.length} onChange={handleChange} value={count} className="input-field" />
        <button className="button">Generate</button>
      </form>

      <div className="lipsum-text">
        {data}
      </div>
    </div>
  )
}

export default Lipsum;
