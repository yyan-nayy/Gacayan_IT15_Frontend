export const programs = [
  {
    code: "bsit",
    name: "Bachelor of Science in Information Technology",
    type: "Bachelor",
    duration: "4 Years",
    totalUnits: 150,
    status: "Active",
    description: "Focuses on software development, networking and databases.",
    yearLevels: {
      "1st Year": ["IT101", "IT102"],
      "2nd Year": ["IT201", "IT202"],
      "3rd Year": ["IT301"],
      "4th Year": ["IT401"]
    }
  },
  {
    code: "bscs",
    name: "Bachelor of Science in Computer Science",
    type: "Bachelor",
    duration: "4 Years",
    totalUnits: 160,
    status: "Under Review",
    description: "Advanced computing, algorithms and AI.",
    yearLevels: {
      "1st Year": ["CS101"],
      "2nd Year": ["CS201"],
      "3rd Year": ["CS301"],
      "4th Year": ["CS401"]
    }
  }
];

export const subjects = [
  {
    code: "IT101",
    title: "Introduction to Computing",
    units: 3,
    semester: "Semester",
    program: "bsit",
    prerequisites: [],
    corequisites: [],
    description: "Basic computing concepts."
  },
  {
    code: "IT201",
    title: "Data Structures",
    units: 3,
    semester: "Both",
    program: "bsit",
    prerequisites: ["IT101"],
    corequisites: [],
    description: "Data organization techniques."
  },
  {
    code: "CS101",
    title: "Programming Fundamentals",
    units: 4,
    semester: "Term",
    program: "bscs",
    prerequisites: [],
    corequisites: [],
    description: "Core programming principles."
  }
];