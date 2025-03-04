import { TimelineItem } from '../types'; // Import the TimelineItem type

export async function getTimeline(): Promise<TimelineItem[]> {
  return [
    
    {
      name: "Schnell Energy Equipments Pvt Ltd",
      timelineType: "work",
      title: "Software Development Intern",
      techStack: "Angular, JavaScript, Swagger API, HTML, CSS, Bootstrap, PostgreSQL",
      summaryPoints: [
        "Contributed to the development of the frontend dashboard for an IoT project.",
        "Collaborated with the team in bug fixing and improving system functionality.",
        "Worked with the Swagger API toolkit for seamless API integration."
      ],
      dateRange: "July 2024 - September 2024",
    },
    {
      name: "Idot Inc.",
      timelineType: "work",
      title: "Junior Web Developer",
      techStack: "PHP, HTML, CSS, Bootstrap, MySQL",
      summaryPoints: [
        "Developed and maintained a website, enhancing overall web presence.",
        "Worked with HTML, CSS, and Bootstrap to create a responsive design.",
        "Integrated PHP for dynamic content and improved functionality."
      ],
      dateRange: "April 2023 - August 2023",
    },
    {
      name: "Kongu Engineering College",
      timelineType: "education", 
      title: "MSc in Software Systems",
      techStack: "",
      summaryPoints: ["CGPA: 8.99", "Specialized in Software Systems", "Participated in various technical events"],
      dateRange: "2021 - 2026",
    },
    {
      name: "Vijay Vikas Matriculation Higher Secondary School",
      timelineType: "education",
      title: "SSLC & HSC",
      techStack: "",
      summaryPoints: ["SSLC: 88.60%", "HSC: 89.50%"],
      dateRange: "2018 - 2021",
    }
  ];
}
