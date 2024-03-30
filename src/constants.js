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
  outerGrid: {

    display: 'flex',
    flexDirection: { xs: 'column', md: 'row', sm: 'column', lg: 'column' }, // Column layout for xs, row layout for md and up
    width: '100%',
    minHeight: '100vh',
    //     height: '100vh',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     '@media (max-width:600px)': {
    //       display: 'flex',
    //       flexDirection: 'column',
    //       height: '100%',
    //       width: '100vw'
    //     },

  },
  innerGrid: {
    position: { md: 'fixed' },
    height: { xs: 'auto', }, // Full height only on md screens and up
    width: { lg: '25vw' }, // Fixed width for md screens and up
    zIndex: 1, // Ensure it sits above other content
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     backgroundColor: 'black',
    //     width: '75vw',
    //     marginLeft: '25vw',
    //     '@media (max-width:600px)': {
    //       width: '100vw',
    //       marginTop: '15vh',
    //       flexDirection: 'row',
    //       marginLeft: '-25vw',
    //     },

  },
  innerGrid2: {
    marginLeft: { md: '25vw', }, // Compensate for the SideNav width on md screens and up
    width: { xs: '100%', }, // Ensure it uses the correct width based on the screen size
    minHeight: '100vh',
    '@media (max-width:968px)': {
      maxWidth: '100%',
      marginLeft: '0'
    },

  }
}
export const SideNavCss = {

  outerGridCss: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    height: '100vh',
    width: '25vw',
    zIndex: "9999",
    '@media (max-width:968px)': {
      height: '10vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100vw',
      padding: '10px'

    },
    '@media (max-width:900px)': {
      height: '10vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100vw',
      padding: '10px'

    },
    '@media (max-width:768px)': {
      height: '12vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100vw',
      padding: '10px'

    },
    '@media (max-width:600px)': {
      height: '15vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100vw',
      padding: '10px'

    },

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
    '@media (max-width:968px)': {
      cursor: 'pointer',
      display: 'flex',

    },
    '@media (max-width:600px)': {
      cursor: 'pointer',
      display: 'flex',

    },

  },
  innerGrid: {
    textDecoration: 'none',
    textAlign: 'center',

    '@media (max-width:768px)': {
      display: 'none'
    },

  },
  h3Variant: {
    maxWidth: '100%',
    width: '100%',
    '@media (max-width: 1270px)': {
      textAlign: 'center', // Center alignment on medium screens
      fontSize: '26px', // Slightly smaller text on medium screens
    },
    '@media (max-width: 900px)': {
      textAlign: 'center', // Center alignment on medium screens
      fontSize: '26px', // Slightly smaller text on medium screens
    },
    '@media (max-width: 768px)': {
      textAlign: 'center', // Center alignment on medium screens
      fontSize: '26px', // Slightly smaller text on medium screens
    },
    // '@media (max-width:600px)': {
    //   display: 'none'
    // },
  },
  CopyGrid: {
    padding: '1rem',
    '@media (max-width:968px)': {
      display: 'none'
    },
    '@media (max-width:900px)': {
      display: 'none'
    },
    '@media (max-width:768px)': {
      display: 'none'
    },
    '@media (max-width:600px)': {
      display: 'none'
    },
  },
  bodyVariant: {
    maxWidth: '100%',
    width: '100%',
    textAlign: 'center',
    '@media (max-width: 900px)': {
      // Center alignment on medium screens
      fontSize: '22px', // Slightly smaller text on medium screens
    },
    '@media (max-width: 768px)': {
      // Center alignment on medium screens
      fontSize: '20px', // Slightly smaller text on medium screens
    },
    '@media (max-width:600px)': {
      fontSize: '20px',
    },

  }
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
    height: '100vh',
    '@media (max-width:768px)': {
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: '100vw',
    },
    '@media (max-width:600px)': {
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: '100vw',
    },
  },
  lottie: {
    maxWidth: 400,
    height: 400,

  },
  lottieGrid: {
    '@media (max-width:600px)': {
      maxWidth: 300,
      height: 300,
      // display: 'none'
    },
  },
  imageSize: {
    width: '75vw',
    maxWidth: '300px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  imageGrid: {
    // marginLeft: '10px',
  },
  h2Variants: {
    fontWeight: 800,
    fontSize: '40px',
    // Assuming default alignment is left for larger screens
    textAlign: 'left', // Default alignment // Default font size for larger screens
    // Responsive styles
    '@media (max-width: 768px)': {
      textAlign: 'center', // Center alignment on medium screens
      fontSize: '30px', // Slightly smaller text on medium screens
    },
    '@media (max-width:600px)': {
      fontSize: '35px',
      textAlign: 'left',
    },
  },
  h3Variants: {
    '@media (max-width:600px)': {
      width: '40vw',
      textAlign: 'justify'
    },
  },
  iconStyle: {
    fontSize: '2rem',
    '@media (max-width:600px)': {
      width: '40vw',
      textAlign: 'justify'
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
    '@media (max-width:600px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },

};

export const AboutCss = {
  outerGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // width: '73.5vw',
    '@media (max-width:600px)': {
      width: '100%',
      marginTop: '10vh'
    },
  },
  PersonGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width:600px)': {
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: '100%',
    },
  },
  Persons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5px',
    '@media (max-width:600px)': {
      width: '50vw',
    },
  },
  imgCss: {
    width: '65vw',
    height: '70vh',
    objectFit: 'cover',
    '@media (max-width:600px)': {
      width: '50vw',
    },
  },
  h6Variant: {
    padding: '0.8rem',
  },
  item1Grid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100vh',
    '@media (max-width:600px)': {
      width: '90vw',
      height: '100vh',
    },
  },

  item2Grid: {
    width: "100%",
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    '@media (max-width: 768px)': {
      // Center alignment on medium screens
      height: '100vh',
      marginBottom: "5vh"// Slightly smaller text on medium screens
    },
    '@media (max-width:600px)': {
      height: '100vh',

    },
  },
  item3Grid: {
    width: '65vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    '@media (max-width: 768px)': {
      // Center alignment on medium screens
      height: '90%', // Slightly smaller text on medium screens
    },
    '@media (max-width:660px)': {
      height: '90%',
      marginTop: '5vh'

    },
  },
  item4Grid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '40vh',
    width: '100%',

  },
  testimonyGrid: {
    width: '90%',
    textAlign: 'center',

    '@media (max-width:509px)': {
      width: '70vw',
      height: '100%',

    },
  },
  testimonyGrid2: {
    height: "25vh",
    marginLeft: '30px',
    '@media (max-width:509px)': {
      height: "35vh",

    },


  },
  testimonyGrid3: {
    display: 'flex',
    flexDirection: 'row',
    width: '30vw',
    height: '100%',
    textAlign: 'justify',
    padding: '10px',
    backgroundColor: 'transparent',
    border: '1px solid gray',
    '@media (max-width:509px)': {
      height: "35vh",
      width: '60vw',

    },
  },
  testimonyGrid4: { display: 'flex', flexDirection: 'row', justifyContent: 'left', marginBottom: '10px' },
  perSonalDetailGrid: {
    width: '65vw',
    borderBottom: '1px solid gray',
    '@media (max-width:600px)': {
      height: "100%"
    },
  }
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
    marginTop: '10vh',
    '@media (max-width: 509px)': {
      width: '100%', // Adjust for smaller screens
      marginLeft: '0', // Adjust for smaller screens
      padding: '5px', // Optional, adjust padding for smaller screens
      marginTop: '15vh',
      alignItems: 'center',
    }
  },
  innerGrid1: {
    padding: '0.8rem',
    marginLeft: '3.5vw',
    '@media (max-width: 509px)': {
      padding: '0.5rem', // Adjust for smaller screens
      marginLeft: '2vw', // Adjust for smaller screens
    }
  },
  innerGrid2: {
    display: "flex",
    flexDirection: "row", // Default to row layout for wider screens
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginRight: '10px',
    // Media query for mobile devices
    '@media (max-width: 509px)': {
      // flexDirection: 'row', // Stack items vertically on mobile
      alignItems: 'center',
      color: 'red' // Center items if needed
    }
  },
  description: {
    display: 'flex',
    flexDirection: "column",
    width: "30vw",
    '@media (max-width: 600px)': {
      // flexDirection: 'row', // Stack items vertically on mobile
      width: "70vw",
    }
  },
  descriptionOuter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    '@media (max-width: 600px)': {
      // flexDirection: 'row', // Stack items vertically on mobile
      width: "70vw",
    }
  },
  descriptionImage: {
    width: "70vw",
    textAlign: 'justify'
  },
}


export const ServicesCss = {
  outerGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-around',
    color: 'white',
    marginLeft: '8vw',
    marginTop: '15vh',
    width: '100vw',

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

  head: {
    padding: '0.8rem',
    width: '5vw',
    marginBottom: '10px',
    '@media (max-width: 968px)': {
      // flexDirection: 'row', // Stack items vertically on mobile
      width: '15vw',
    },
    '@media (max-width: 900px)': {
      // flexDirection: 'row', // Stack items vertically on mobile
      width: '15vw',
    },
    '@media (max-width: 768px)': {
      // flexDirection: 'row', // Stack items vertically on mobile
      width: '15vw',
    },
    '@media (max-width: 600px)': {
      // flexDirection: 'row', // Stack items vertically on mobile
      width: '15vw',
    }
  },

  serviceGrid: {
    // width: '20vw',
    padding: '1.3rem',
    backgroundColor: '#333333',
    marginRight: '40px',
    marginBottom: '40px',

  },

}
export const ContactCss = {
  contactForm: {
    marginTop: '20vh',
    '@media (max-width: 768px)': {
      // flexDirection: 'row', // Stack items vertically on mobile

    }
  }

}