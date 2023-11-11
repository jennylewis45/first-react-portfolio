// import React from 'react';
// import './styles.css';

// const About = () => {
//   return (
//     <div className="about-container">
//       <section className="about-section">
//         <h2>About Me</h2>
//         <p>I am a passionate [Your Profession] with a strong background in [Your Field]. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor libero eget velit tristique, at auctor nisl luctus.</p>

//         <div className="skills-section">
//           <h3>Skills</h3>
//           <ul>
//             <li>Web Development</li>
//             <li>React.js</li>
//             <li>JavaScript</li>
//             <li>HTML</li>
//             <li>CSS</li>
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default About;
import React from 'react';
import './styles.css';
import 'animate.css/animate.min.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section animate__animated animate__fadeIn">
        <h2>About Me</h2>
        <p className="animate__animated animate__fadeIn animate__delay-1s">
          I am a passionate developer with a strong background in web development. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor libero eget velit tristique, at auctor nisl luctus.
        </p>

        <div className="skills-section animate__animated animate__fadeIn animate__delay-2s">
          <h3>Skills</h3>
          <ul>
            <li>Web Development</li>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
