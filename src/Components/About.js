import React, { useState } from 'react';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div style={{ paddingTop: '100px', textAlign: 'center' }}>
      <h1 style={{ color: '#000000' }}>About </h1>
      <img src="https://media.licdn.com/dms/image/D4D03AQH96bugvACNvQ/profile-displayphoto-shrink_800_800/0/1718415181243?e=1724889600&v=beta&t=JP-E9btXp4Fx0zmGBuBBQ-zDZHI0duCKKhi7KG_xEUk" alt="Placeholder" style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
      <h2 style={{ color: '#000000',paddingTop: '5px' }}>About This App </h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>

      <p>
      This application, a professional todo list manager, utilizes React with dynamic state management to add, delete, and display tasks. Integrated with local storage for persistent data, it features a responsive design, enhancing user productivity with efficient task management capabilities.
      </p>
      {showMore && (
        <div>
      <h3 style={{ color: '#000000' }}>About Me </h3>
      <p style={{ paddingTop: '10px' , textAlign: 'center'}}>
Syeda Rabia Hashmi is a final-year Computer Science student with a passion for AI and web development using React. Proficient in creating responsive web applications, she aims to enhance practical skills and industry knowledge. Her goal is to contribute to innovative AI solutions and web projects, advancing her expertise and improving user experiences..</p>
        </div>
      )}
      </div>
      <button onClick={toggleShowMore} style={{ backgroundColor: '#000000', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default About;