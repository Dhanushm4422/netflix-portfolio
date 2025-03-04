import React from 'react';
import './Reading.css';
import lifeTriumphant from '../images/b1.webp';

const books = [
 
  {
    title: "The Life Triumphant: Mastering the Heart and Mind",
    author: "James Allen",
    imgSrc: lifeTriumphant,
    description: "A powerful book on self-mastery, personal growth, and mental discipline.",
  }
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Book That Shaped My Journey</h2>
      <p className="reading-intro">
        This book has influenced my perspectives, motivation, and self-growth.
      </p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div 
            key={index} 
            className="book-card" 
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
