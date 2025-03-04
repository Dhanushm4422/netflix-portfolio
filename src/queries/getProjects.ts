import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';
import p7 from '../images/p7.png';
import p8 from '../images/p8.png';
import p9 from '../images/p9.png';
import p10 from '../images/p10.png';

export async function getProjects() {
  return [
    { title: "E-Commerce Site For Agro Centre", description: "Developed a Web-based application with e-commerce functionality and an admin panel.", techUsed: "React, Node.js, MongoDB, Express.js", image: { url: p1 } },
    { title: "E-Commerce Site For High End Earphones", description: "Developed a web-based application with e-commerce functionality.", techUsed: "Bootstrap, Node.js, MongoDB", image: { url: p2 } },
    { title: "KEC Vehicle Maintenance Software For Admin", description: "Developed a system to manage vehicle maintenance details, improving operational efficiency.", techUsed: "PHP, MySQL", image: { url: p3 } },
    { title: "Solar Panel Installation System", description: "Developed a dashboard in ThingBoard IoT platform for monitoring solar panel installations.", techUsed: "Angular, JavaScript, HTML, CSS, Bootstrap, AWS, ThingBoard", image: { url: p4 } },
    { title: "Live Bus Tracking System", description: "Developed a real-time bus tracking system leveraging Mapbox and JavaScript, seamlessly integrating MongoDB for dynamic data retrieval.", techUsed: "Vanilla JS, MongoDB", image: { url: p5 } },
    { title: "Coding Club Website", description: "Designed and developed a website tailored for the coding club at CT-PG.", techUsed: "HTML, CSS, Bootstrap, JavaScript", image: { url: p6 } },
    { title: "Mario Club Website", description: "Designed a captivating front-end interface for the Mario Club website using only HTML and CSS. The layout is fully responsive and visually appealing.", techUsed: "HTML, CSS", image: { url: p9 } },
    { title: "Play Music", description: "A platform to explore top artists, listen to music, and access news related to the music industry and live concerts.", techUsed: "HTML, CSS", image: { url: p10 } },
    { title: "Music Player", description: "Created a music player application enabling users to seamlessly add and enjoy their favorite songs.", techUsed: "Django, HTML, CSS", image: { url: p7 } },
    { title: "Revolutionizing Saffron Cultivation Using Aeroponics", description: "Developed a concept for cultivating saffron in a controlled environment within a shipping container to achieve higher yields.", techUsed: "Internet Of Things", image: { url: p8 } }
  ];
}