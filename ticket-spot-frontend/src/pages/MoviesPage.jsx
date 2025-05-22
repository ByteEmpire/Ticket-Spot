import React from 'react';
import './MoviesPage.css';
import { SiYoutube } from 'react-icons/si';
import { MdTv } from 'react-icons/md';
import { Link } from 'react-router-dom';


const movieData = [
    {
        id: 1,
        title: "3 Idiots",
        genre: "Bollywood, Drama, Comedy",
        rating: "8.4",
        image: "https://www.tallengestore.com/cdn/shop/products/3_Idiots_35dfe421-8426-4556-b410-c033ccedd460.jpg?v=1582192744",
        link: "https://www.youtube.com/watch?v=K0eDlFX9GMc"
      },
      {
        id: 2,
        title: "Inception",
        genre: "Hollywood, Sci-Fi, Thriller",
        rating: "8.8",
        image: "https://wallpapercave.com/wp/fWnWpHj.jpg",
        link: "https://www.youtube.com/watch?v=YoHD9XEInc0"
      },
      {
        id: 3,
        title: "Baahubali: The Beginning",
        genre: "South Indian, Action, Drama",
        rating: "8.1",
        image: "https://rukminim3.flixcart.com/image/850/1000/klqx30w0/poster/g/k/y/medium-baahubali-movie-wall-poster-for-room-with-gloss-original-imagyt8zgtfwzkpn.jpeg?q=90&crop=false",
        link: "https://www.youtube.com/watch?v=sOEg_YZQsTI"
      },
      {
        id: 4,
        title: "Parasite",
        genre: "Korean, Thriller, Drama",
        rating: "8.6",
        image: "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        link: "https://www.youtube.com/watch?v=5xH0HfJHsaY"
      },
      {
        id: 5,
        title: "The Dark Knight",
        genre: "Hollywood, Action, Crime",
        rating: "9.0",
        image: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        link: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
      },
      {
        id: 6,
        title: "Dangal",
        genre: "Bollywood, Sports, Drama",
        rating: "8.4",
        image: "https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/Dangal-1.jpg",
        link: "https://www.youtube.com/watch?v=x_7YlGv9u1g"
      },
      {
        id: 7,
        title: "Interstellar",
        genre: "Hollywood, Sci-Fi, Adventure",
        rating: "8.6",
        image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._SL1500_.jpg",
        link: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
      },
      {
        id: 8,
        title: "KGF Chapter 1",
        genre: "South Indian, Action, Drama",
        rating: "8.2",
        image: "https://wallpapers.com/images/featured/kgf-4k-6fypj1jk472hjau5.jpg",
        link: "https://www.youtube.com/watch?v=6LFsC7F7QQg"
      },
      {
        id: 9,
        title: "Train to Busan",
        genre: "Korean, Horror, Thriller",
        rating: "7.6",
        image: "https://media.themoviedb.org/t/p/w440_and_h660_face/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg",
        link: "https://www.youtube.com/watch?v=lp3GdIh9Kf8"
      },
      {
        id: 10,
        title: "Fight Club",
        genre: "Hollywood, Drama",
        rating: "8.8",
        image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
        link: "https://www.youtube.com/watch?v=SUXWAEX2jlg"
      },
      {
        id: 11,
        title: "Gully Boy",
        genre: "Bollywood, Music, Drama",
        rating: "8.0",
        image: "https://media.themoviedb.org/t/p/w440_and_h660_face/h57EzPdrDvtUkvbTj6ar5yZOPic.jpg",
        link: "https://www.youtube.com/watch?v=slJdi9N2Z88"
      },
      {
        id: 12,
        title: "The Avengers",
        genre: "Hollywood, Action, Sci-Fi",
        rating: "8.0",
        image: "https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/j/v/3/large-newposter7995-wall-poster-a-wallpaper-avengers-poster-original-imaf5z4dcaafahty.jpeg?q=90&crop=false",
        link: "https://www.youtube.com/watch?v=eOrNdBpGMv8"
      },
      {
        id: 13,
        title: "Master",
        genre: "South Indian, Action, Thriller",
        rating: "7.8",
        image: "https://w0.peakpx.com/wallpaper/129/245/HD-wallpaper-master-film-movie.jpg",
        link: "https://www.youtube.com/watch?v=4JdeFsa1k-U"
      },
      {
        id: 14,
        title: "Oldboy",
        genre: "Korean, Thriller, Mystery",
        rating: "8.4",
        image: "https://m.media-amazon.com/images/I/71rNJQ2g-EL._SL1200_.jpg",
        link: "https://www.youtube.com/watch?v/2HkjrJ6IK5E"
      },
      {
        id: 15,
        title: "Gladiator",
        genre: "Hollywood, Action, Drama",
        rating: "8.5",
        image: "https://rukminim2.flixcart.com/image/850/1000/kyvvtzk0/poster/d/x/8/medium-gladiator-matte-finish-poster-urbanprint6311-original-imagbygdgnhbdj8z.jpeg?q=20&crop=false",
        link: "https://www.youtube.com/watch?v=owK1qxDselE"
      },
      {
        id: 16,
        title: "Andhadhun",
        genre: "Bollywood, Thriller, Crime",
        rating: "8.3",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/et00077959-sxnmnaagze-landscape.jpg",
        link: "https://www.youtube.com/watch?v=V2R3JqgC3pQ"
      },
      {
        id: 17,
        title: "Guardians of the Galaxy",
        genre: "Hollywood, Action, Comedy",
        rating: "8.0",
        image: "https://cdn.europosters.eu/image/hp/69188.jpg",
        link: "https://www.youtube.com/watch?v=d96cjJhvlMA"
      },
      {
        id: 18,
        title: "Vikram",
        genre: "South Indian, Action, Thriller",
        rating: "8.4",
        image: "https://wallpapercave.com/wp/wp11049966.jpg",
        link: "https://www.youtube.com/watch?v=JxHj46gBeNw"
      },
      {
        id: 19,
        title: "Snowpiercer",
        genre: "Korean, Sci-Fi, Thriller",
        rating: "7.1",
        image: "https://c8.alamy.com/comp/R2G45D/snowpiercer-year-2013-south-korea-usa-director-bong-joon-ho-movie-poster-ger-R2G45D.jpg",
        link: "https://www.youtube.com/watch?v=0oSJ8kBLoKU"
      },
      {
        id: 20,
        title: "Pulp Fiction",
        genre: "Hollywood, Crime, Drama",
        rating: "8.9",
        image: "https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        link: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
      },
      {
        id: 21,
        title: "Barfi!",
        genre: "Bollywood, Romance, Drama",
        rating: "8.1",
        image: "https://static.toiimg.com/photo/16652585.cms?imgsize=161328",
        link: "https://www.youtube.com/watch?v=2gCPrY6f3pM"
      },
      {
        id: 22,
        title: "Black Panther",
        genre: "Hollywood, Action, Sci-Fi",
        rating: "7.3",
        image: "https://image.tmdb.org/t/p/original/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        link: "https://www.youtube.com/watch?v=xjDjIWPwcPU"
      },
      {
        id: 23,
        title: "Super Deluxe",
        genre: "South Indian, Thriller, Drama",
        rating: "8.4",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/Super_deluxe.png?size=690:388",
        link: "https://www.youtube.com/watch?v=RriSkcMKsxo"
      },
      {
        id: 24,
        title: "The Handmaiden",
        genre: "Korean, Thriller, Romance",
        rating: "8.1",
        image: "https://afinalgirl.wordpress.com/wp-content/uploads/2017/11/handmaiden.jpg",
        link: "https://www.youtube.com/watch?v=C6rP-2vSU8Y"
      },
      {
        id: 25,
        title: "The Matrix",
        genre: "Hollywood, Sci-Fi, Action",
        rating: "8.7",
        image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
        link: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
      },
      {
        id: 26,
        title: "Queen",
        genre: "Bollywood, Drama, Comedy",
        rating: "8.2",
        image: "https://m.media-amazon.com/images/M/MV5BZWU0ZWFhODYtMWE5NC00YzNiLWJlZTctMjFhODhjNDdmZjFmXkEyXkFqcGc@._V1_.jpg",
        link: "https://www.youtube.com/watch?v=LRV5FgJ-Xoo"
      },
      {
        id: 27,
        title: "Avengers: Endgame",
        genre: "Hollywood, Action, Adventure",
        rating: "8.4",
        image: "https://i.pinimg.com/736x/d5/86/19/d58619d1fe5a4ca71c57cb1afde76a0a.jpg",
        link: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
      },
      {
        id: 28,
        title: "RRR",
        genre: "South Indian, Action, Drama",
        rating: "8.1",
        image: "https://m.media-amazon.com/images/I/61XUSNN2vrL._AC_UF1000,1000_QL80_.jpg",
        link: "https://www.youtube.com/watch?v=GNq8pYhYEaE"
      },
      {
        id: 29,
        title: "Memories of Murder",
        genre: "Korean, Crime, Drama",
        rating: "8.1",
        image: "https://m.media-amazon.com/images/M/MV5BYmRjOWE5NmMtYTdkYS00ODFlLWJiMTMtYzE2NDZlZjlkZDQ0XkEyXkFqcGc@._V1_.jpg",
        link: "https://www.youtube.com/watch?v=ak5gAu-6CNw"
      },
      {
        id: 30,
        title: "Joker",
        genre: "Hollywood, Crime, Drama",
        rating: "8.5",
        image: "https://wallpapers.com/images/hd/joker-poster-37j6jfl9mk1jmozx.jpg",
        link: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
      },
      {
        id: 31,
        title: "Tanhaji",
        genre: "Bollywood, Action, History",
        rating: "7.6",
        image: "https://m.media-amazon.com/images/M/MV5BNWI0NmFhM2QtOGU3MC00NmUxLTlkMTItN2E3YzA4MTEwYTc3XkEyXkFqcGc@._V1_.jpg",
        link: "https://www.youtube.com/watch?v=Ho3uY7M-2Io"
      },
      {
        id: 32,
        title: "Spider-Man: No Way Home",
        genre: "Hollywood, Action, Adventure",
        rating: "8.3",
        image: "https://image.tmdb.org/t/p/original/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        link: "https://www.youtube.com/watch?v=JfVOs4VSpmA"
      },
      {
        id: 33,
        title: "Sarkar",
        genre: "South Indian, Action, Crime",
        rating: "7.1",
        image: "https://www.filmibeat.com/wimg/mobi/2018/09/sarkar_1537772068170.jpg",
        link: "https://www.youtube.com/watch?v=7x5XppjVe7g"
      },
      {
        id: 34,
        title: "Burning",
        genre: "Korean, Mystery, Drama",
        rating: "7.5",
        image: "https://cdn.thecultural.me/sob/lee-chang-dongs-burning-2018_ee8aa60db7ec4606b1a145fccee2c8d4_g.jpg",
        link: "https://www.youtube.com/watch?v=Tfghrv0TbzE"
      },
      {
        id: 35,
        title: "Forrest Gump",
        genre: "Hollywood, Drama, Romance",
        rating: "8.8",
        image: "https://wallpapers.com/images/featured/forrest-gump-t7fimpldrjxqk3ns.jpg",
        link: "https://www.youtube.com/watch?v=bLvqoHBptjg"
      },
      {
        id: 36,
        title: "Bajrangi Bhaijaan",
        genre: "Bollywood, Drama, Adventure",
        rating: "8.0",
        image: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8810/1368810-i-23e8b2a73613",
        link: "https://www.youtube.com/watch?v=vyX4Hzh9jC4"
      },
      {
        id: 37,
        title: "Guardians of the Galaxy Vol. 2",
        genre: "Hollywood, Action, Comedy",
        rating: "7.6",
        image: "https://cdn.europosters.eu/image/750/40498.jpg",
        link: "https://www.youtube.com/watch?v=d96cjJhvlMA"
      },
      {
        id: 38,
        title: "Sye Raa Narasimha Reddy",
        genre: "South Indian, Action, History",
        rating: "7.8",
        image: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-70752873/70752873.jpg",
        link: "https://www.youtube.com/watch?v=nzG4j5zEY6Q"
      },
      {
        id: 39,
        title: "Train to Busan Presents: Peninsula",
        genre: "Korean, Action, Horror",
        rating: "5.5",
        image: "https://w0.peakpx.com/wallpaper/540/99/HD-wallpaper-movie-peninsula.jpg",
        link: "https://www.youtube.com/watch?v=97ptWb8Ergc"
      },
      {
        id: 40,
        title: "The Shawshank Redemption",
        genre: "Hollywood, Drama",
        rating: "9.3",
        image: "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        link: "https://www.youtube.com/watch?v=6hB3S9bIaco"
      },
      {
        id: 41,
        title: "Kabir Singh",
        genre: "Bollywood, Drama, Romance",
        rating: "7.1",
        image: "https://www.saamana.com/wp-content/uploads/2019/12/kabir-singh-movie-poster.jpg",
        link: "https://www.youtube.com/watch?v=TyHvyGVs42U"
      },
      {
        id: 42,
        title: "Deadpool",
        genre: "Hollywood, Action, Comedy",
        rating: "8.0",
        image: "https://mrwallpaper.com/images/hd/deadpool-movie-burning-city-poster-o5amzrr70sc1d04k.jpg",
        link: "https://www.youtube.com/watch?v=ONHBaC-pfsk"
      },
      {
        id: 43,
        title: "Baahubali: The Conclusion",
        genre: "South Indian, Action, Drama",
        rating: "8.2",
        image: "https://origin-staticv2.sonyliv.com/0/bahubali_2_12dec_landscape_thumb.jpg",
        link: "https://www.youtube.com/watch?v=Qm3wSyJcVbY"
      },
      {
        id: 44,
        title: "My Sassy Girl",
        genre: "Korean, Romance, Comedy",
        rating: "8.2",
        image: "https://m.media-amazon.com/images/M/MV5BMjBkMDY3NmEtMzZiOC00NTEwLTk1ZDgtYmMxM2I2ZjA3YmM1XkEyXkFqcGc@._V1_.jpg",
        link: "https://www.youtube.com/watch?v=24CkW-KQEfY"
      },
      {
        id: 45,
        title: "The Godfather",
        genre: "Hollywood, Crime, Drama",
        rating: "9.2",
        image: "https://c4.wallpaperflare.com/wallpaper/874/376/908/the-godfather-movies-vito-corleone-wallpaper-preview.jpg",
        link: "https://www.youtube.com/watch?v=sY1S34973zA"
      },
      {
        id: 46,
        title: "Lagaan",
        genre: "Bollywood, Drama, Sports",
        rating: "8.1",
        image: "https://www.tallengestore.com/cdn/shop/products/Lagaan_-_Aamir_Khan_Bollywood_Classic_Hindi_Movie_Poster_1_33011756-1904-4884-ba6b-86e23ae1b7d9_large.jpg?v=1563961400",
        link: "https://www.youtube.com/watch?v=4pkkLBmeb5Y"
      },
      {
        id: 47,
        title: "Iron Man",
        genre: "Hollywood, Action, Sci-Fi",
        rating: "7.9",
        image: "https://e0.pxfuel.com/wallpapers/58/196/desktop-wallpaper-iron-man-movie-poster-iron-man-poster.jpg",
        link: "https://www.youtube.com/watch?v=8hYlB38asDY"
      },
      {
        id: 48,
        title: "Vikram Vedha",
        genre: "South Indian, Thriller, Crime",
        rating: "8.3",
        image: "https://film-favorite.com/wp-content/uploads/2024/07/ob9YxdzRu5lfKgz0PNrlL45dorf.jpg",
        link: "https://www.youtube.com/watch?v=bv9EETn4zgc"
      },
      {
        id: 49,
        title: "Old Guard",
        genre: "Hollywood, Action, Fantasy",
        rating: "6.6",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5a6f8799979961.5f12c7bda8483.jpg",
        link: "https://www.youtube.com/watch?v=aK-X2d0lQjk"
      },
      {
        id: 50,
        title: "Secretly Greatly",
        genre: "Korean, Action, Comedy",
        rating: "7.3",
        image: "https://i.pinimg.com/736x/b4/e4/f9/b4e4f9435d70eac2a90430b206cedd57.jpg",
        link: "https://www.youtube.com/watch?v=5SDV7n7p1Rs"
      },
      {
        id: 51,
        title: "Se7en",
        genre: "Hollywood, Thriller, Crime, Dark",
        rating: "8.6",
        image: "https://m.media-amazon.com/images/I/51K8ouYrHeL._AC_SY679_.jpg",
        link: "https://www.youtube.com/watch?v=znmZoVkCjpI"
      },
      {
        id: 52,
        title: "Gangs of Wasseypur",
        genre: "Bollywood, Crime, Drama, Dark",
        rating: "8.2",
        image: "https://tanulthakur.wordpress.com/wp-content/uploads/2012/07/gangs-of-wasseypur-i.jpg",
        link: "https://www.youtube.com/watch?v=fk42NRsHmRw"
      }      
];

const MoviesPage = () => {
  return (
    <div className="movies-container">
      <h1 className="movies-heading">Featured Movies <MdTv style={{ color: '#5eead4', verticalAlign: 'middle', marginLeft: '8px' }} />
      </h1>
      <div className="movies-list">
        {movieData.map(({ id, title, genre, rating, image, link }) => (
          <div key={id} className="movie-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={title} className="movie-image" />
            </a>
            <h3 className="movie-title">{title}</h3>
            <p className="movie-genre">Genre: {genre}</p>
            <p className="movie-rating">IMDb: ⭐ {rating}</p>
            <div className="movie-buttons">
              <a href={link} target="_blank" rel="noopener noreferrer" className="youtube-icon" title="Watch Trailer">
                <SiYoutube size={28} color="red" />
              </a>
              <Link to="/booking">
                <button className="movie-button">Book Tickets</button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
