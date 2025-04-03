import profilePic from '../images/profilePic.png';

export async function getContactMe() {
  return {
    profilePicture: { url: profilePic }, 
    name: "Dhanush M",
    title: "Full Stack Developer",
    summary: "M.Sc Software Systems student with strong skills in MERN and Java development, preparing for software development placements.",
    companyUniversity: "Kongu Engineering College",
    linkedinLink: "https://www.linkedin.com/in/dhanush-m-887763226/",
    email: "dhanushm4422@gmail.com",
    phoneNumber: "+91 87782 76926",
  };
}
