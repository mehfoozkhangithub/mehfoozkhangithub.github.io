//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from "react-icons/fi";
// Resume
import Resume from "./assets/img/Mehfooz-Khan-Resume.pdf";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/img(Project)/calNew.png";
import Project2 from "./assets/img/img(Project)/fpNew.png";
import Project3 from "./assets/img/img(Project)/bb.png";
import Project4 from "./assets/img/img(Project)/fin1.png";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/ujjwal.png";
import TestiImage2 from "./assets/img/testimonials/satayam.jpeg";
import TestiImage3 from "./assets/img/testimonials/rahul.jpeg";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "projects",
    href: "portfolio",
  },
  // {
  //   name: 'services',
  //   href: 'services',
  // },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
  {
    name: (
      <a href={Resume} download onClick={true}>
        Resume
      </a>
    ),
    href: "",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/mehfoozkhan51",
  },
  {
    icon: <FiInstagram />,
    href: "",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/mehfoozkhangithub",
  },
  {
    icon: <FiDribbble />,
    href: "",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Calculator[Day/Night]",
    category: "Calculator",
    description:
      'This is my first project "CALCULATOR", This project aspire me to keep coding always. It is fully functional and optimism for mobile.',
    link: "https://cheery-kulfi-a9a524.netlify.app",
    git: "https://github.com/mehfoozkhangithub/Calculater-mode-Day-Night-",
    stack: "HTML || CSS",
  },
  {
    id: "2",
    image: Project2,
    name: "First Post",
    category: "News-App",
    description:
      "In this website there are some really good containt which they export the data on server to show whats going in the world.",
    link: "https://adorable-halva-74275f.netlify.app/?current=1",
    git: "https://github.com/mehfoozkhangithub/First-Post",
    stack: "HTML || CSS || JS || REACT || CHAKRA-UI || JSON",
  },
  {
    id: "3",
    image: Project4,
    name: "The Finest",
    category: "Shopping-App",
    description:
      "In this project we have tries to create a full stack clone of Bigbasket This project was built by self in 5 Days.",
    link: "https://the-awesome-sahnawaz7hussain-site.netlify.app/",
    git: "https://github.com/Sahnawaz7hussain/dependent-account-1105",
    stack:
      "HTML || CSS || JS || REACT || CHAKRA-UI || JSON || NODEJS || EXPRESSJS || REDUX MATERIAL-UI",
  },
  {
    id: "4",
    image: Project3,
    name: "Big-Basket",
    category: "Shopping-App",
    description:
      "In this project we have tries to create a full stack clone of Bigbasket This project was built by self in 5 Days.",
    link: "https://bigbasket-clone-web16.netlify.app/",
    git: "https://github.com/mehfoozkhangithub/Big_Basket",
    stack: "HTML || CSS || JS || REACT || CHAKRA-UI || JSON ",
  },
  // {
  //   id: '4',
  //   image: Project4,
  //   name: 'project name 4',
  //   category: 'branding',
  // },
  // {
  //   id: '5',
  //   image: Project5,
  //   name: 'project name 5',
  //   category: 'web development',
  // },
  // {
  //   id: '6',
  //   image: Project6,
  //   name: 'project name 6',
  //   category: 'web development',
  // },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "github",
  },
  {
    name: "web deploy",
  },
  {
    name: "videos",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: "https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  // {
  //   image: SkillImg5,
  // },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
  },
  {
    image: "https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  // {
  //   image: SkillImg8,
  // },
  // {
  //   image: "https://www.coffeeclass.io/logos/chakra-ui.png",
  // },
  // {
  //   image: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
  // },
  // {
  //   image: "https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg",
  // },
  // {
  //   image:
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  // },
  // {
  //   image: "https://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png",
  // },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "It has been a real pleasure working with mehfooz he has been very professional and very clear in all communication which I appreciate.",
    authorName: "Ujjawal Singh",
    authorPosition: "Full-Stack-Developer",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "I am so lucky to work with you because you can bring innovative ideas and a fresh perspective on the project & you have leadership quality to compete task with your team-member.",
    authorName: "Satyam Yadav",
    authorPosition: "Backend-Developer",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "I am so glad to have the opportunity to work on this team with you and your dedication related to work is so perfect which is always help me to stay motivated.",
    authorName: "Rahul Mahagan",
    authorPosition: "MERN- Developer",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at mehfoozshaikh51@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Mumbai, India",
    description: "Serving clients worldwide",
  },
];
