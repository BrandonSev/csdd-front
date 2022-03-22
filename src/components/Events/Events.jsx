import React, {useState, useEffect} from 'react';
import axios from "axios";

const API_URL = process.env.REACT_APP_CSDD_URL

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/events/`)
      .then(({ data }) => {
        setEvents(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
  <div>
    <h1>Events<h1>
<div className="carousel-events">
  {events &&
    events.map((event) => (
      <div key={event.id}>
        <img src={event.event_link} alt="" className="event_link" />
        <div className="overlay">
          <h3 className="overlay-filename">{event.filename}</h3>
          <h4 className="overlay-date">{event.event_date} </h4>
          <p className="overlay-description">{event.description}</p>
        </div>
      </div>
      </div>
    ))};
    )};


export default Events;
