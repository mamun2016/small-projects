import './tours.scss';
import React, { useState, useEffect } from 'react';
import SingleTour from './SingleTour';
import Loader from '../../components/Loader';

const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }
    catch (error) {
      setLoading(false);
      alert(error.message);
    }
  }

  const removeTour = (id) => {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if(loading) {
    return <Loader />
  }

  return (
    <div className="tour-main">
      <h2 className="title">
        <span>
          {tours.length === 0 ? 'No tours left' : `Our Tours - ${tours.length}`}
        </span>
      </h2>

      <div className="tour-list">
        {tours.length === 0 && (
          <div className="tour-nil">
            <button className="button" onClick={fetchTours}>Refresh</button>
          </div>
        )}
        
        {tours.map(tour => <SingleTour key={tour.id} {...tour} removeTour={removeTour} />)}
      </div>
    </div>
  )
}

export default Tours;
