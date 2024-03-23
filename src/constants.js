import img1 from './assets/gowr.jpg'
export const name = [
  {
    text: "GOWRI",
  },
  {
    text: "SHANKAR",
  },

]
export const description = [
  {
    text: "I'm",
  },
  {
    text: "a",
  },
  {
    text: "front end ",
  },
  {
    text: "developer",
  },
  {
    text: "with",
  },
  {
    text: "five",
  },
  {
    text: "years",
  },
  {
    text: "of",
  },
  {
    text: "experience",
  },
  {
    text: "in",
  },
  {
    text: "web development",
  },

]
export const perSonalDetails = {

  name: 'GOWRI SHANKAR ',
  description: "  I'm a front end developer with five years of experience in web development.",
  experience: "",
}

// }

export const projectDetails = {
  title: "E-Commerce Website",
  description: "Developed an E-commerce website using MERN stack."

}
export const About = {
  name: 'GOWRI SHANKAR',
  description: " Hi, my name is Adriano Smith and I began using WordPress when it first began. \nI’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites. One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics, I’m able to optimize complex integrations to require little-to-no maintenance while running on their own for years.",
  experience: "",
  Role: "Software Engineer",
  Birthday: "01.07.1990",
  Age: "32",
  Address: "Ave 11, New York, USA",
  Email: "tokyo@gmail.com",
  Phone: "+77 022 177 05 05",
  Nationality: "USA",
  Study: "Univercity of Texas",
  Degree: "Master",
  Freelance: "Available",
}

export const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1.',
    techStack: ['React', 'Node.js', 'Express'],
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2.',
    techStack: ['Angular', 'Java', 'Spring Boot'],
  },
  // Add more projects as needed
];

export const experiences = [
  {
    title: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    date: 'Jan 2020 - Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor et feugiat iaculis.',
  },
  // Add more experiences as needed
];

export const Testimonies = [
  {
    name: 'Gowri Shankar',
    testimony: "I have been using this app for a few months now and I can honestly say that this guy is gay.for the last ten years designing, programming and operating WordPress sites. One of my specialties is ",

  },
  {
    name: 'Gowri Shankar',
    testimony: "I have been using this app for a few months now and I can honestly say that this guy is gayfor the last ten years designing, programming and operating WordPress sites. One of my specialties is .",

  },
  {
    name: 'Gowri Shankar',
    testimony: "I have been using this app for a few months now and I can honestly say that this guy is gayfor the last ten years designing, programming and operating WordPress sites. One of my specialties is .",

  },
  {
    name: 'Gowri Shankar',
    testimony: "I have been using this app for a few months now and I can honestly say that this guy is gayfor the last ten years designing, programming and operating WordPress sites. One of my specialties is .",

  },
]

export const ServicesProvided = [
  {
    id: '01',
    serviceName: 'Web Design',
    description: "Web development is the most famous job in the world and it is very interesting... ",

  },
  {
    id: '02',
    serviceName: 'Content Writing',
    description: "Web development is the most famous job in the world and it is very interesting... ",

  },
  {
    id: '03',
    serviceName: 'Mentoring',
    description: "Web development is the most famous job in the world and it is very interesting... ",

  },
  {
    id: '04',
    serviceName: 'Live Chat',
    description: "Web development is the most famous job in the world and it is very interesting... ",

  },
  {
    id: '05',
    serviceName: 'Live Chat',
    description: "Web development is the most famous job in the world and it is very interesting... ",

  },
  {
    id: '06',
    serviceName: 'Live Chat',
    description: "Web development is the most famous job in the world and it is very interesting... ",

  },
  {
    id: '07',
    serviceName: 'Live Chat',
    description: "Web development is the most famous job in the world and it is very interesting... ",

  },
]

export const AppCss = {
  outerGrid: { height: '100vh', display: 'flex', flexDirection: 'row' },
  innerGrid: { display: 'flex', flexDirection: 'column', justifyContent: 'center', }
}
export const HomeDetailsCss = {
  customBorder: {
    border: '1px solid red',
  },
  containerVariants: {
    hidden: { x: '-10vw' },
    visible: {
      x: 0,
      transition: { type: 'spring', stiffness: 60 },
    },
  },
  outerGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  imageSize: {
    width: '75vw',
    maxWidth: '300px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  imageGrid: {
    marginLeft: '10px',
  },
  h2Variants: {
    fontWeight: 800,
    fontSize: '40px',
    // Assuming default alignment is left for larger screens
    textAlign: 'left', // Default alignment // Default font size for larger screens
    // Responsive styles
    '@media (max-width: 768px)': {
      textAlign: 'center', // Center alignment on medium screens
      fontSize: '55px', // Slightly smaller text on medium screens
    },
    '@media (max-width: 600px)': {
      textAlign: 'center', // Center alignment on small screens
      fontSize: '50px', // Reduced text size for mobile view
    },
  },
  innerGrid: {},
  innerGrid2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'left',
    width: '90vw',
    maxWidth: '30vw',
  },
  // responsiveStyle: {
  //   '@media (max-width: 768px)': {
  //     imageSize: {
  //       width: '50vw',
  //     },
  //     innerGrid2: {
  //       width: '80vw',
  //     },
  //   },
  //   '@media (max-width: 480px)': {
  //     outerGrid: {
  //       flexDirection: 'row',
  //     },
  //     h2Variants: {
  //       fontSize: '20px'
  //     },
  //     imageSize: {
  //       width: '80vw',
  //     },
  //     innerGrid2: {
  //       width: '95vw',
  //     },
  //   },
  // },
};

// Usage with styled-components or Emotion
// Example with styled-components for the imageSize

/*
import styled from 'styled-components';

const Image = styled.div`
  width: ${HomeDetailsCss.imageSize.width};
  max-width: ${HomeDetailsCss.imageSize.maxWidth};
  border-radius: ${HomeDetailsCss.imageSize.borderRadius};
  object-fit: ${HomeDetailsCss.imageSize.objectFit};
  @media (max-width: 768px) {
    width: ${HomeDetailsCss.responsiveStyle['@media (max-width: 768px)'].imageSize.width};
  }
  @media (max-width: 480px) {
    width: ${HomeDetailsCss.responsiveStyle['@media (max-width: 480px)'].imageSize.width};
  }
`;
*/

// Note: The above usage is just an example. Adapt it based on your actual component structure and styling approach.

// Add more styles as needed

export const SideNavCss = {

  outerGridCss: {
    display: 'flex',
    position: 'fixed',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    height: '100vh',
    width: '25vw',
  },

  textTransition: {
    padding: '1rem',
    color: '#B0B0B0',
    textDecoration: 'none',
    transition: 'transform 0.1s', // Add a smooth transition for the transform effect
    ":hover": {
      transform: 'scale(1.2)',
    }
  },
  IconStyle: {
    marginBottom: '-4px',
    marginRight: '5px'
  },

  linkGrid: {
    cursor: 'pointer',
    textAlign: 'center',

  },
  innerGrid: {
    textDecoration: 'none',
    textAlign: 'center',
    '@media (max-width:600px)': {
      padding: '10px',
    },

  },
  h3Variant: {
    maxWidth: '100%',
    width: '100%',
    '@media (max-width:600px)': {
      fontSize: '24px',
    },
  },
  CopyGrid: {
    padding: '1rem'
  },

}
export const AboutCss = {
  outerGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: "hidden"
  },
  imgCss: {
    width: '65vw',
    height: '70vh',
    objectFit: 'cover',

  },
  item1Grid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: '100vh',
  },

  item2Grid: {
    width: "100%",
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  item3Grid: {
    width: '65vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%'
  },
  item4Grid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '40vh',
    width: '100%'
  },

  testimonyGrid: { width: '90%', textAlign: 'center', },
  perSonalDetailGrid: { width: '65vw', borderBottom: '1px solid gray', }
}
export const ProjectContainerCss = {

  containerVariants: {
    hidden: { x: '-10%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
  },
  outerGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: 'flex-start',
    height: '100%',
    width: '65vw',
    padding: '10px',
    marginLeft: '5vw',
    marginTop: '10vh'


  },
  innerGrid1: {
    padding: '0.8rem',
    marginLeft: '3.5vw'
  },

  innerGrid2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginRight: '10px'
  },
}

export const ServicesCss = {
  outerGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-around',
    color: 'white',
    marginLeft: '8vw',
    marginTop: '15vh'
  },
  textGrid: {
    marginBottom: '5vh'
  },
  servicesGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'flex-end',

  },

  serviceGrid: {
    padding: '1.3rem',
    backgroundColor: '#333333',
    marginRight: '40px',
    marginBottom: '40px',

  },
  textContainer: {

  }

}