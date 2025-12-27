export const intro = {
    name: "Inderash M",
    role: "Full-Stack Developer",
    location: "Coimbatore, India",
    tagline: "Building scalable, user-centric web solutions.",
    subtext: "I help visionary teams build high-performance web applications with clean code and intuitive design.",
    bio: "I'm a Full-Stack Developer based in Coimbatore, passionate about creating seamless digital experiences. With a background in Computer Science and Data Analytics, I bridge the gap between complex backend logic and elegant frontend interfaces.",
};

export const skills = {
    frontend: [
        { name: "React", level: 5 },
        { name: "Tailwind CSS", level: 5 },
        { name: "HTML5/CSS3", level: 5 },
        { name: "JavaScript (ES6+)", level: 4 },
    ],
    backend: [
        { name: "Node.js", level: 4 },
        { name: "Express.js", level: 4 },
        { name: "MongoDB", level: 4 },
        { name: "REST APIs", level: 4 },
    ],
    tools: [
        { name: "Git & GitHub", level: 5 },
        { name: "VS Code", level: 5 },
        { name: "Postman", level: 4 },
        { name: "Figma", level: 3 },
    ],
    cloud: [
        { name: "Google Cloud", level: 3 },
        { name: "n8n Automation", level: 4 },
    ],
};

export const projects = [
    {
        id: 1,
        title: "Smart Radar Detector",
        summary: "Real-time object mapping using Arduino and Java processing.",
        description: "An IoT-based radar system that maps objects in real-time. It uses an ultrasonic sensor mounted on a servo motor (controlled by Arduino) to detect distance and angle, visualizing the data on a radar interface built with Java Processing.",
        tech: ["Java", "Arduino", "IoT"],
        category: "Hardware",
        links: { github: "https://github.com/inderash18", live: "#" },
    },
    {
        id: 2,
        title: "BlueCarbon Blockchain",
        summary: "Decentralized app for trading carbon credits transparently.",
        description: "A Web3 application designed to promote environmental sustainability. It allows users to verify and trade 'blue carbon' credits on the blockchain, ensuring transparency and immutability in carbon offsetting efforts.",
        tech: ["React", "Solidity", "Web3.js"],
        category: "Web",
        links: { github: "https://github.com/inderash18", live: "#" },
    },
    {
        id: 3,
        title: "AI Law Portal",
        summary: "Legal assistance platform with an integrated AI chatbot.",
        description: "A full-stack web portal that democratizes access to legal information. It features a custom AI assistant capable of answering legal queries and simplifying complex legal jargon for everyday users.",
        tech: ["React", "Node.js", "OpenAI API"],
        category: "AI",
        links: { github: "https://github.com/inderash18", live: "#" },
    },
    {
        id: 4,
        title: "EcoWorkflow Automation",
        summary: "Automated business processes using n8n workflows.",
        description: "A collection of complex automation workflows designed to streamline repetitive business tasks. Integrates various services like Google Sheets, Email, and Slack to create a seamless automated pipeline.",
        tech: ["n8n", "Webhooks", "JSON"],
        category: "Automation",
        links: { github: "https://github.com/inderash18", live: "#" },
    },
];

export const experience = [
    {
        id: 1,
        role: "B.Sc. CSDA Student",
        org: "KPR College of Arts Science and Research",
        date: "2022 - Present",
        desc: [
            "Specializing in Computer Science with Data Analytics.",
            "Maintained a CGPA of 7.1 while actively participating in tech clubs.",
            "Developed a strong foundation in algorithms and database management.",
        ],
    },
    {
        id: 2,
        role: "PRO Member",
        org: "Rotaract Club",
        date: "2023 - Present",
        desc: [
            "Led public relations initiatives and community outreach programs.",
            "Organized large-scale events promoting social awareness and student leadership.",
            "Managed social media campaigns to increase club engagement.",
        ],
    },
    {
        id: 3,
        role: "Higher Secondary Education",
        org: "Literacy Mission Matric Hr Sec School",
        date: "Completed 2022",
        desc: ["Achieved 77% in final board examinations with a focus on Mathematics and Computer Science."],
    },
];

export const achievements = [
    {
        id: 1,
        title: "SIH College Level Shortlist",
        desc: "Selected as a finalist in the internal college hackathon for Smart India Hackathon.",
    },
    {
        id: 2,
        title: "n8n Automation Expert",
        desc: "Recognized for developing complex, production-ready automation workflows.",
    },
    {
        id: 3,
        title: "District Kho-Kho Player",
        desc: "Represented the district in competitive Kho-Kho tournaments.",
    },
];

export const contact = {
    email: "inderash18@gmail.com",
    phone: "+91 6382860929",
    social: [
        { name: "GitHub", url: "https://github.com/inderash18", icon: "Github" },
        { name: "LinkedIn", url: "https://linkedin.com/in/inderash18", icon: "Linkedin" },
        { name: "LeetCode", url: "#", icon: "Code" },
        { name: "HackerRank", url: "#", icon: "Terminal" },
    ],
};
