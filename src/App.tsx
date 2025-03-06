import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import WorkPermit from './pages/WorkPermit';
import WorkExperience from './pages/WorkExperience';
import Recommendations from './pages/Recommendations';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
import Music from './pages/Music';
import Reading from './pages/Reading';
import Blogs from './pages/Blogs';
import Certifications from './pages/Certifications';
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/profile/")) {
      // Restore scroll position for the profile page
      const savedScrollPosition = sessionStorage.getItem("profileScroll");
      if (savedScrollPosition) {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }
    } else {
      // Save scroll position before leaving the profile page
      if (sessionStorage.getItem("profileScroll") === null) {
        sessionStorage.setItem("profileScroll", "0");
      }
      window.scrollTo(0, 0); // Scroll to top for all other pages
    }

    // Save scroll position when leaving profile page
    const handleScroll = () => {
      if (pathname.startsWith("/profile/")) {
        sessionStorage.setItem("profileScroll", window.scrollY.toString());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<NetflixTitle />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
        <Route path="/work-permit" element={<Layout><WorkPermit /></Layout>} />
        <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
        <Route path="/recommendations" element={<Layout><Recommendations /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
        <Route path="/music" element={<Layout><Music /></Layout>} />
        <Route path="/reading" element={<Layout><Reading /></Layout>} />
        <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
        <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
      </Routes>
      <Analytics /> 
    </>
  );
};

export default App;
