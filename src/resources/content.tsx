import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mohan",
  lastName: "A",
  name: `Mohan`,
  role: "Developer",
  avatar: "/images/avatar.jpg",
  email: "mohanavenkatesh.work@gmail.com",
  location: "Asia/Kolkata", // Chennai is in the 'Asia/Kolkata' IANA time zone
  languages: ["English","Tamil"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Contact Us</>,
  description: <>Feel free to reach out for any inquiries, collaborations, or just to say hello.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "#",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "#",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "#",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">TechieNuttppam</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Mohan, a Developer at TechieNuttppam
      {/* <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      /> */}
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mohan is a  developer passionate about building robust, scalable web applications. 
        He specializes in full-stack development, working across modern frameworks and technologies to deliver 
        high-quality digital products. Mohan thrives on solving programming challenges, optimizing performance, 
        and creating seamless user experiences through clean, maintainable code.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "TechieNuttppam",
        timeframe: "2025 - Present",
        role: "Devlopers",
        achievements: [
          "Working as a Frontend Developer, focused on building intuitive, high-performance user interfaces using modern web technologies.",
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "TechieNuttppam Project",
            width: 16,
            height: 9,
          },
        ],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Madras",
        description: <>Studied  Bachelors of Computer Science.</>,
      },
      {
        name: "Full Stack Development",
        description: <>Studied Mern Stack Development.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "JavaScript & TypeScript",
        description: (
          <>
            Proficient in modern JavaScript (ES6+) and TypeScript, building maintainable, efficient, and scalable web applications. Familiar with async/await patterns, modular code, and clean architecture.
          </>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "JavaScript code example",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "React & Next.js",
        description: (
          <>
            Experienced in developing robust user interfaces with React and Next.js. Knowledgeable in SSR, ISR, hooks, context, and API routes for full-stack app solutions.
          </>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "React/Next.js code example",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Node.js & Express",
        description: (
          <>
            Skilled in server-side development using Node.js and Express. Familiar with RESTful API design, middleware, authentication, and integrating with databases and external services.
          </>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Express",
            icon: "express",
          },
        ],
        images: [],
      },
      {
        title: "MongoDB & SQL",
        description: (
          <>
            Experienced with both NoSQL (MongoDB, Mongoose) and relational (PostgreSQL, MySQL) databases, including data modeling, queries, and performance tuning.
          </>
        ),
        tags: [
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "SQL",
            icon: "sql",
          },
        ],
        images: [],
      },
      {
        title: "Version Control & DevOps",
        description: (
          <>
            Proficient with Git/GitHub for source control, familiar with CI/CD pipelines (GitHub Actions, Vercel), and containerization using Docker.
          </>
        ),
        tags: [
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "Docker",
            icon: "docker",
          },
        ],
        images: [],
      },
      {
        title: "Testing & Quality Assurance",
        description: (
          <>
            Knowledgeable in testing strategies using Jest, React Testing Library, and Cypress to ensure code quality and reliability.
          </>
        ),
        tags: [
          {
            name: "Jest",
            icon: "jest",
          },
          {
            name: "Cypress",
            icon: "cypress",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
