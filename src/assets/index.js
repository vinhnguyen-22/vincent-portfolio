// Hero
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon';
import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';
import LinkedinBoxLineIcon from 'remixicon-react/LinkedinBoxLineIcon';
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon';

// AboutMe icons
import AwardFillIcon from 'remixicon-react/AwardFillIcon';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon';

import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon';
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon';
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon';
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon';
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon';
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon';
import Home5LineIcon from 'remixicon-react/Home5LineIcon';
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon';
import QuestionAnswerLineIcon from 'remixicon-react/QuestionAnswerLineIcon';
import UserLineIcon from 'remixicon-react/UserLineIcon';
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon';

import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon';
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon';
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';
import CheckLineIcon from 'remixicon-react/CheckLineIcon';
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon';
import StarFillIcon from 'remixicon-react/StarFillIcon';
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon';
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon';
const icons = [
  // { component: <DribbbleLineIcon />, key: 'dribbble' },
  { component: <GithubLineIcon />, key: 'github' },
  { component: <LinkedinBoxLineIcon />, key: 'linkedin' },
  { component: <YoutubeLineIcon />, key: 'youtube' },
  { component: <FacebookCircleLineIcon />, key: 'facebook' },
  { component: <InstagramLineIcon />, key: 'instagram' },
];

export const heroIcons = icons.map((icon) => (
  <div key={icon.key}>{icon.component}</div>
));

export const aboutData = [
  {
    title: 'Github Repos',
    amount: 52,
    icon: <GithubFillIcon />,
  },
  {
    title: 'Successful Projects',
    amount: 10,
    icon: <Projector2LineIcon />,
  },
  {
    title: 'Awards and Recognition',
    amount: 6,
    icon: <AwardFillIcon />,
  },
];

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  'Dedicated data professional with a strong foundation in Python programming and quantitative analysis. Proven understanding of financial markets through direct experience in brokerage, with a focus on trading strategies and technical analysis. Skilled in processing time-series data, designing scalable ETL pipelines, and applying statistical methods to extract actionable insights from large and complex datasets. Proficient in core libraries such as Pandas, NumPy, and SciPy, as well as in relational databases and performance-optimized data workflows. Capable of developing production-grade modules, quantitative indicators, and backtesting frameworks aligned with rigorous financial logic. Committed to delivering reliable, maintainable, and scalable data solutions in dynamic and high-performance environments.';

// awards

export const awardsData = [
  {
    title: '100% Merit Scholarship',
    institution: 'East West University',
    details:
      'Awarded 100% Merit Scholarship twice at East West University for maintaining a CGPA of 3.90 over three consecutive semesters.',
    img: '/awards/Merit.png',
    url: 'https://drive.google.com/file/d/1Ofq4ntMErU7w6Ths2Kqbw0j4xLywVHPW/view?usp=sharing',
  },
  {
    title: 'SQL Skill Assesment Certificate (intermediate)',
    institution: 'HackerRank',
    details: 'It includes complex joins, unions, and sub-queries.',
    img: '/awards/hackerrankSQL.png',
    url: 'https://www.hackerrank.com/certificates/712f0a16295e?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate',
  },
  {
    title: 'Machine Learning with Tree-Based Models in Python',
    institution: 'Datacamp',
    details:
      'This course is about using Python and scikit-learn to train decision trees, build ensemble models, and tune hyperparameters for improved machine learning performance.',
    img: '/awards/ML2.png',
    url: 'https://www.datacamp.com/statement-of-accomplishment/course/8c1e67429eede2afb0a67a660170e22b855920c8?raw=1',
  },
  {
    title: 'Cleaning Data in Python',
    institution: 'Datacamp',
    details:
      'This course is about learning essential Python techniques to clean, diagnose, and handle messy data for accurate analysis and modeling.',
    img: '/awards/DC.png',
    url: 'https://www.datacamp.com/statement-of-accomplishment/course/6f1434f5c3e35cb54cfe3d09966a1d489544be31?raw=1',
  },
  {
    title: 'Feature Engineering for Machine Learning in Python',
    institution: 'Datacamp',
    details:
      'This course is about mastering data preprocessing and feature engineering techniques to prepare diverse data types for machine learning models.',
    img: '/awards/FE.png',
    url: 'https://www.datacamp.com/statement-of-accomplishment/course/7ed2195647fe513806dec24c15508b59031219ef?raw=1',
  },
];

// Skills
export const skillsData = [
  {
    name: 'C',
    icon: '/skills/C.png',
  },
  {
    name: 'C++',
    icon: '/skills/CPP.png',
  },
  {
    name: 'Python',
    icon: '/skills/Python.png',
  },
  // {
  //   name: 'Go',
  //   icon: '/skills/Go.png',
  // },
  // {
  //   name: 'Django',
  //   icon: '/skills/Django.png',
  // },
  {
    name: 'AI',
    icon: '/skills/ai.png',
  },

  // {
  //   name: 'TensorFlow',
  //   icon: '/skills/TensorFlow.png',
  // },

  {
    name: 'Oracle',
    icon: '/skills/Oracle.png',
  },
  {
    name: 'MySQL',
    icon: '/skills/MySQL.png',
  },
  {
    name: 'Firebase',
    icon: '/skills/Firebase.png',
  },
  // {
  //   name: 'Hadoop',
  //   icon: '/skills/Hadoop.png',
  // },
  {
    name: 'HTML',
    icon: '/skills/html.png',
  },
  {
    name: 'CSS',
    icon: '/skills/css.png',
  },
  {
    name: 'JavaScript',
    icon: '/skills/js.png',
  },
  {
    name: 'TailwindCSS',
    icon: '/skills/tailwind.png',
  },
  {
    name: 'Bootstrap',
    icon: '/skills/Bootstrap.png',
  },
  {
    name: 'NextJS',
    icon: '/skills/nextjs.png',
  },
  {
    name: 'Framer Motion',
    icon: '/skills/framer.png',
  },
  {
    name: 'Figma',
    icon: '/skills/figma.png',
  },
  {
    name: 'Photoshop',
    icon: '/skills/photoshop.png',
  },
  // {
  //   name: 'Blender',
  //   icon: '/skills/blender.png',
  // },
];

// import { PiCopyrightThin } from 'react-icons/pi'

// export const copyRightIcon = <PiCopyrightThin />
export const copyRightIcon = <CopyrightLineIcon />;
// Experience
export const experienceData = [
  {
    year: '2025.3 - Present',
    title: 'Data Analyst Specialist',
    institution: ['Saigon Co.op'],
    experience: [
      'Built automated pipelines to clean, transform, and analyze retail sales and inventory data.',
      'Developed ML models to segment customers and forecast product demand.',
      'Collaborated with teams to create Power BI dashboards for key performance indicators (KPIs).',
      'Streamlined reporting tasks using Excel, Power Query, and Google Sheets.',
      'Worked cross-functionally to support data-driven decisions across marketing and logistics teams.',
      'Technologies Used: Python, SQL, Power BI, Excel, Power Query, Google Sheets',
    ],
  },
  {
    year: '2023.12 - 2024.12',
    title: 'Stockbroker',
    institution: ['VNDIRECT Securities Corporation'],
    experience: [
      'Provided clients with market insights and investment recommendations based on technical and fundamental analysis.',
      'Executed equity transactions and managed individual portfolios.',
      'Supported onboarding of new clients and guided them through financial literacy.',
      'Helped investors identify undervalued assets and trading strategies.',
      'Technologies Used: TradingView, Excel, Stock Analysis Tools',
    ],
  },
  {
    year: '2023.12 - 2024.12',
    title: 'Freelance Software Engineer',
    institution: ['Self-employed'],
    experience: [
      'Built custom web scraping and data automation tools for small business clients.',
      'Developed REST APIs and backend modules for inventory and pricing systems.',
      'Created automation scripts using Google Apps Script and VBA to reduce manual work.',
      'Delivered tailored solutions for reporting, analytics, and data extraction.',
      'Technologies Used: Python, JavaScript, FastAPI, Google Apps Script, VBA, SQL',
    ],
  },
  {
    year: '2020.10 - 2024.12',
    title: 'Bachelor’s Degree in Finance and Banking',
    institution: ['Ton Duc Thang University'],
    experience: [
      'GPA: 8.2 / 10.0',
      'Acquired solid foundation in investment, financial modeling, and market operations.',
      'Engaged in data-related extracurricular projects and finance case studies.',
    ],
  },
  {
    year: '2020.10 - 2023.6',
    title: 'Advanced Diploma in Software Engineering',
    institution: ['Aptech Computer Education'],
    experience: [
      'Trained in full-stack development, database systems, and algorithm design.',
      'Completed several capstone projects including inventory systems and internal tools.',
      'Practiced version control, clean coding practices, and agile workflows.',
      'Technologies Used: C++, Java, ReactJS, NodeJS, MongoDB, SQL',
    ],
  },
];

export const projectsData = [
  {
    name: 'Real-time Stock Market Dashboard',
    desc: 'This system uses Google MediaPipe to scan and identify registered users’ faces for automatic attendance, showing “already taken” if recorded for the day.”',
    img: '/projects/FaceAttendance.gif',
    tech: ['Quantitative', 'Finance', 'Python', 'Streamlit'],
    url: 'https://github.com/vinhnguyen-22/Vincent-Stock-Dashboard',
    demo: 'https://vincent-stock-dashboard-dwq9j2rsb8p54bznvwp3jt.streamlit.app/',
  },
  // {
  //   name: 'Decoding Object Shapes from EEG Signals of the Brain ',
  //   desc: 'This project uses brain signals to classify object shapes by touch. It converts signals to images for Deep Learning methods. A YOLOv8 and Random Forest ensemble achieved 94% test accuracy.',
  //   img: '/projects/EEG.gif',
  //   tech: ['Python', 'ML'],
  //   url: 'https://github.com/abdullah-al-tamim/Capstone',
  // },
  // {
  //   name: 'Online Railway Ticket Reservation System',
  //   desc: 'This project automates railway e-ticketing, enabling seat selection, payments, instant e-ticket delivery, user journey tracking, and admin management of train schedules and stoppages.',
  //   img: '/projects/RTRS.gif',
  //   tech: ['HTML', 'CSS', 'JavaScript', 'Django'],
  //   url: 'https://github.com/abdullah-al-tamim/Online-Railway-Ticket-Reservation-System',
  // },
  // {
  //   name: 'WanderLuxeTravels.co',
  //   desc: 'A travel website that provides luxury travel guides, destination reviews, and tips for planning unforgettable vacations.',
  //   img: '/projects/image-4.jpg',
  //   tech: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
  //   url: 'ff',
  // },
  // {
  //   name: 'ByteBoosters.io',
  //   desc: 'A tech startup specializing in software development, offering innovative solutions and services for businesses looking to enhance their digital presence.',
  //   img: '/projects/image-5.jpg',
  //   tech: ['Figma', 'ReactJS', 'TailwindCSS', 'CSS'],
  //   url: 'ff',
  // },
];

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'awards',
    name: 'Awards',
    icon: <UserStarLineIcon />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
  // {
  //   id: 'pricing',
  //   name: 'Pricing',
  //   icon: <PriceTag3LineIcon />,
  // },
  {
    id: 'contact',
    name: 'Contact',
    icon: <ContactsBook2LineIcon />,
  },
  {
    id: 'questions',
    name: 'Questions',
    icon: <QuestionAnswerLineIcon />,
  },
];

export const questions = [
  {
    question: 'What are your strengths?',
    answer:
      'My strongest trait is adaptability. I can quickly adjust to new environments and learn new skills. My background in Data Science and self-taught software engineering experience demonstrate my ability to embrace change and take on challenges. This adaptability allows me to work effectively in dynamic settings and contribute in versatile ways.',
  },
  {
    question: 'What is your biggest weakness?',
    answer:
      'I tend to overcommit to details, as I believe in delivering quality work. While this focus on detail can sometimes affect efficiency, I’m working on balancing it by prioritizing tasks and setting time limits. For example, during university projects, I would spend a lot of time ensuring every element was perfect, but I’m learning to streamline my efforts while maintaining quality.',
  },
  // {
  //   question: 'Why should we hire you?',
  //   answer:
  //     'You should hire me because my adaptability, positivity, and eagerness to learn make me a strong fit for your team. As a recent graduate, I’m highly motivated and a quick learner, so I’m ready to take on new challenges and be shaped into an ideal team member who consistently adds value. My hard-working nature helped me succeed academically, and I believe it will benefit your company too.',
  // },
  {
    question: 'How do you approach a task when information is unclear?',
    answer:
      'I start by identifying the end goal of the task and then break it down into manageable steps. I research and gather information online or seek advice from colleagues if available. Throughout the process, I prioritize safety and adhere to company guidelines. This approach ensures that I remain thorough while still moving the task forward efficiently.',
  },
  {
    question: 'How do you handle change?',
    answer:
      'I view change as a necessary part of growth, both professionally and personally. Technology is constantly evolving, and I believe in staying updated and flexible. Embracing change helps me improve my skills and adapt to new challenges, making me a more versatile employee.',
  },
  {
    question: 'How do you respond to opposing viewpoints?',
    answer:
      'I believe that opposing viewpoints are valuable for fostering creativity and generating diverse ideas. I listen to and weigh the benefits of alternative perspectives. If I disagree, I explain my reasoning respectfully and try to reach a common ground. For example, during my final year project, my teammate and I had different ideas about the technology to use, but through open discussion, we found a compromise that worked for both of us.',
  },
  {
    question: 'How quickly do you make decisions?',
    answer:
      'The speed of my decision-making depends on the urgency and complexity of the situation. For high-priority tasks, I aim to make swift, informed decisions. However, for more complex issues, I take the necessary time to gather information and weigh options, ensuring the best outcome.',
  },
  // {
  //   question: 'How would you handle conflict with a co-worker?',
  //   answer:
  //     'I believe open and honest communication is essential in resolving conflicts. If friction arises, I aim to understand my co-worker’s perspective and find a compromise that works for both of us. For instance, during a team project, I encountered a disagreement with a teammate over technology choices. By discussing our viewpoints and focusing on the project’s success, we resolved the conflict amicably.',
  // },
  // {
  //   question: 'Tell me about a time when you anticipated a problem before it arose.',
  //   answer:
  //     'During my role as a Teaching Assistant, I noticed some students struggling with a topic early in the semester. To prevent issues later, I arranged additional study sessions to address their concerns proactively. This approach helped improve their understanding and prevented future difficulties with the course material.',
  // },
  {
    question: 'Tell me about a time when you failed.',
    answer:
      'In my third year, I experienced personal challenges that affected my academic performance, resulting in a B grade in a course I found relatively easy. This experience taught me the importance of resilience and time management, and I’ve since improved my ability to balance personal and academic responsibilities.',
  },
  {
    question: 'What motivates you in your career?',
    answer:
      'I’m motivated by opportunities for growth and the chance to make meaningful contributions. As a fresh graduate, I’m excited about the potential to learn from experienced professionals and gain hands-on experience. I’m driven to create positive impact through my work, whether it’s by developing user-friendly software or working on innovative projects.',
  },
  {
    question: 'How do you approach problem-solving?',
    answer:
      'When facing a challenge, I break down the problem into smaller, manageable parts and look for straightforward solutions first. If I need additional insight, I seek advice from experts or research online. This structured approach allows me to tackle problems methodically and find effective solutions.',
  },
];

export const questionArrow = <ArrowDropDownLineIcon />;

// Reviews

const starIconsArray = [
  { component: <StarFillIcon />, key: 'star-fill' },
  { component: <StarHalfLineIcon />, key: 'star-half' },
];

const arrowIconsArray = [
  { component: <ArrowLeftSLineIcon />, key: 'arrow-left' },
  { component: <ArrowRightSLineIcon />, key: 'arrow-right' },
];

export const starIcons = starIconsArray.map((icon) => (
  <div key={icon.key}>{icon.component}</div>
));

export const arrowIcons = arrowIconsArray.map((icon) => (
  <div key={icon.key}>{icon.component}</div>
));

export const reviewsData = [
  {
    image: '/reviews/client-4.png',
    name: 'Mark T., Freelance Graphic Designer',
    comment:
      "Your work on our website has been phenomenal. The design is visually stunning and incredibly user-friendly. We've received countless compliments from our customers, and our sales have noticeably increased. Thank you for capturing our brand's essence so perfectly!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-2.png',
    name: 'Sarah B., E-commerce Store Owner',
    comment:
      "Working with you, has been an absolute pleasure. The portfolio website you created for me is sleek, modern, and beautifully showcases my work. Your attention to detail and creative flair are truly impressive. I couldn't be happier with the final result!",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/client-3.png',
    name: 'Emily R., CEO of Tech Startup',
    comment:
      "The redesign of our corporate website exceeded all expectations. Your innovative ideas and professional execution have given us a site that is not only visually appealing but also highly functional. We've seen a significant improvement in user engagement thanks to your expertise.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/client-1.png',
    name: 'Bob W., Lifestyle Blogger',
    comment:
      "I absolutely love the blog design you created for me, [Web Designer's Name]. It's exactly what I envisioned—stylish, unique, and easy to navigate. Your responsiveness and creative input were invaluable. My readers are raving about the new look, and I couldn't be more thrilled!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-5.png',
    name: 'David H., Director of Non-Profit Organization',
    comment:
      "your work on our non-profit’s website has been transformative. The design is clean, engaging, and effectively conveys our mission. We've seen an increase in online donations and volunteer sign-ups, all thanks to your fantastic design. Your dedication and talent are greatly appreciated!",
    stars: [1, 1, 1, 1, 1],
  },
];

export const pricingPlans = [
  {
    title: 'Basic',
    pricing: '$500 - $1,000',
    features: [
      'Up to 5 pages',
      'Responsive design ',
      'Basic SEO ',
      'Contact form',
      'Social media links',
      '1 month support',
    ],
    recommended: 'Small businesses, personal websites, bloggers',
  },
  {
    title: 'Premium',
    pricing: '$5,000 - $10,000',
    features: [
      'Unlimited pages',
      'Responsive design',
      'Comprehensive SEO',
      'Contact form ',
      'Social media links',
      'Advanced security',
      'E-commerce (unlimited products)',
      'Blog setup',
      'Google Analytics with custom reports',
      '6 months support',
    ],
    recommended: 'Medium-sized businesses, online stores, service providers',
  },
  {
    title: 'Standard',
    pricing: '$1,500 - $3,000',
    features: [
      'Up to 10 pages',
      'Responsive design',
      'Advanced SEO',
      'CContact form',
      'Social media links',
      'E-commerce (20 products)',
      'Blog setup',
      'Google Analytics',
      '3 months support',
    ],
    recommended:
      'Large businesses, complex e-commerce sites, custom web applications',
  },
];

export const checkIcon = <CheckLineIcon />;

// Toggle

export const sunIcon = <SunFoggyFillIcon />;
export const moonIcon = <MoonFoggyFillIcon />;
