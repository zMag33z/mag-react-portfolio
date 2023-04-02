import React from 'react';


export default function Resume() {
  return (
    <>
      <section className="personal">
        <h3>Resume</h3>
          <div className="labels border-left">

            <h3>Me</h3>
            <p>Crystal Ripple</p>

            <h3>Location</h3>
            <p>Brenham, Tx  77833</p>

            <h3>Education</h3>
              <div className='skills'>
                <div className='skill-type'>
                  <h4>Blinn College</h4>
                  <p>one education</p>
                </div>
                <div className='skill-type'>
                  <h4>UT at Austin</h4>
                  <p>two education</p>
                </div>
              </div>

            <h3>Skills</h3>
              <div className="skills">
                <div className="skill-type">
                  <h4>Font-End</h4>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>APIs</li>
                      <li>Bootstrap</li>
                      <li>GIT</li>
                    </ul>
                </div>

                <div className="skill-type">
                  <h4>Back-End</h4>
                    <ul>
                      <li>Node.Js</li>
                      <li>Jest</li>
                      <li>Express.js</li>
                      <li>MySQL</li>
                      <li>Sequelize</li>
                      <li>Object-Relational Mapping(ORM)</li>
                      <li>Model-View-Controller (MVC)</li>
                    </ul>
                </div>

                <div className="skill-type">
                  <h4>Performant Technologies</h4>
                    <ul>
                      <li>NoSQL</li>
                      <li>Progressive Web Applications (PWA)</li>
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                      <li>GraphQL</li>
                      <li>React</li>
                      <li>MERN</li>
                      <li>State</li>
                    </ul>
                </div>

              </div>

          </div>
        </section>
    </>
  );
}