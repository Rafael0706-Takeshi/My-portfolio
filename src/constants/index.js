import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "DevOps Engineer",
      icon: mobile,
    },
    {
      title: "C++ Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Junior PHP Developer",
      company_name: "Symph",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Argust 2013 - May 2015",
      points: [
        "Developed backend functionalities for web applications using PHP and MySQL.",
        "Worked on REST API integrations, handling JSON and XML data for third-party services.",
        "Gained experience in deploying applications on Heroku and AWS for cloud-based projects."
      ],
    },
    {
      title: "Front End Developer",
      company_name: "TechWave Innovations",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jun 2015 - Oct 2016",
      points: [
        "Developed applications and tools using React.js, Angular.js, Vue.js, achieving code abstraction, stability, and reuse goals by 40%.",
        "Integrated frontend components with backend APIs for real time updates, increasing user engagement by 10%.",
        "Improved system usability by developing interactive single-page applications with JavaScript and RESTful APIs.",
        "Developed customer-facing single-page applications using HTML, CSS, JavaScript, and TypeScript, increasing client retention by 10%.",
        "Developed technical workﬂows to educate and train new hires, reducing onboarding time by 40%."
      ],
    },
    {
      title: "Backend Developer",
      company_name: "TechSpring Innovations",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov 2016 - Dec 2019",
      points: [
        "Designed and developed complex backend systems in Next.js and Express.js, MongoDB, enhancing system performance and reducing query times by 30%.",
        "Optimized MySQL database queries, reducing response times by 25% and improving data handling.",
        "Collaborated with frontend teams to integrate PHP backends with React-based UIs, ensuring seamless data flow. ",
        "Engineered secure RESTful API endpoints in PHP and JavaScript, enabling seamless third-party integrations with JSON and XML data formats.",
        "Automated system monitoring and performance tuning scripts, improving fault detection and resolution time.",
        "Automated testing workflows using PHP Unit, improving deployment reliability and reducing bugs in production."
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Orange and Bronze Software Labs",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Sep 2022",
      points: [
        "Led over 20 projects as a full stack developer using MERN stack and Next.js, and various DBMS.",
        "Designed REST APIs to integrate external services, adhering to OAuth2 standards for secure data access.",
        "Conducted performance and security monitoring using New Relic, improving application stability and performance by 30%.",
        "Collaborated with cross-functional teams to implement new features and resolve critical incidents using efficient debugging and monitoring tools.",
        "Updated legacy codebases and added new features based on customer feedback, increasing user retention by 30%.",
        "Utilized Agile and Waterfall methodologies in project development, leading to a 20% improvement in project delivery times.",
        "Designed and implemented monitoring dashboards for distributed systems using ELK Stack and Grafana, identifying issues proactively.",
        "Automated infrastructure provisioning and configuration using Terraform and AWS CloudFormation, reducing deployment times by 30%.",
        "Partnered with development teams to implement CI/CD pipelines with Jenkins and Kubernetes, improving release frequency and reliability.",
      ],
    },
    // {
    //   title: "DevOps Full stack Engineer",
    //   company_name: "Orange and Bronze Software Labs",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Oct 2023 - Nov 2024",
    //   points: [
    //     "Led over 20 projects as a full stack developer using MERN stack and Next.js, and various DBMS.",
    //     "Designed REST APIs to integrate external services, adhering to OAuth2 standards for secure data access.",
    //     "Conducted performance and security monitoring using New Relic, improving application stability and performance by 30%.",
    //     "Collaborated with cross-functional teams to implement new features and resolve critical incidents using efficient debugging and monitoring tools.",
    //     "Updated legacy codebases and added new features based on customer feedback, increasing user retention by 30%.",
    //     "Utilized Agile and Waterfall methodologies in project development, leading to a 20% improvement in project delivery times.",
    //     "Designed and implemented monitoring dashboards for distributed systems using ELK Stack and Grafana, identifying issues proactively.",
    //     "Automated infrastructure provisioning and configuration using Terraform and AWS CloudFormation, reducing deployment times by 30%.",
    //     "Partnered with development teams to implement CI/CD pipelines with Jenkins and Kubernetes, improving release frequency and reliability.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Dikstra Algorithm",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };