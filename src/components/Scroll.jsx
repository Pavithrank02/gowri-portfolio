import React from 'react';
import { Link } from 'react-scroll';

const Section = () => {
  return (
    <div>
      <h1>Section</h1>
      <Link
        activeClass="active"
        to="componentB"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Scroll to Component B
      </Link>
    </div>
  );
};

export default Section;
