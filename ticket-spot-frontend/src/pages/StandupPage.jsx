import React from 'react';
import './StandupPage.css';
import { Link } from 'react-router-dom';

const standupShows = [
  {
    id: 'SU101',
    title: 'Survival Instinct',
    performer: 'Zakir Khan',
    date: 'May 25, 2025',
    venue: 'Siri Fort Auditorium, Delhi',
    image: 'https://creativeyatra.com/wp-content/uploads/2019/11/Survival-Instinct-by-Zakir-Khan-1.jpg',
  },
  {
    id: 'SU102',
    title: 'Thoda Saaf Bol',
    performer: 'Abhishek Upmanyu',
    date: 'May 30, 2025',
    venue: 'Chowdiah Memorial Hall, Bangalore',
    image: 'https://usimg.sulekha.io/cdn/events/images/blog/blogimagethumbnail_2023-11-8-2-30-26.webp',
  },
  {
    id: 'SU123',
    title: 'Samay Raina Unfiltered',
    performer: 'Samay Raina',
    date: 'June 2, 2025',
    venue: 'Bhatkhande Auditorium, Lucknow',
    image: 'https://www.masseytheatre.com/wp-content/uploads/2024/10/SHOWTITLE_SIZE-400x600-1.jpg',
  },
  {
    id: 'SU103',
    title: 'Angry Young Man',
    performer: 'Aakash Gupta',
    date: 'June 5, 2025',
    venue: 'Bal Gandharva Rang Mandir, Pune',
    image: 'https://i.ytimg.com/vi/SVRH-pBw0cc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD3ZizJeDZqrEQ0LPyQWAGmuyw0nA',
  },
  {
    id: 'SU104',
    title: 'The Comedy Factory',
    performer: 'Vipul Goyal',
    date: 'June 9, 2025',
    venue: 'Shanmukhananda Hall, Mumbai',
    image: 'https://in.bmscdn.com/events/moviecard/ET00131881.jpg',
  },
  {
    id: 'SU154',
    title: 'Kisi Ko Batana Mat',
    performer: 'Anubhav Singh Bassi',
    date: 'June 14, 2025',
    venue: 'City Palace Hall, Udaipur',
    image: 'https://www.ticketsnw.ca/wp-content/uploads/2024/07/800x560-5.jpg',
  },
  {
    id: 'SU105',
    title: 'Ulta Palta',
    performer: 'Neeti Palta',
    date: 'June 17, 2025',
    venue: 'JLN Indoor Stadium, Delhi',
    image: 'https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-ulta-palta-a-comedy-show-by-neeti-palta-0-2023-5-30-t-4-18-7.jpg',
  },
  {
    id: 'SU106',
    title: 'One Mic Stand',
    performer: 'Kenny Sebastian',
    date: 'June 18, 2025',
    venue: 'Bharat Mandapam, Hyderabad',
    image: 'https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf16C6h5POjXT--mRcfY1cp4ttydDID3Kv3k8QSy8WpC8wxLbCuwNe0HgNOU-kHwXkYZv4ZHVxxmgpBk0W3MOkO5K-1yvTpyPgbq.jpg?r=c07',
  },
  {
    id: 'SU115',
    title: 'Hamare Zamaane Mein',
    performer: 'Amit Tandon',
    date: 'June 21, 2025',
    venue: 'Indian Habitat Centre, Delhi',
    image: 'https://www.royaloperahouse.in/imagehandler/image-handler.ashx?imagepath=events/poster/hamare-zamaane-mein-311.jpeg',
  },
  {
    id: 'SU107',
    title: 'LOL Fest',
    performer: 'Biswa Kalyan Rath',
    date: 'June 23, 2025',
    venue: 'Phoenix Arena, Hyderabad',
    image: 'https://creativeyatra.com/wp-content/uploads/2019/03/Biswa-live-in-Ahmedabad.jpg',
  },
  {
    id: 'SU108',
    title: 'Laugh Club Night',
    performer: 'Kunal Kamra',
    date: 'June 26, 2025',
    venue: 'Prithvi Theatre, Mumbai',
    image: 'https://www.hindustantimes.com/ht-img/img/2025/03/24/1600x900/Kunal_Kamra_1742810113550_1742838537214.png',
  },
  {
    id: 'SU109',
    title: 'Hoemonal',
    performer: 'Sumukhi Suresh',
    date: 'June 27, 2025',
    venue: 'Ravindra Natya Mandir, Mumbai',
    image: 'https://in.bmscdn.com/events/moviecard/ET00435696.jpg',
  },
  {
    id: 'SU110',
    title: 'Laugh-A-Thon',
    performer: 'Rahul Subramanian',
    date: 'June 29, 2025',
    venue: 'Kala Mandir, Kolkata',
    image: 'https://tickikids.ams3.cdn.digitaloceanspaces.com/z4.cache/gallery/activities/14999/image_60335a5f2e79d2.03112603.jpg',
  },
  {
    id: 'SU112',
    title: 'Laughter Riot',
    performer: 'Gaurav Kapoor',
    date: 'July 2, 2025',
    venue: 'Rangashankara, Bangalore',
    image: 'https://www.premiertickets.co/assets/uploads/2025/04/Gaurav-Kapoor-USA-Canada-Tour-2025.jpg',
  },
  {
    id: 'SU116',
    title: 'Jo Bolta Hai Wahi Hota Hai',
    performer: 'Harsh Gujral',
    date: 'July 5, 2025',
    venue: 'Tagore Theatre, Chandigarh',
    image: 'https://www.premiertickets.co/assets/uploads/2025/05/harsh-gujral-1.jpg',
  },
  
  {
    id: 'SU114',
    title: 'Halwa',
    performer: 'Amit Tandon',
    date: 'July 8, 2025',
    venue: 'Nazrul Mancha, Kolkata',
    image: 'https://uploads.tickettailor.com/c_scale,w_800/v1/production/userfiles/yqu6cozz1hifxqcjzp9c.jpg?_a=BAAAV6DQ',
  },
  
  {
    id: 'SU111',
    title: 'Standup Wave',
    performer: 'Anubhav Singh Bassi',
    date: 'July 9, 2025',
    venue: 'Good Shepherd Auditorium, Bangalore',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDzajQafeFaiA3ULHXK5kFgO4jBTlaRG1YA&s',
  },
  {
    id: 'SU113',
    title: 'Well Trained',
    performer: 'Atul Khatri',
    date: 'July 12, 2025',
    venue: 'Chhabildas Hall, Mumbai',
    image: 'https://atulkhatri.com/uploads/well-trained.jpg',
  },
  {
    id: 'SU117',
    title: 'Kafi Wild Hai',
    performer: 'Appurv Gupta',
    date: 'July 15, 2025',
    venue: 'Kala Mandir Auditorium, Lucknow',
    image: 'https://creativeyatra.com/wp-content/uploads/2019/11/KAAFI-WILD-HAI-Ahmedabad-India-Tour.jpg',
  },
  {
    id: 'SU118',
    title: 'Pannu Yaar',
    performer: 'Gurleen Pannu',
    date: 'July 17, 2025',
    venue: 'Benaras Hindu University Hall, Varanasi',
    image: 'https://d2rvgzn8c26h0v.cloudfront.net/pannu-yaar-by-gurleen-pannu1669995535373.webp',
  },
  {
    id: 'SU119',
    title: 'Tathastu',
    performer: 'Zakir Khan',
    date: 'July 20, 2025',
    venue: 'Sardar Patel Auditorium, Kanpur',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6b2f0c157529461.637b113f40b77.jpg',
  },
  {
    id: 'SU120',
    title: 'Kal Ki Chinta Nahi Karta',
    performer: 'Ravi Gupta',
    date: 'July 22, 2025',
    venue: 'Hindustan College Auditorium, Mathura',
    image: 'https://d2rvgzn8c26h0v.cloudfront.net/kal-ki-chinta-nahi-karta-ft-ravi-gupta1723923080656.webp',
  },
  {
    id: 'SU121',
    title: 'Laugh Nights UP',
    performer: 'Vipul Goyal',
    date: 'July 25, 2025',
    venue: 'Allenhouse Auditorium, Jhansi',
    image: 'https://i.pinimg.com/736x/6b/16/a2/6b16a246ccf2b2450d12a2ee7afd4ed7.jpg',
  },
  {
    id: 'SU122',
    title: 'Market Down Hai',
    performer: 'Gaurav Gupta',
    date: 'July 27, 2025',
    venue: 'SRMS Institute Auditorium, Bareilly',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxCWWivUySdy9Q4r7C1vaob87OImRqpxpAg&s',
  },
  {
    id: 'SU124',
    title: 'Nishant Tanwar Live',
    performer: 'Nishant Tanwar',
    date: 'August 2, 2025',
    venue: 'Central Hall, Gorakhpur',
    image: 'https://in.bmscdn.com/events/moviecard/ET00441229.jpg',
  },
  {
    id: 'SU125',
    title: 'I Found My People!',
    performer: 'Kaneez Surka',
    date: 'August 5, 2025',
    venue: 'Amity University Auditorium, Noida',
    image: 'https://pbs.twimg.com/ext_tw_video_thumb/1589991122994085889/pu/img/mn7TdINWTXD26ox7.jpg',
  },
  {
    id: 'SU126',
    title: 'Toxic',
    performer: 'Abhishek Upmanyu',
    date: 'August 8, 2025',
    venue: 'Dr. B.R. Ambedkar Auditorium, Meerut',
    image: 'https://res.klook.com/image/upload/x_85,y_0,w_425,h_595,c_crop/c_scale,w_360/v1708342858/events_admin/xcz3sgitdv27hapfp77b.jpg',
  },
  // Uttarakhand
{
    id: 'SU127',
    title: 'Interesting Person in Room',
    performer: 'Kenny Sebastian',
    date: 'August 10, 2025',
    venue: 'ONGC Auditorium, Dehradun',
    image: 'https://resizing.flixster.com/G_erNd1I40TE7xGGydS9MogBsps=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I0YmY5MDBkLWY2NDQtNDc2NS05OGQ5LTY0OTcyYzc5YTkwNi5qcGc=',
  },
  {
    id: 'SU128',
    title: 'Oh Hello!',
    performer: 'Rahul Dua',
    date: 'August 12, 2025',
    venue: 'Lakeview Hall, Nainital',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JuusMmjoS2VAg1ame_LT_yzhUvjbO6Nebg&s',
  },
  {
    id: 'SU129',
    title: 'Mussoorie Comic Night',
    performer: 'Zakir Khan',
    date: 'August 14, 2025',
    venue: 'Mussoorie Convention Centre',
    image: 'https://i.pinimg.com/736x/f5/a8/f9/f5a8f9f787a2b4d652c40c452c2ce477.jpg',
  },
  
  // Jharkhand
  {
    id: 'SU130',
    title: 'Ranchi Comedy Express',
    performer: 'Abish Mathew',
    date: 'August 16, 2025',
    venue: 'Ranchi University Auditorium',
    image: 'https://m.media-amazon.com/images/M/MV5BNWM2ZTFmOGItMjA2Yi00MDM3LWJkY2YtNDgwZGZlNDRmMTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 'SU131',
    title: 'Jamshedpur LOL Show',
    performer: 'Gaurav Gupta',
    date: 'August 18, 2025',
    venue: 'Tata Auditorium, Jamshedpur',
    image: 'https://www.premiertickets.co/assets/uploads/2024/05/Gaurav-Gupta.jpg',
  },
  {
    id: 'SU132',
    title: 'Daddy Cool',
    performer: 'Atul Khatri',
    date: 'August 20, 2025',
    venue: 'Indian School of Mines Auditorium',
    image: 'https://i.pinimg.com/736x/d4/e1/5c/d4e15c3b757a539e87cc488c21caabd5.jpg',
  },
  
  // North-East India
  {
    id: 'SU133',
    title: 'Smooth Kullu Smooth',
    performer: 'Aaditya Kulshreshth',
    date: 'August 22, 2025',
    venue: 'Srimanta Sankardev Kalakshetra, Guwahati',
    image: 'https://ugc.production.linktr.ee/df9a35fb-12b5-4073-8aa8-44f1e1e5e0fb_IMG-6736.jpeg',
  },
  {
    id: 'SU134',
    title: 'Bhumi Putra',
    performer: 'Pranit More',
    date: 'August 24, 2025',
    venue: 'Pinewood Auditorium, Shillong',
    image: 'https://in.bmscdn.com/events/moviecard/ET00363549.jpg',
  },
  {
    id: 'SU135',
    title: 'Bas Kar Bassi',
    performer: 'Anubhav Singh Bassi',
    date: 'August 26, 2025',
    venue: 'Cultural Centre Hall, Aizawl',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00307513-zfzjmheamy-landscape.jpg',
  },
  {
    id: 'SU136',
    title: 'Ab Hai Aapki Bari',
    performer: 'Inder Sahani ',
    date: 'August 28, 2025',
    venue: 'Imphal Cultural Complex',
    image: 'https://assets-in.bmscdn.com/nmcms/desktop/media-desktop-meri-wali-alag-hai-by-inder-sahani-2025-4-10-t-9-6-30.jpg',
  },
  
  // Other Indian Cities
  {
    id: 'SU137',
    title: 'Kaksha Gyarvi',
    performer: 'Zakir Khan',
    date: 'August 30, 2025',
    venue: 'Brilliant Convention Centre, Indore',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ed19b5142133489.626110e7b7911.jpg',
  },
  {
    id: 'SU138',
    title: 'Lower Back Pain',
    performer: 'Sapan Verma',
    date: 'September 1, 2025',
    venue: 'MANIT Auditorium, Bhopal',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHbg0QLMbtWGWv8T62dKrO0Jinz6GUw8xKg&s',
  },
  {
    id: 'SU139',
    title: 'Mouth To Mouth',
    performer: 'Max Amini',
    date: 'September 3, 2025',
    venue: 'Town Hall, Jaipur',
    image: 'https://assets.rjassets.com/static/events/2021/09/19/c5dc724565948d1-smaller.jpg',
  },
  {
    id: 'SU140',
    title: 'Patna LOL Circuit',
    performer: 'Vipul Goyal',
    date: 'September 5, 2025',
    venue: 'Gyan Bhawan, Patna',
    image: 'https://in.bmscdn.com/events/moviecard/ET00363307.jpg',
  },
  {
    id: 'SU141',
    title: 'Bhubaneswar Standup Surge',
    performer: 'Appurv Gupta',
    date: 'September 7, 2025',
    venue: 'KIIT Auditorium, Bhubaneswar',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Appurva_Gupta_ji.jpg/960px-Appurva_Gupta_ji.jpg',
  },
  {
    id: 'SU142',
    title: 'Wonder Women',
    performer: 'Anu Menon',
    date: 'September 9, 2025',
    venue: 'Sher-i-Kashmir International Auditorium',
    image: 'https://m.media-amazon.com/images/M/MV5BM2VjYzQ2YjktNzAyZS00YmI1LWFjNmQtMjI5NGViYWM4OWYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 'SU143',
    title: 'Wake N Bake',
    performer: 'Rohan Joshi',
    date: 'September 11, 2025',
    venue: 'Alliance Française Auditorium, Puducherry',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bff86082797117.5d284cefc6310.png',
  },
  {
    id: 'SU144',
    title: 'Papa Yaar',
    performer: 'Zakir Khan',
    date: 'September 13, 2025',
    venue: 'Kalam Convention Centre, Visakhapatnam',
    image: 'https://p9dzm74w.tinifycdn.com/wp-content/uploads/2025/01/Zakir-Khan.png',
  },
  {
    id: 'SU145',
    title: 'Aap Beeti',
    performer: 'Abhishek Walia',
    date: 'September 15, 2025',
    venue: 'Warangal Public Hall',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00313683-lxrmknkltj-landscape.jpg',
  },
  {
    id: 'SU146',
    title: 'Allow Me',
    performer: 'Rahul Dua',
    date: 'September 17, 2025',
    venue: 'Bharathidasan University Hall',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43bgCyzOG2YbeRBabkSbmEeXTBnL1ojdktw&s',
  },
  {
    id: 'SU147',
    title: 'Alive And Vaccinated',
    performer: 'Daniel Fernandes',
    date: 'September 19, 2025',
    venue: 'Anna University Auditorium, Madurai',
    image: 'https://i.ytimg.com/vi/e-k7-XzRdLU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDRShobv7kztKMAwn2ikD6AUreOPQ',
  },
  {
    id: 'SU148',
    title: 'Haq Se Single',
    performer: 'Zakir Khan',
    date: 'September 21, 2025',
    venue: 'PSG Tech Auditorium, Coimbatore',
    image: 'https://m.media-amazon.com/images/M/MV5BMTg1MTg0MGUtYmE3NC00YjgzLWEwNDItYzU1MDQ5MmFiZmMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 'SU149',
    title: 'Goa Giggle Gala',
    performer: 'Kenny Sebastian',
    date: 'September 23, 2025',
    venue: 'Kala Academy, Panaji',
    image: 'https://i.ytimg.com/vi/l2dDbs0qpd8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCMZh34ZJDxkp3xUfUkJO9-MxX8bQ',
  },
  {
    id: 'SU150',
    title: 'Nagpur Standup Spark',
    performer: 'Kunal Kamra',
    date: 'September 25, 2025',
    venue: 'Chitnavis Centre, Nagpur',
    image: 'https://images.assettype.com/nationalherald/2025-04-07/pxnycll3/media-desktop-kunal-kamra-live-0-2024-12-22-t-15-1-59.avif',
  },
  {
    id: 'SU151',
    title: 'Siliguri Standup Night',
    performer: 'Azeem Banatwalla',
    date: 'September 27, 2025',
    venue: 'Dinabandhu Mancha, Siliguri',
    image: 'https://www.punchliners.in/wp-content/uploads/2020/01/whatsapp-image-2020-01-06-at-12.23.15-pm.jpeg',
  },
  {
    id: 'SU155',
    title: 'Is This It?',
    performer: 'Kanan Gill',
    date: 'September 29, 2025',
    venue: 'Umaid Bhawan Auditorium, Jodhpur',
    image: 'https://external-preview.redd.it/clip-from-kanan-gills-latest-standup-special-v0-c2RibDlyMWtpdXFjMVHAgwh93f0CKB7XHPCwG456XSV0RYwm1k3suYEsSBmE.png?width=640&crop=smart&format=pjpg&auto=webp&s=76b402a4d290ab8bf896a51e2d2ec1529ecf298b',
  },
  {
    id: 'SU152',
    title: 'Bareilly LOL Bash',
    performer: 'Vipul Goyal',
    date: 'October 1, 2025',
    venue: 'SRMS Auditorium, Bareilly',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00363307-tnmuecjueh-landscape.jpg',
  },
  {
    id: 'SU153',
    title: 'Gaya Comedy Hour',
    performer: 'Appurv Gupta',
    date: 'October 5, 2025',
    venue: 'Gaya Town Hall, Gaya',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00374389-crhebwvghu-landscape.jpg',
  },
  {
    id: 'SU156',
    title: 'Who Are You?',
    performer: 'Rahul Subramanian',
    date: 'October 8, 2025',
    venue: 'Alliance Française Auditorium, Pondicherry',
    image: 'https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-who-are-you-by-rahul-subramanian-0-2023-10-4-t-9-22-0.jpg',
  }
      
];

const StandupPage = () => {
  return (
    <div className="standup-container">
      <h2 className="standup-heading">🎤 Standup Comedy Shows</h2>
      <div className="standup-list">
        {standupShows.map((show, index) => (
          <div className="standup-card" key={index}>
            <img src={show.image} alt={show.title} className="standup-image" />
            <h3>{show.title}</h3>
            <p><strong>Performer:</strong> {show.performer}</p>
            <p><strong>Date:</strong> {show.date}</p>
            <p><strong>Venue:</strong> {show.venue}</p>
            <Link to="/booking"><button className="movie-button">Book Tickets</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StandupPage;
