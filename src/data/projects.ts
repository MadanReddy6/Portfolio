export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  collaborators?: string;
  thanks?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Loan Default Prediction and Risk Analysis",
    description: "Developed a comprehensive web-based application that leverages the XGBoost machine learning algorithm to predict loan defaults based on users' historical financial and loan data. Designed and integrated an interactive dashboard using tools like Matplotlib, Seaborn, and Chart.js to visualize critical risk factors, prediction probabilities, and model insights. The dashboard allows users and administrators to easily interpret borrower risk levels, understand key influences behind default predictions, and make informed lending decisions.",
    techStack: [
      "Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "XGBoost", 
      "Matplotlib", "Seaborn", "HTML", "CSS", "Bootstrap", "Chart.js", 
      "Power BI", "MySQL"
    ],
    collaborators: "Manipal Institute of Technology, MAHE Bengaluru",
    thanks: "Dr. Dayananda P (HOD of IT Department, MIT) and mentors Dr. Sumanth V and Mr. Nishanth Shet for their continuous support."
  },
  {
  id:2 ,
  title: "Transportation Management System",
  description: "Developed a full-stack web application from scratch using Python for server-side programming with the Flask framework, HTML and CSS for structuring and styling, and MySQL for robust backend data management. Integrated multiple APIs to extend the platform’s functionality, offering real-time features and improved user experience. Employed Bootstrap to design a fully responsive and mobile-optimized interface, ensuring seamless accessibility across devices. Additionally, implemented Stripe’s secure payment gateway to facilitate safe, efficient online transactions, enhancing the overall reliability and trustworthiness of the application.",
  techStack: ["HTML", "CSS", "Bootstrap", "JavaScript", "Python", "Flask", "MySQL","APIs"]
},
  {
    id: 3,
    title: "Blinkit Sales Dashboard – Power BI",
    description: "Created a dynamic and interactive Power BI dashboard to analyze Blinkit sales performance across multiple dimensions such as item type, fat content, and outlet tier. Utilized Power Query for efficient data transformation and cleaning, and implemented DAX formulas to create insightful KPIs like Total Sales, Average Rating, and Number of Items. Designed intuitive visualizations, slicers, and filters that allow users to drill down into specific categories, identify sales trends, and make data-driven business decisions with ease.",
    techStack: ["Power BI", "Power Query", "DAX"]
  },
  {
    id: 4,
    title: "Market Basket Analysis using Python",
    description: "Identified meaningful product associations and buying patterns using the Apriori algorithm on transaction datasets. Implemented association rule mining to uncover relationships between items frequently purchased together, helping businesses optimize product placements, cross-sell strategies, and targeted marketing campaigns. Visualized key association rules and support-confidence metrics to provide actionable insights for decision-makers.",
    techStack: ["Python", "Pandas", "Mlxtend", "Jupyter Notebook"]
  },
  {
    id: 5,
    title: "YouTube Top 1000 Channels Analysis – Power BI",
    description: "Analyzed the performance of top YouTube channels by examining key metrics such as subscribers, total views, and number of uploads. Conducted trend analysis to identify growth patterns, engagement levels, and content strategies driving success. Created interactive visualizations and dashboards to highlight correlations, outliers, and emerging trends, providing valuable insights into digital content growth and audience behavior.",
    techStack: ["Power BI", "Data Analysis"]
  }
];