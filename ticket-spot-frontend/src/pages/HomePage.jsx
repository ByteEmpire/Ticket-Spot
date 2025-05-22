import React from 'react';
import { motion } from 'framer-motion';
import { FaTicketAlt, FaArrowRight, FaHeart, FaSearch } from 'react-icons/fa';
import './HomePage.css';

const shows = [
  {
    id: 'SH001',
    category: 'Movie',
    title: 'Sitaare Zameen Par',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00444869-qwclxblpbz-landscape.jpg',
  },
  { id: 'SH013',
  category: 'Concert',
  title: 'Taylor Swift Eras Tour',
  image: 'https://www.edmondtownhall.org/wp-content/uploads/2_Landscape-Hero-Art_16x9_3000-scaled.jpg'
},
  {
    id: 'SH007',
    category: 'Concert',
    title: 'Dil-Luminati Tour',
    image: 'https://newspaperads.ads2publish.com/wp-content/uploads/2024/11/daljit-dosanjh-dil-luminati-tour-india-the-biggest-concert-of-the-year-ad-times-of-india-ahmedabad-12-11-2024.jpg',
  },
  {
    id: 'SH003',
    category: 'Movie',
    title: 'Mission: Impossible',
    image: 'https://images8.alphacoders.com/133/1337616.jpg',
  },
  {
    id: 'SH004',
    category: 'Movie',
    title: 'Daredevil: Born Again',
    image: 'https://4kwallpapers.com/images/walls/thumbs_2t/22121.jpg',
  },
  {
    id: 'SH005',
    category: 'Stand-up',
    title: 'Delulu Express',
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202503/trailer-of-zakir-khans-stand-up-special--delulu-express--unveiled-240213722-16x9_0.jpeg?VersionId=JYcCbBCi7t783GAXBwr0ZVzg6RvFeffU&size=690:388',
  },
  {
    id: 'SH006',
    category: 'Movie',
    title: 'Jaat',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/jaat-et00416952-1733732596.jpg',
  },
  {
    id: 'SH008',
    category: 'Movie',
    title: 'Final destination - 5',
    image: 'https://c4.wallpaperflare.com/wallpaper/777/957/125/final-destination-5-hd-wallpaper-preview.jpg',
  },
  {
    id: 'SH009',
    category: 'Movie',
    title: 'Crazxy',
    image: 'https://assets.thehansindia.com/h-upload/2025/02/04/1520292-crazxy.webp',
  },
  {
    id: 'SH010',
    category: 'Concert',
    title: 'Dua Lipa Concert',
    image: 'https://www.zingbus.com/blog/wp-content/uploads/2024/11/a943ddbfac31fa03748df27d2744e5ad1724334096.png',
  },
  { id: 'SH011',
  category: 'Movie',
  title: 'Sikandar',
  image: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00394804-zcqclasxrt-landscape.jpg'
},
{ id: 'SH012',
  category: 'Stand-up',
  title: 'Bas Kar Bassi',
  image: 'https://images.cnbctv18.com/wp-content/uploads/2023/02/Bassi.jpg'
},
{
  id: 'SH002',
  category: 'Movie',
  title: 'Chhaava',
  image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/chhaava-et00408691-1737623374.jpg',
},
{ id: 'SH014',
  category: 'Event',
  title: 'Comic Con India 2025',
  image: 'https://i.pinimg.com/736x/fb/b9/a6/fbb9a6a1e91d231735cbae9b4f9db066.jpg'
},
{ id: 'SH015',
  category: 'Movie',
  title: 'Oppenheimer',
  image: 'https://thecollision.org/wp-content/uploads/2023/07/2-2.jpeg'
},
{ id: 'SH016',
  category: 'Stand-up',
  title: 'Zakir Khan: Tathastu',
  image: 'https://i.ytimg.com/vi/PD5GiSewhBs/maxresdefault.jpg'
},
{ id: 'SH017',
  category: 'Concert',
  title: 'The Weeknd: After Hours Tour',
  image: 'https://wallpapers.com/images/hd/the-weeknd-after-hours-3000-x-3000-wallpaper-yocnnl0wdmg9ewo8.jpg'
},
{ id: 'SH018',
  category: 'Event',
  title: 'Sunburn Festival Goa',
  image: 'https://media.assettype.com/gomantaktimes%2Fimport%2Fs3fs-public%2Fnews-story%2Fcover-images%2F0sunburngoa.jpg?w=480&dpr=2&auto=format%2Ccompress&fit=max&q=85'
},
{ id: 'SH019',
  category: 'Movie',
  title: 'Kesari Chapter 2',
  image: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00439158-tynvgbjqby-landscape.jpg'
},
{ id: 'SH020',
  category: 'Stand-up',
  title: 'Most Interesting Person',
  image: 'https://sm.mashable.com/t/mashable_in/photo/default/kenny-sebastian-the-most-interesting-person-in-the-room-revi_vd8z.1248.jpg'
},
{ id: 'SH021',
  category: 'Concert',
  title: 'Arijit Singh Live Mumbai',
  image: 'https://wallpapers.com/images/hd/arijit-singh-playing-an-electric-guitar-stprau9pnsx1spxy.jpg'
},
{ id: 'SH022',
  category: 'Event',
  title: 'India Art Fair 2025',
  image: 'https://lemillindia.com/cdn/shop/articles/INDIA_ART_FAIR_2025-2_d1704fde-a599-4be3-8364-a9fe2421a3f5.png?v=1743760578'
},
{ id: 'SH023',
  category: 'Movie',
  title: 'Ground Zero',
  image: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00439759-cwqrffnnrg-landscape.jpg'
},
{ id: 'SH024',
  category: 'Stand-up',
  title: 'Vir Das: Ldingan',
  image: 'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZrZAop4wsFpmyEk5AolsAA35Y7kGDIhDBYoCIKx5xQcXYpCdxKd-a6IN5GcSSVzC6Fa3i-yWxcceSfDsUpatN-XrhR4nUIY4Q3Ub9bzAn0tNObB3WuE4FWk-7w_u7i5cGEHNQ.jpg?r=744'
},
{ id: 'SH025',
  category: 'Concert',
  title: 'BTS World Tour',
  image: 'https://c4.wallpaperflare.com/wallpaper/229/551/811/bts-fake-j-hope-jimin-wallpaper-preview.jpg'
},
{ id: 'SH026',
  category: 'Event',
  title: 'Google I/O 2025',
  image: 'https://io.google/2025/assets/images/io25-og-image.jpg'
},
{ id: 'SH027',
  category: 'Movie',
  title: 'Salaar',
  image: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00301886-zufnwksmak-landscape.jpg'
},
{ id: 'SH028',
  category: 'Stand-up',
  title: 'Jealous of Sabziwala',
  image: 'https://i.ytimg.com/vi/IcAV5qiko8M/maxresdefault.jpg'
}
];

function HomePage({ onSearchIconClick }) {
  return (
    <div className="home-container">
      <motion.div 
        className="shows-section"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
        }}
      >
        <motion.h2 
          className="section-heading"
          variants={{
            hidden: { y: -30, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: { type: 'spring', stiffness: 100 }
            }
          }}
        >
          🎭 Featured Shows
          <motion.span 
            className="floating-icon"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            ✨
          </motion.span>
        </motion.h2>

        <motion.div className="shows-grid">
          {shows.map((show) => (
            <motion.div 
              key={show.id}
              className="show-card"
              variants={{
                hidden: { y: 50, opacity: 0 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 80,
                    damping: 15
                  }
                },
                hover: {
                  y: -10,
                  scale: 1.03,
                  transition: { type: 'spring', stiffness: 400, damping: 10 }
                }
              }}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="image-container"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={show.image} 
                  alt={show.title} 
                  className="show-image" 
                />
                <motion.button 
                  className="favorite-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaHeart />
                </motion.button>
              </motion.div>
              
              <h3 className="show-title">{show.title}</h3>
              <p className="show-id">{show.category}</p>
              
              <motion.button 
                className="book-button"
                variants={{
                  hover: {
                    scale: 1.05,
                    boxShadow: '0px 8px 25px rgba(0, 123, 255, 0.4)',
                    transition: {
                      yoyo: Infinity,
                      duration: 0.3
                    }
                  },
                  tap: {
                    scale: 0.95
                  }
                }}
                whileHover="hover"
                whileTap="tap"
              >
                <FaTicketAlt /> Book Now <FaArrowRight />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Action Button */}
        <motion.button 
          className="fab"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -15, 0],
            boxShadow: [
              '0 10px 25px rgba(0, 123, 255, 0.4)',
              '0 15px 30px rgba(0, 123, 255, 0.6)',
              '0 10px 25px rgba(0, 123, 255, 0.4)'
            ]
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            },
            boxShadow: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
          onClick={onSearchIconClick}
          aria-label="Focus Search Bar"
        >
          <FaSearch />
        </motion.button>
      </motion.div>
    </div>
  );
}

export default HomePage;
