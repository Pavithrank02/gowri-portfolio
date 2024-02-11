import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkIcon from '@mui/icons-material/Work';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';

const Experience = () => {

  const { theme } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0,  },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // use looping statement for rendering multiple VerticalTimeline components and data should be read from config object
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: theme === 'light' ? '#F7F7F7 ' : '#131314',
          color: theme === 'light' ? 'black' : '#FAFAFA', }}
          contentArrowStyle={{ borderRight: '7px solid black' }}
          date="2011 - present"
          iconStyle={{ background: theme === 'light' ? '#F7F7F7 ' : '#131314',
          color: theme === 'light' ? 'black' : '#FAFAFA', }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p style={{color: '#B0B0B0'}}>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: theme === 'light' ? '#F7F7F7 ' : '#131314',
          color: theme === 'light' ? 'black' : '#FAFAFA', }}
          icon={<WorkHistoryIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: theme === 'light' ? '#F7F7F7 ' : '#131314',
          color: theme === 'light' ? 'black' : '#FAFAFA', }}
          icon={<WorkHistoryIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: theme === 'light' ? '#F7F7F7 ' : '#131314',
          color: theme === 'light' ? 'black' : '#FAFAFA', }}
          icon={<WorkHistoryIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: theme === 'light' ? '#F7F7F7 ' : '#131314',
          color: theme === 'light' ? 'black' : '#FAFAFA', }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Strategy, Social Media
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: theme === 'light' ? '#F7F7F7 ' : '#131314',
          color: theme === 'light' ? 'black' : '#FAFAFA', }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            Creative Direction, User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: theme === 'light' ? '#F7F7F7 ' : '#131314',
          color: theme === 'light' ? 'black' : '#FAFAFA', }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
            Creative Direction, Visual Design
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </motion.div>
  )
}

export default Experience