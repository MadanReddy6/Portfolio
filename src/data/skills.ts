export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL"]
  },
  {
    category: "Python Libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "XGBoost"]
  },
  {
    category: "Web Development",
    items: ["HTML5", "CSS3", "JavaScript", "Flask (Framework)", "Bootstrap (Library)"]
  },
  {
    category: "Database",
    items: ["MySQL","MongoDB"]
  },
  {
    category: "Data Tools & Visualization",
    items: ["Power BI", "Advanced Excel", "Chart.js", "Plotly"]
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub", "GitHub Desktop"]
  },
  {
    category: "APIs",
    items: ["RESTful APIs (using Flask)"]
  },
  {
    category: "IDEs & Tools",
    items: ["VS Code", "Jupyter Notebook", "MySQL Workbench"]
  }
];