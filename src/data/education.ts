export interface Education {
  degree: string;
  institution: string;
  score: string;
}

export interface Certification {
  name: string;
}

export const education: Education[] = [
  {
    degree: "MBA in Business Data Analytics",
    institution: "JNTU SMS Anantapur",
    score: "80%"
  },
  {
    degree: "B.Com (Computer Applications)",
    institution: "Mangalakara Degree College",
    score: "65%"
  },
  {
    degree: "Intermediate ",
    institution: "Mangalakara Jr College",
    score: "9.4 CGPA"
  },
  {
    degree: "SSC",
    institution: "ZPHS Boys High School, Kothacheruvu",
    score: "8.5 CGPA"
  }
];

export const certifications: Certification[] = [
  { name: "Google Data Analytics-Coursera" },
  { name: "Python - SURE Trust" },
  { name: "SQL & Power BI - SURE Trust" },
  { name: "Data Analysis & Web Technologies - MITRAz" },
  { name: "Loan Default Prediction & Risk Analysis - MIT, MAHE Bengaluru" }
  
];