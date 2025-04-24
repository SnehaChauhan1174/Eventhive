import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Events = () => {
    const [events, setEvents] = useState([]); // State to store events
  
    // Fetch events from backend
    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await axios.get("http://localhost:8080/events");
          setEvents(response.data);
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      };
  
      fetchEvents();
    }, []);

    return (
        <div>
          <h1>All Events</h1>
          {events.length === 0 ? (
            <p>Loading events...</p>
          ) : (
            <ul>
              {events.map((event) => (
                <li key={event._id}>
                  <h2>{event.title}</h2>
                  
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    };
    
    export default Events;