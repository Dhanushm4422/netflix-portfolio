import React from 'react';
import './Music.css';
import s1 from '../images/s1.png'; 
import s2 from '../images/s2.png'; 
import s3 from '../images/s3.png'; 
import s4 from '../images/s4.png'; 
import s5 from '../images/s5.png'; 

const favoriteGenres = ["Hip-Hop", "R&B", "Rap", "Trap"];
const favoriteAlbums = [
  { title: "Starboy", artist: "The Weeknd", imgSrc: s1 },
  { title: "The Hills", artist: "The Weeknd", imgSrc: s2 },
  { title: "Butterfly Effect", artist: "Travis Scott", imgSrc: s3 },
  { title: "Sicko Mode", artist: "Travis Scott", imgSrc: s4 },
  { title: "Peekaboo", artist: "Kendrick Lamar", imgSrc: s5 },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>“Music is the universal language of mankind.”🎸</p>
      </div>

      <div className="genre-section">
        <h3>Explore by Genre</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Songs</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;

