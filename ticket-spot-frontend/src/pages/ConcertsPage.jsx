import React from "react";
import { SiYoutube } from "react-icons/si";
import './ConcertsPage.css';
import { Link } from 'react-router-dom';

const concertsData = [
  {
    id: 4,
    title: "Coldplay World Tour",
    artist: "Coldplay",
    date: "June 22, 2025",
    time: "7:00 PM",
    venue: "Wembley Stadium, London",
    image: "https://m.media-amazon.com/images/I/71yQ-Nl-h5L.jpg",
    link: "https://www.youtube.com/watch?v=nDcRMr2ZHEQ"
  },
  {
    id: 2,
    title: "Dastakein",
    artist: "Anuv Jain",
    date: "July 13, 2025",
    time: "7:30 PM",
    venue: "Pune Festival Grounds",
    image: "https://images.mid-day.com/images/images/2023/oct/anuv-jain_d_d.jpg",
    link: "https://www.youtube.com/watch?v=cqK4AKQB53c"
  },
  {
    id: 3,
    title: "Arijit Singh Live",
    artist: "Arijit Singh",
    date: "August 10, 2025",
    time: "8:00 PM",
    venue: "Mumbai Arena",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/93f6c2198581309.Y3JvcCwxNDE0LDExMDYsMCw0NDg.jpg",
    link: "https://www.youtube.com/watch?v=A0LX3WO_rPw"
  },
  {
    id: 1,
    title: "Sunburn Music Festival",
    artist: "DJ Snake",
    date: "September 5, 2025",
    time: "6:00 PM",
    venue: "Goa Beach Grounds",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLpP9L3EeTcTHMFP7JiQgHjKLNrmY_M7ywA&s",
    link: "https://www.youtube.com/watch?v=MPHbe9VoSQA"
  },
  
  {
    id: 5,
    title: "Indie Vibes",
    artist: "Prateek Kuhad",
    date: "July 1, 2025",
    time: "7:00 PM",
    venue: "Pune - Shaniwar Wada",
    image: "https://images.mid-day.com/images/images/2024/jul/pratrrek_d.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=cqK4AKQB53c"
  },
  {
    id: 6,
    title: "Electronic Blast",
    artist: "Zedd",
    date: "July 5, 2025",
    time: "9:30 PM",
    venue: "Goa - Baga Beach",
    image: "https://c4.wallpaperflare.com/wallpaper/558/964/933/zedd-house-music-music-musician-wallpaper-preview.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=ea7l9HHdb3g"
  },
  {
    id: 7,
    title: "Sufi Soul",
    artist: "Sonu Nigam",
    date: "July 10, 2025",
    time: "8:00 PM",
    venue: "Hyderabad - Shilparamam",
    image: "https://cdn.culturecrossroads.ca/posts/sonu-nigam-performing-live-is-experiencing-magic-in-real-time/images/img_9729_hub9b75c980d54096c771829150b3a1b0b_1672950_800x0_resize_q50_h2_lanczos.webp",
    youtubeLink: "https://www.youtube.com/watch?v=9kP24NIf_FU"
  },
  {
    id: 8,
    title: "Pop Night",
    artist: "Taylor Swift",
    date: "July 15, 2025",
    time: "8:30 PM",
    venue: "Delhi - Jawaharlal Nehru Stadium",
    image: "https://wallpapers.com/images/featured/taylor-swift-eras-tour-xx87fwbcwnzl4ymg.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=3tmd-ClpJxA"
  },
  {
    id: 9,
    title: "Metal Madness",
    artist: "Metallica",
    date: "July 20, 2025",
    time: "9:00 PM",
    venue: "Mumbai - Mahalaxmi Racecourse",
    image: "https://m.media-amazon.com/images/I/61rC85kEgDL.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=CD-E-LDc384"
  },
  {
    id: 10,
    title: "Soulful Strings",
    artist: "Shankar Mahadevan",
    date: "July 25, 2025",
    time: "7:00 PM",
    venue: "Kolkata - Victoria Memorial",
    image: "https://blogbox.indianeagle.com/wp-content/uploads/2017/04/Shankar-Mahadevan-live-concert.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=pVZp0VsC8Ic"
  },
  {
    id: 11,
    title: "Be-Misaal",
    artist: "Hariharan",
    date: "July 30, 2025",
    time: "9:30 PM",
    venue: "Goa - Anjuna Beach",
    image: "https://blackhattalent.com/wp-content/uploads/2023/07/356863630_814045443419014_5652320551585856363_n.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=eL66rtV81z8"
  },
  {
    id: 12,
    title: "Rock Legends",
    artist: "Foo Fighters",
    date: "August 3, 2025",
    time: "8:30 PM",
    venue: "Bangalore - Cubbon Park",
    image: "https://m.media-amazon.com/images/I/71Q+xccreWL._AC_UF894,1000_QL80_.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=3-l1jR8QGZc"
  },
  {
    id: 13,
    title: "Sukoon -ε- Sanam",
    artist: "Sanam",
    date: "August 8, 2025",
    time: "7:00 PM",
    venue: "Jaipur - Amer Fort Grounds",
    image: "https://wallpapercave.com/wp/wp10864927.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=ZiC78VGzKrY"
  },
  {
    id: 14,
    title: "EDM Extravaganza",
    artist: "Martin Garrix",
    date: "August 12, 2025",
    time: "9:00 PM",
    venue: "Delhi - Hauz Khas",
    image: "https://m.media-amazon.com/images/I/815CcYqC+AL._AC_UF894,1000_QL80_.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=TGZoL39UcKE"
  },
  {
    id: 15,
    title: "Indie Acoustic",
    artist: "Vilen",
    date: "August 18, 2025",
    time: "7:00 PM",
    venue: "Chennai - Besant Nagar Beach",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUCfsMMcczvGy7biD7pxNSEZB2yGVYB1pNg&s",
    youtubeLink: "https://www.youtube.com/watch?v=xY8oZl7tFn8"
  },
  {
    id: 16,
    title: "Jazz Fusion",
    artist: "Snarky Puppy",
    date: "August 22, 2025",
    time: "7:30 PM",
    venue: "Mumbai - Bandra Amphitheater",
    image: "https://i.pinimg.com/236x/cc/15/45/cc154525cc20bcd8d42ba7d8d42f237e.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=9N4qP4-TXcM"
  },
  {
    id: 17,
    title: "Pop Rock",
    artist: "Coldplay",
    date: "August 28, 2025",
    time: "8:00 PM",
    venue: "Kolkata - Salt Lake Stadium",
    image: "https://m.media-amazon.com/images/I/81QXLj4Y0hL.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dvgZkm1xWPE"
  },
  {
    id: 18,
    title: "Fusion Festival",
    artist: "Anoushka Shankar",
    date: "September 2, 2025",
    time: "7:30 PM",
    venue: "Delhi - Garden of Five Senses",
    image: "https://live.staticflickr.com/652/32670538226_068f98976a_b.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=Oa6y8TSCdRE"
  },
  {
    id: 19,
    title: "Electronic Wave",
    artist: "Kygo",
    date: "September 6, 2025",
    time: "9:00 PM",
    venue: "Goa - Vagator Beach",
    image: "https://karlobag.eu/images/upload/ekzc6.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=3tTCH56ySO0"
  },
  {
    id: 20,
    title: "Indie Night",
    artist: "Nucleya",
    date: "September 10, 2025",
    time: "8:00 PM",
    venue: "Bangalore - Indiranagar",
    image: "https://i.pinimg.com/736x/23/fa/f2/23faf2e06b9d97b90acc593e6903cac4.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=xZH_S3iAyHo"
  },
  // 20 more International & Indian artists with youtubeLinks
  {
    id: 21,
    title: "Pop Sensation",
    artist: "Adele",
    date: "September 15, 2025",
    time: "8:30 PM",
    venue: "Delhi - JLN Stadium",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/5b8414159177289.Y3JvcCw0MzI5LDMzODYsNTM1LDQxNw.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=YQHsXMglC9A"
  },
  {
    id: 22,
    title: "Rock Legends",
    artist: "Red Hot Chili Peppers",
    date: "September 20, 2025",
    time: "9:00 PM",
    venue: "Mumbai - Mahalaxmi Racecourse",
    image: "https://wallpapers.com/images/hd/red-hot-chili-peppers-24mtul6ef61cv3m8.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=3Cev6Z2uP_o"
  },
  {
    id: 23,
    title: "Hip Hop Night",
    artist: "Kendrick Lamar",
    date: "September 25, 2025",
    time: "9:30 PM",
    venue: "Bangalore - MLR Convention Center",
    image: "https://store.friendlyarcticprinting.com/cdn/shop/products/Kendrick_Lamar_ORANGE-poster_1_copy_2400x.jpg?v=1553625706",
    youtubeLink: "https://www.youtube.com/watch?v=H-h5d9O84u8"
  },
  {
    id: 24,
    title: "R&B Vibes",
    artist: "The Weeknd",
    date: "September 30, 2025",
    time: "8:00 PM",
    venue: "Hyderabad - Shilparamam",
    image: "https://posterwa.com/cdn/shop/products/WEEKND8_png.jpg?v=1682618822",
    youtubeLink: "https://www.youtube.com/watch?v=4NRXx6U8ABQ"
  },
  {
    id: 25,
    title: "Pop Star",
    artist: "Billie Eilish",
    date: "October 5, 2025",
    time: "8:00 PM",
    venue: "Chennai - YMCA Grounds",
    image: "https://www.shutterstock.com/image-photo/1618-augustus-2019-lowlands-festival-600nw-1488792806.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=DyDfgMOUjCI"
  },
  {
    id: 26,
    title: "Rock Blast",
    artist: "Muse",
    date: "October 10, 2025",
    time: "9:00 PM",
    venue: "Pune - Shaniwar Wada",
    image: "https://wallpapercat.com/w/full/2/d/7/1382929-3400x2000-desktop-hd-muse-band-wallpaper-image.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=iyQv7LPJvL4"
  },
  {
    id: 27,
    title: "Latin Heat",
    artist: "J Balvin",
    date: "October 15, 2025",
    time: "8:30 PM",
    venue: "Goa - Baga Beach",
    image: "https://wallpapercat.com/w/full/3/a/6/799465-2500x1667-desktop-hd-j-balvin-wallpaper.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=NUsoVlDFqZg"
  },
  {
    id: 28,
    title: "Soul Groove",
    artist: "John Legend",
    date: "October 20, 2025",
    time: "7:30 PM",
    venue: "Delhi - India Habitat Center",
    image: "https://wallpapercat.com/w/full/3/c/7/165238-1920x1080-desktop-1080p-john-legend-wallpaper-photo.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=BiGmEj2xfNc"
  },
  {
    id: 29,
    title: "Electro Pop",
    artist: "Dua Lipa",
    date: "October 25, 2025",
    time: "8:00 PM",
    venue: "Mumbai - NCPA",
    image: "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/11/09/59d86d9e-01f8-4844-910a-d2ba1f4f1bad_60fdb153.jpg?itok=D6zG-kah&v=1731116827",
    youtubeLink: "https://www.youtube.com/watch?v=oygrmJFKYZY"
  },
  {
    id: 30,
    title: "Country Night",
    artist: "Kacey Musgraves",
    date: "October 30, 2025",
    time: "7:00 PM",
    venue: "Bangalore - Lalbagh Botanical Garden",
    image: "https://wallpapers.com/images/hd/american-country-music-star-kacey-musgraves-zg8ikk6f1oi3k2gv.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=ha9G1RGvA3c"
  },
  {
    id: 31,
    title: "Blues Evening",
    artist: "Joe Bonamassa",
    date: "November 4, 2025",
    time: "7:30 PM",
    venue: "Chennai - Music Academy",
    image: "https://c4.wallpaperflare.com/wallpaper/882/1003/820/blues-bonamassa-concert-guitar-wallpaper-preview.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=EuQkPbWeN1k"
  },
  {
    id: 32,
    title: "Indie Rock",
    artist: "Arctic Monkeys",
    date: "November 8, 2025",
    time: "8:00 PM",
    venue: "Delhi - Jawaharlal Nehru Stadium",
    image: "https://r1.ilikewallpaper.net/pic/201505/Arctic_Monkeys_iPad_Wallaper_HD_640.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=rj6aHmwX8jw"
  },
  {
    id: 33,
    title: "Pop Festival",
    artist: "Shawn Mendes",
    date: "November 12, 2025",
    time: "8:00 PM",
    venue: "Mumbai - Mahalaxmi Racecourse",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtgmwx8ZUrMW0Yu6ion-iCt2Sntt1rU_0VA&s",
    youtubeLink: "https://www.youtube.com/watch?v=SYqD-K0Yp2I"
  },
  {
    id: 34,
    title: "Alternative Rock",
    artist: "Paramore",
    date: "November 17, 2025",
    time: "8:30 PM",
    venue: "Bangalore - Cubbon Park",
    image: "https://rukminim2.flixcart.com/image/850/1000/jqmnv680/poster/3/m/h/medium-pwl-paramore-band-wall-poster-13-19-inches-matte-finish-original-imaek7n6fffedtqb.jpeg?q=20&crop=false",
    youtubeLink: "https://www.youtube.com/watch?v=9k0tT0ukWUE"
  },
  {
    id: 35,
    title: "Pop Rock",
    artist: "OneRepublic",
    date: "November 22, 2025",
    time: "8:00 PM",
    venue: "Hyderabad - Shilparamam",
    image: "https://m.media-amazon.com/images/I/81dbNHZytrL._AC_UF894,1000_QL80_.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=rYEDA3JcQqw"
  },
  {
    id: 36,
    title: "Soulful Sounds",
    artist: "Alicia Keys",
    date: "November 27, 2025",
    time: "7:30 PM",
    venue: "Kolkata - Victoria Memorial",
    image: "https://publictheater.org/link/89551d3c4d67427eb9fd428b87a40729.aspx",
    youtubeLink: "https://www.youtube.com/watch?v=J5YPLtVXPAw"
  },
  {
    id: 37,
    title: "EDM Night",
    artist: "David Guetta",
    date: "December 2, 2025",
    time: "9:00 PM",
    venue: "Goa - Anjuna Beach",
    image: "https://wallpapercat.com/w/full/7/3/f/87640-1920x1080-desktop-full-hd-david-guetta-background-photo.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=AIe3cAxJUuY"
  },
  {
    id: 38,
    title: "Rock Evening",
    artist: "The Killers",
    date: "December 7, 2025",
    time: "8:00 PM",
    venue: "Delhi - India Habitat Center",
    image: "https://cdn10.bigcommerce.com/s-fhbp5/products/4372/images/10224/DSC_7518__83074.1627100461.1280.1280.JPG?c=2",
    youtubeLink: "https://www.youtube.com/watch?v=YIF4K78HL9A"
  },
  {
    id: 39,
    title: "Pop Rock",
    artist: "Miley Cyrus",
    date: "December 12, 2025",
    time: "8:00 PM",
    venue: "Mumbai - NCPA",
    image: "https://pbs.twimg.com/media/FO9_d9AXEAgdYtI.jpg:large",
    youtubeLink: "https://www.youtube.com/watch?v=QbXlJJLXoV4"
  },
  {
    id: 40,
    title: "Indie Pop",
    artist: "Hozier",
    date: "December 17, 2025",
    time: "7:30 PM",
    venue: "Bangalore - Indiranagar",
    image: "https://images.sk-static.com/images/media/img/col6/20230316-103041-780254.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=8sbWfuVfkp8"
  },
  {
    id: 41,
    title: "Pop Night",
    artist: "Demi Lovato",
    date: "December 22, 2025",
    time: "8:00 PM",
    venue: "Hyderabad - Shilparamam",
    image: "https://www.shutterstock.com/editorial/image-editorial/ObD1May5N1D9I649MDgxOQ==/demi-lovato-440nw-8268808h.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=CV9KNMJ7yZw"
  },
  {
    id: 42,
    title: "Rock Festival",
    artist: "Green Day",
    date: "December 27, 2025",
    time: "9:00 PM",
    venue: "Chennai - YMCA Grounds",
    image: "https://rukminim2.flixcart.com/image/850/1000/jc0ttow0-1/poster/f/z/p/large-wall-poster-green-day-band-poster-print-on-36x24-inches-original-imafyj8fbjhmtfxb.jpeg?q=90&crop=false",
    youtubeLink: "https://www.youtube.com/watch?v=3b7G4ja6v7w"
  },
  {
    id: 43,
    title: "Pop Hits",
    artist: "Bruno Mars",
    date: "January 1, 2026",
    time: "8:30 PM",
    venue: "Delhi - JLN Stadium",
    image: "https://images.gmanews.tv/webpics/2023/04/Screenshot_2023-04-20_at_11_2023_04_20_11_02_08.png",
    youtubeLink: "https://www.youtube.com/watch?v=UqyT8IEBkvY"
  },
  {
    id: 44,
    title: "Wonder World Tour",
    artist: "Shawn Mendes",
    time: "7:30 PM",
    date: "December 3, 2025",
    venue: "Delhi - Indira Gandhi Indoor Stadium",
    image: "https://wallpapers.com/images/hd/shawn-mendes-orange-collage-yp9a0iufmljv9ird.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=lY2yjAdbvdQ"
  }
  
];

const ConcertsPage = () => {
  return (
    <div className="concerts-container">
      <h1 className="concerts-heading">🎵 Upcoming Concerts</h1>
      <div className="concerts-list">
        {concertsData.map(({ id, title, artist, date, time, venue, image, link }) => (
          <div key={id} className="concert-card">
            <img src={image} alt={title} className="concert-image" />
            <div className="concert-info">
              <h2 className="concert-title">{title}</h2>
              <p className="concert-text">Artist: {artist}</p>
              <p className="concert-text">Date: {date}</p>
              <p className="concert-text">Time: {time}</p>
              <p className="concert-text">Venue: {venue}</p>
              <div className="concert-actions">
                <a href={link} target="_blank" rel="noopener noreferrer" className="youtube-icon">
                  <SiYoutube />
                </a>
                <Link to="/booking">
                  <button className="movie-button">Book Tickets</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcertsPage;