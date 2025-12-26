// Portfolio Configuration
// Edit this file to customize your portfolio content

export const personalInfo = {
    name: "John Doe",
    role: "Full Stack Developer",
    tagline: "I craft beautiful, functional, and user-centric digital experiences. Passionate about turning ideas into reality through clean code and innovative solutions.",
    email: "contact@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
};

export const socialLinks = {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "mailto:contact@example.com",
};

export const bio = {
    paragraph1: "I'm a passionate Full Stack Developer with over 5 years of experience building web applications that solve real-world problems. I specialize in creating scalable, performant, and user-friendly solutions using modern technologies.",
    paragraph2: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying updated with the latest industry trends.",
};

export const skills = {
    frontend: [
        'React',
        'JavaScript',
        'TypeScript',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'Next.js',
        'Vue.js'
    ],
    backend: [
        'Node.js',
        'Express',
        'Python',
        'Django',
        'MongoDB',
        'PostgreSQL',
        'REST APIs',
        'GraphQL'
    ],
    tools: [
        'Git',
        'Docker',
        'AWS',
        'Firebase',
        'Figma',
        'VS Code',
        'Postman',
        'Linux'
    ],
};

export const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern technologies for optimal performance.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        demoLink: 'https://example.com',
        githubLink: 'https://github.com',
        image: null, // Add image path here
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and detailed analytics dashboard.',
        techStack: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
        demoLink: 'https://example.com',
        githubLink: 'https://github.com',
        image: null,
    },
    {
        title: 'Social Media Dashboard',
        description: 'An analytics dashboard for social media management with data visualization, scheduled posting, engagement metrics, and multi-platform integration.',
        techStack: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
        demoLink: 'https://example.com',
        githubLink: 'https://github.com',
        image: null,
    },
    {
        title: 'Weather Forecast App',
        description: 'A beautiful weather application with real-time weather data, 7-day forecasts, location-based services, and interactive weather maps with detailed metrics.',
        techStack: ['React', 'OpenWeather API', 'CSS3', 'Geolocation'],
        demoLink: 'https://example.com',
        githubLink: 'https://github.com',
        image: null,
    },
    {
        title: 'Portfolio CMS',
        description: 'A content management system specifically designed for developers to showcase their portfolios with customizable themes, blog integration, and SEO optimization.',
        techStack: ['Django', 'React', 'PostgreSQL', 'AWS'],
        demoLink: 'https://example.com',
        githubLink: 'https://github.com',
        image: null,
    },
    {
        title: 'Real-time Chat Application',
        description: 'A modern chat application with real-time messaging, file sharing, group chats, video calls, and end-to-end encryption for secure communication.',
        techStack: ['Socket.io', 'Node.js', 'React', 'MongoDB'],
        demoLink: 'https://example.com',
        githubLink: 'https://github.com',
        image: null,
    },
];

export const contactInfo = [
    {
        type: 'email',
        label: 'Email',
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
    },
    {
        type: 'phone',
        label: 'Phone',
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
        type: 'location',
        label: 'Location',
        value: personalInfo.location,
        href: null,
    },
];
