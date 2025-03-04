import profilePic from '../images/profilePic.png';

export async function getContactMe() {
  return {
    profilePicture: { url: profilePic }, 
    name: "Dhanush M",
    title: "Java Full Stack Developer",
    summary: "MSc Software Systems student with strong skills in Java, React.js, and full-stack web development, preparing for software development placements.",
    companyUniversity: "Kongu Engineering College",
    linkedinLink: "https://www.linkedin.com/in/dhanush-m-887763226/",
    email: "dhanushm4422@gmail.com",
    phoneNumber: "+91 877827 6926",
  };
}
