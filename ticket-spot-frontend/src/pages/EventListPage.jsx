import React from 'react';
import './EventListPage.css';
import { Link } from 'react-router-dom';

const mockEvents = [
  {
    id: 1,
    title: 'Music Festival in Mumbai',
    date: '2025-06-10',
    time: '7:00 PM',
    location: 'Mumbai',
    description: 'An amazing music festival featuring top artists.',
    image: 'https://static.tripzilla.in/media/124611/conversions/337ab49c-042e-40a8-8320-8724cb3ba0c6-w768.webp', 
  },
  {
    id: 2,
    title: 'Art Exhibition in Delhi',
    date: '2025-06-15',
    time: '10:00 AM',
    location: 'Delhi',
    description: 'A showcase of contemporary art from various artists.',
    image: 'https://thehaatofart.com/wp-content/uploads/2024/07/digital-art-inmersive-exhibition_1600x1067-1024x683.jpg',
  },
  {
    id: 3,
    title: 'Theatre Performance in Kolkata',
    date: '2025-06-20',
    time: '6:30 PM',
    location: 'Kolkata',
    description: 'A captivating theatre performance you won\'t want to miss.',
    image: 'https://th-i.thgim.com/public/entertainment/theatre/a13w05/article26920812.ece/alternates/FREE_1200/22bgmTheFather5jpg', 
  },
  {
    id: 4,
    title: 'Food Fair in Chennai',
    date: '2025-06-25',
    time: '11:00 AM',
    location: 'Chennai',
    description: 'A delicious food fair with a wide variety of cuisines.',
    image: 'https://images.unsplash.com/photo-1666264472719-8f20fe1f5a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGZhaXIlMjBpbmRpYXxlbnwwfDB8MHx8fDA%3D', 
  },
  {
    id: 5,
    title: 'Tech Conference in Bangalore',
    date: '2025-07-01',
    time: '9:00 AM',
    location: 'Bangalore',
    description: 'The leading tech conference in the region.',
    image: 'https://images.sifted.eu/wp-content/uploads/2025/01/07095014/117.-Sifted-Summit-02.10.24-www.harbinson.uk_-scaled.jpg', 
  },
  {
    id: 6,
    title: 'Stand-Up Comedy in Pune',
    date: '2025-07-05',
    time: '8:00 PM',
    location: 'Pune',
    description: 'A hilarious night of stand-up comedy with popular comedians.',
    image: 'https://images.unsplash.com/photo-1560090143-c9b73097794f?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  },
  {
    id: 7,
    title: 'Book Fair in Hyderabad',
    date: '2025-07-10',
    time: '10:00 AM',
    location: 'Hyderabad',
    description: 'A wide selection of books from various genres and authors.',
    image: 'https://images.unsplash.com/photo-1660606422336-4dd7b6795838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGZhaXJ8ZW58MHwwfDB8fHww', // Placeholder image URL
  },
  {
    id: 8,
    title: 'Dance Workshop in Jaipur',
    date: '2025-07-15',
    time: '2:00 PM',
    location: 'Jaipur',
    description: 'An energetic dance workshop for all skill levels.',
    image: 'https://plus.unsplash.com/premium_photo-1718570261539-41ea8b88f7f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFqYXN0aGFuaSUyMERhbmNlfGVufDB8MHwwfHx8MA%3D%3D',
  }
  // Add more mock events as needed
];

function EventListPage() {
  return (
    <div className="event-list-container">
      <h1>Upcoming Popular Events</h1>
      <div className="event-grid">
        {mockEvents.map((event) => (
          <div key={event.id} className="event-card">
            {event.image && (
              <img src={event.image} alt={event.title} className="event-image" />
            )}
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <Link to="/booking"><button className="movie-button">Book Tickets</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventListPage;