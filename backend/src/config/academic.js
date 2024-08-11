const subjects = {
    "Computer Science": [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "Object Oriented Programming",
        "Software Engineering",
        "Computer Architecture",
        "Discrete Mathematics",
        "Cloud Computing",
        "Machine Learning",
        "Artificial Intelligence",
        "Theory of Automata",
        "Compiler Design",
        "Computer Graphics",
        "Computer Vision",
        "Natural Language Processing",
        "Robotics",
        "Cyber Security",
        "Information Theory"
    ],
    "Mathematics": [
        "Calculus",
        "Linear Algebra",
        "Abstract Algebra",
        "Real Analysis",
        "Complex Analysis",
        "Discrete Mathematics",
        "Numerical Methods",
        "Probability and Statistics",
        "Differential Equations",
        "Topology",
        "Number Theory",
        "Graph Theory",
        "Mathematical Logic",
        "Mathematical Modeling",
        "Operations Research"
    ],
    "Physics": [
        "Classical Mechanics",
        "Electromagnetism",
        "Quantum Mechanics",
        "Thermodynamics",
        "Statistical Mechanics",
        "Optics",
        "Modern Physics",
        "Nuclear Physics",
        "Solid State Physics",
        "Electronics",
        "Astrophysics",
        "Particle Physics",
        "Plasma Physics",
        "Computational Physics",
        "Mathematical Methods in Physics"
    ]
}


const departments = Object.keys(subjects);

const academics = {
    "BS Computer Science": {
        semesters: 8,
        subjects: subjects["Computer Science"]
    },
    "BS Mathematics": {
        semesters: 8,
        subjects: subjects["Mathematics"]
    },
    "BS Physics": {
        semesters: 8,
        subjects: subjects["Physics"]
    }
}


const degrees = Object.keys(academics);

module.exports = {
    academics,
    degrees,
    departments
};
