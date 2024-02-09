import img1 from './assets/gowr.jpg'
export const perSonalDetails = {
  name: 'GOWRI SHANKAR',
  description: "  I'm a front end developer with five years of experience in web development.",
  experience: "",

}

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
]

export const HomeDetailsCss = {
  customBorder: {
    border: '1px solid red',
  },
  containerVariants: {
    hidden: { x: '-30%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
  },
  outerGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30vh',
    color: 'white'
  },
  imageSize: {
    width: '300px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  h2Variants: {
    color: 'white',
    fontWeight: 800,
    fontStyle: 'italic'
  },
  innerGrid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerGrid2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',

  },
  // Add more styles as needed
};

export const SideNavCss = {

  outerGridCss: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },

  textTransition: {
    padding: '1rem',

    color: '#B0B0B0',
    transition: 'transform 0.1s', // Add a smooth transition for the transform effect
    ":hover": {
      transform: 'scale(1.2)',
      color: 'white',
    }
  },
  IconStyle: {
    marginBottom: '-4px',
    marginRight: '5px'
  },

  linkGrid: {
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center'
  },
  innerGrid: {
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

export const ProjectContainerCss = {

  containerVariants: {
    hidden: { x: '-30%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
  },
  outerGrid: {
    display: "flex",
    flexDirection: "column",
    marginTop: '15vh',
    width: '65vw ',
    marginLeft: '5vw'
  },

  innerGrid1:{
    padding: '0.7rem', 
    backgroundColor: 'lightgray', 
    borderRadius: '10px', 
    width: '20vh', 
    marginBottom: '19px',  
    marginLeft: '20px'
  },
  innerGrid2:{
    display: "flex", 
    flexDirection: "row", 
    flexWrap: 'wrap',
  },
}

export const ServicesCss= {
  outerGrid: {
    display: "flex",
    flexDirection: "column",
    marginTop: '15vh',
    width: '65vw ',
    marginLeft: '7vw',
    color: 'white',
  },
  textGrid: {
    marginBottom: '5vh',
  },
  servicesGrid:{
    display: 'flex', 
    flexDirection: 'row', 

  }, 
  serviceGrid: {
    display: 'flex',
    flexDirection: 'column', 
    padding: '1rem',
    justifyContent: 'space-around',
    backgroundColor: '#333333',
    width: '17vw',
    height: '40vh',
    padding: '1.4rem',
    marginRight: '20px', 
    marginBottom: '20px'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '20vh',
    marginTop: '-1rem'

  }

}