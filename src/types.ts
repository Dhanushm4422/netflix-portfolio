// types.ts

export interface ProfileBanner {
  backgroundImage: { url: string };
  headline: string;
  resumeLink: {
    url: string;
  };
  linkedinLink: string;
  githubLink: string; 
  leetcodeLink: string;
  profileSummary: string;
}

export interface WorkPermit {
  visaStatus: string;
  //expiryDate: Date;
  summary: string;
  additionalInfo: string;
}
export interface TimelineItem {
  name: string;
  timelineType: "work" | "education"; // Restricting to valid values
  title: string;
  techStack: string;
  summaryPoints: string[];
  dateRange: string;
}


export interface Project {
  githubLink: string | undefined;
  title: string;
  description: string;
  techUsed: string;
  image: { url: string };
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}

export interface ContactMe {
  profilePicture: { url: string };
  name: string;
  title: string;
  summary: string;
  companyUniversity: string;
  linkedinLink: string;
  email: string;
  phoneNumber: string;
}

export interface Skill { 
  name: string;
  category: string;
  description: string;
  icon: string;
}
