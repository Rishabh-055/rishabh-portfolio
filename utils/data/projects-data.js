import aiWebsite from '@/public/png/ai webstie generator demo image.png';
import weatherApp from '@/public/png/weather app demo image.png';

export const projectsData = [
    {
        id: 1,
        name: 'AI Website Generator',
        description: "Build an enterprise-grade, full-stack AI SaaS platform built with the MERN stack (MongoDB, Express, React, Node.js) that empowers users to generate, edit, manage, and deploy responsive websites instantly using AI prompts.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'AI SaaS Full Stack Developer',
        code: 'https://github.com/Rishabh-055/ai-website-generator-project',
        demo: 'https://ai-website-generator-backend-awd7.onrender.com/',
        image: aiWebsite,
    },
    {
        id: 2,
        name: 'Classic Weather App',
        description: 'A beautiful, fully responsive weather application built with React and the OpenWeatherMap API.',
        tools: ['React (Vite/CRA)', 'HTML5', 'CSS3', 'OpenWeatherMap API'],
        role: 'Frontend Developer',
        code: 'https://github.com/Rishabh-055/weather-app-react',
        demo: 'https://weather-app-tau-sandy-93.vercel.app/',
        image: weatherApp,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },