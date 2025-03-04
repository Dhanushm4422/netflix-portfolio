import React from 'react';
import './Blogs.css';
import { FaMedium } from 'react-icons/fa';

const blogs = [
  {
    title: "Breaking into Tech: My Journey and Key Lessons for Aspiring Developers",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@dhanushm4422/breaking-into-tech-my-journey-and-key-lessons-for-aspiring-developers-58d1cdbf5f4b",
    description: "My journey into software development, key lessons learned, and advice for aspiring developers.",
  }
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">
        A collection of my thoughts and tutorials on software development.
      </p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a 
            href={blog.link} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="blog-card" 
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
