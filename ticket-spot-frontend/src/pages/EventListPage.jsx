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
    title: 'The Third Art Exhibition in Delhi',
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
    title: 'Grand Culinary Fair in Chennai',
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
    title: 'Largest Book Fair in Hyderabad',
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
  },
  {
    "id": 9,
    "title": "Global Investment & Tourism Expo 2025",
    "date": "2025-08-23",
    "time": "10:00 AM",
    "location": "Surat",
    "description": "An international platform showcasing global investment and tourism opportunities.",
    "image": "https://www.indiainatlanta.gov.in/public_files/assets/images/GITE_whatsnew_240425.jpg"
  },
  {
    "id": 10,
    "title": "Mahindra Blues Festival Mumbai",
    "date": "2025-08-28",
    "time": "7:00 PM",
    "location": "Mumbai",
    "description": "An iconic blues music festival with artists from around the world.",
    "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=60"
  },
  {
    "id": 11,
    "title": "Intriguing Contemporary Art Fair",
    "date": "2025-09-05",
    "time": "11:00 AM",
    "location": "Chennai",
    "description": "Showcasing modern art pieces by emerging and established artists.",
    "image": "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=60"
  },
  {
    "id": 12,
    "title": "International Conference on Solar Power Technology",
    "date": "2025-08-05",
    "time": "9:00 AM",
    "location": "Goa",
    "description": "Discussing advancements in solar energy technology and research.",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60"
  },
  {
    "id": 13,
    "title": "Stand-Up Comedy Night",
    "date": "2025-09-15",
    "time": "8:00 PM",
    "location": "Delhi",
    "description": "Laugh out loud with popular comedians performing live.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=60"
  },
  {
    "id": 14,
    "title": "India Process Expo and Conference",
    "date": "2025-08-22",
    "time": "10:00 AM",
    "location": "Mumbai",
    "description": "A premier platform for process industry innovations and networking.",
    "image": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-12/09/full/20241209103545.jpg"
  },
  {
    "id": 15,
    "title": "Cultural Dance Fest in Bangalore",
    "date": "2025-09-20",
    "time": "5:00 PM",
    "location": "Bangalore",
    "description": "Experience classical and contemporary dance performances.",
    "image": "https://karnatakatourism.org/wp-content/uploads/2020/12/pattadakal-dance-festival-karnataka.jpg"
  },
  {
    "id": 16,
    "title": "Largest Book Fair Hyderabad",
    "date": "2025-09-10",
    "time": "10:00 AM",
    "location": "Hyderabad",
    "description": "Thousands of books from diverse genres and authors exhibit here.",
    "image": "https://epe.brightspotcdn.com/dims4/default/654520c/2147483647/strip/true/crop/1440x810+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2Ffe%2Fb2%2F295754ed4bc28ebeeb304659f134%2F062424-book-fair-bs.jpg"
  },
  {
    "id": 17,
    "title": "Tech Innovation Summit Pune",
    "date": "2025-09-12",
    "time": "9:00 AM",
    "location": "Pune",
    "description": "Showcasing cutting-edge technology and startup innovations.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=60"
  },
  {
    "id": 18,
    "title": "International Aquaculture Conference",
    "date": "2025-08-01",
    "time": "10:00 AM",
    "location": "Munnar",
    "description": "Focus on advancements and networking in fisheries and aquaculture.",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60"
  },
  {
    "id": 19,
    "title": "Food and Cultural Festival Jaipur",
    "date": "2025-09-25",
    "time": "12:00 PM",
    "location": "Jaipur",
    "description": "Delightful culinary experiences and cultural displays.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60"
  },
  {
    "id": 20,
    "title": "International Textile and Apparel Expo",
    "date": "2025-09-17",
    "time": "10:00 AM",
    "location": "Gurgaon",
    "description": "Trade fair for textile innovations and global apparel industries.",
    "image": "https://www.internationalapparelandtextilefair.com/assets/images/logo-text-dark.png"
  },
  {
    "id": 21,
    "title": "Global Flooring Solutions Expo",
    "date": "2025-11-07",
    "time": "9:00 AM",
    "location": "New Delhi",
    "description": "Exhibition featuring the latest flooring technologies and designs.",
    "image": "https://gfloorexpo.in/__og-image__/static/og.png"
  },
  {
    "id": 22,
    "title": "PharmaTech & LabTech Expo",
    "date": "2025-08-05",
    "time": "10:00 AM",
    "location": "Bengaluru",
    "description": "Innovation and research in pharmaceutical and laboratory technologies.",
    "image": "https://i.ytimg.com/vi/ED2LfOmZoNI/maxresdefault.jpg"
  },
  {
    "id": 23,
    "title": "BeautySum India Event 2025",
    "date": "2025-08-28",
    "time": "10:00 AM",
    "location": "Mumbai",
    "description": "A beauty and wellness expo showcasing latest trends and products.",
    "image": "https://d2kbar807g2xf.cloudfront.net/app/uploads/2025/02/18022810/beautysum_og.png"
  },
  {
    "id": 24,
    "title": "International Conference on Climate Change",
    "date": "2025-08-01",
    "time": "9:00 AM",
    "location": "Ahmedabad",
    "description": "Discussion platform on global and local climate initiatives.",
    "image": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=60"
  },
  {
    "id": 25,
    "title": "Woodtech India Expo",
    "date": "2025-08-01",
    "time": "10:00 AM",
    "location": "Delhi",
    "description": "Mechanical woodworking and furniture making technology exhibition.",
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=60"
  },
  {
    "id": 26,
    "title": "ACETECH Delhi Building & Construction Expo",
    "date": "2025-12-04",
    "time": "10:00 AM",
    "location": "New Delhi",
    "description": "Leading expo for building, construction, and design innovations.",
    "image": "https://i.ytimg.com/vi/TJbYfFxRy7o/maxresdefault.jpg"
  },
  {
    "id": 27,
    "title": "India International Pet Trade Fair",
    "date": "2025-08-23",
    "time": "10:00 AM",
    "location": "Mumbai",
    "description": "A trade fair focused on pet care products and services.",
    "image": "https://creature-companions.in/wp-content/uploads/2024/04/C1_RECORD-BREAKING-TURNOUT-AT-THE-13TH-IIPTF-6.jpg"
  },
  {
    "id": 28,
    "title": "Bengal Tech Expo",
    "date": "2025-08-10",
    "time": "9:00 AM",
    "location": "Kolkata",
    "description": "Technology innovations and startup showcase in Eastern India.",
    "image": "https://thepackman.in/wp-content/uploads/2024/11/Holostik-International-Rice-Grain-Pro-Tech-Packman-16-11-2024.jpg"
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
