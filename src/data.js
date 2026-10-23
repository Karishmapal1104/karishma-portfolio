export const profile = {
  name: "Karishma Pal",
  role: "Computer Engineering student",
  intro:
    "IEEE-published engineering student who trains and ships machine learning models. My Marathi news sentiment model reached 83.18% accuracy, and I have completed two internships in data science and cyber security.",
  location: "Mumbai, India",
  email: "Karishmapal1104@gmail.com",
  phone: "8097103937",
  linkedin: "https://www.linkedin.com/in/karishma-pal-ab930525a",
  github: "https://github.com/Karishmapal1104",
  resume: "/Karishma_Pal_Resume.pdf",
  about:
    "I am a Computer Science Engineering student at Viva Institute of Technology, graduating in 2026. I like turning theory into things that work: training and comparing models, wiring them to an API, and packaging them so others can use them. I am looking for an organisation where I can learn from industry experts and apply my technical skills with a dedicated team.",
};

export const experience = [
  {
    org: "YBI Foundation",
    title: "Data Science Intern",
    when: "Dec 2022 - Jan 2023",
    mode: "Remote",
    points: [
      "Developed ML projects on disease prediction using Python, TensorFlow and ML/DL algorithms.",
      "Designed a recommendation system for an existing system and connected it through a Flask API.",
    ],
  },
  {
    org: "VCL Academy",
    title: "Blue Team Cyber Security Intern",
    when: "Nov 2022 - Dec 2022",
    mode: "Remote",
    points: [
      "Completed the Blue Team internship, learning defensive security strategies.",
      "Studied threat detection, incident response and network monitoring.",
    ],
  },
];

export const projects = [
  {
    name: "InSightSphere",
    sub: "Intelligent analysis of regional news",
    text: "A transformer-based NLP model that classifies the sentiment of 20,518 Marathi news headlines as positive, negative or neutral. Fine-tuned SA-MahaBERT with task-specific hyperparameters and compared it with XLM-R and baseline MahaBERT.",
    result: "83.18% accuracy",
    tags: ["NLP", "Transformers", "SA-MahaBERT"],
  },
  {
    name: "Book Recommendation System",
    sub: "Content-based, collaborative and hybrid",
    text: "A recommender built in Python and Jupyter Notebook that suggests books using three techniques, with a web front end. Containerized with a Dockerfile for easy deployment.",
    result: "Runs in Docker",
    tags: ["Python", "Machine learning", "Docker", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/Karishmapal1104/ML-based-book-recommendation",
  },
];

export const skills = [
  { group: "Programming languages", items: ["Java", "JavaScript", "SQL"] },
  { group: "Web development", items: ["HTML", "CSS"] },
];

export const education = [
  { school: "Viva Institute of Technology", detail: "B.E. Computer Science Engineering, CGPA 7.1", when: "Nov 2022 - Jun 2026" },
  { school: "Sheth G.H. High School & Junior College of Commerce and Science", detail: "Higher secondary, 56.50%", when: "Jun 2020 - Mar 2022" },
  { school: "Shree Vishwakarma High School", detail: "Secondary school, 79.80%", when: "Apr 2011 - Mar 2020" },
];

export const highlights = [
  { text: "Published a research paper at an IEEE conference (2026)", link: "https://ieeexplore.ieee.org/abstract/document/11467181", label: "Read the paper" },
  { text: "Participated in Imperia, an intercollegiate project competition (2026)" },
  { text: "Participated in the Smart India Hackathon, campus internal round (2024)" },
  { text: "Certified in MERN Stack Development by EDBA Academy (2024)" },
  { text: "Certified in Cyber Security by VCL Academy (2022)" },
];

// export const stats = [
//   { value: "IEEE", label: "Research paper published (2026)" },
//   { value: "83.18%", label: "Accuracy on 20,518 Marathi headlines" },
//   { value: "2", label: "Internships completed" },
//   { value: "2", label: "Projects built and documented" },
// ];

export const stats = [
  { big: "83.18%", label: "sentiment accuracy on 20,518 Marathi news headlines" },
  { big: "IEEE", label: "research paper published at a conference in 2026" },
  { big: "2", label: "internships in data science and cyber security" },
  { big: "3", label: "ways of recommending books: content, collaborative, hybrid" },
];
