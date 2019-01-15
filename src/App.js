import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Body/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Leon Hassan</h1>
        <p>I'm currently working as a SAPUI5 & Fiori developer and trying to update your average enterprise software to be a little more modern. </p>
        <p>If you would like to get in touch, you can find me at the below links or email <strong>me(at)leonhassan(dot)co(dot)uk</strong>.</p>
        <ContactGlyphs/>
      </header>
    );
  }
}

class ContactGlyphs extends Header {
  render() {
    return (
      <div className="glyphs">
        <span>
          <a href="https://github.com/Leoooob" rel="noopener noreferrer" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon"><path className="iconPrimary" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" /></svg>
          </a>
        </span>
        <span>
          <a href="https://twitter.com/Consulting_LH/" rel="noopener noreferrer" target="_blank">
            Twitter
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/leonhassan/" rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
        </span>
      </div>
    );
    // TODO: ADD GLYPHS FOR GITHUB, TWITTER, LINKEDIN AND EMAIL
  }
}

class Body extends React.Component {
  render() {
    return (
      <div className="mainContent">
        <Aside/>
        <Content/>
      </div>
    );
  }
}

const aSkills = [
  "JavaScript",
  "CSS",
  "HTML",
  "Node.js",
  "SAPUI5",
  "SAP",
  "Fiori",
  "React",
  "Vue.js",
  "PWA",
  "Design Thinking",
  "Agile"
];

class Aside extends React.Component {
  render() {
    return (
      <aside>
        <div className="location">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon"><path className="iconPrimary" d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path className="iconSecondary" d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z"/></svg>
          <span>Southampton, UK</span>
        </div>
        <h2>Skills Wall</h2>
        <SkillWall aSkills={aSkills} />
      </aside>
    );
  }
}

class SkillWall extends React.Component {
  render() {
    return (
      <div className="skill-wall">
        <SkillBricks aSkillList={this.props.aSkills} />
        <SkillDescription />
      </div>
    );
  }
}

function updateText(skill, desc) {
  this.setState({skill, desc});
}

class SkillBricks extends SkillWall {
  render() {
    // TODO: map both skill name and description to the list item
    var skillComponents = this.props.aSkillList.map(function(sSkill, iKey) {
      return <li data-desc="testing" key={iKey} onClick={(e) => updateText(e.target.textContent, e.target.dataset.desc)}>{sSkill}</li>;
    });
    
    return <ul className="skills-list">{skillComponents}</ul>;
  }
}

class SkillDescription extends SkillWall {
  constructor(props) {
    super(props);
    this.state = {
      skill: "",
      desc: "Click on a skill for it's description"
    };
    
    updateText = updateText.bind(this);
  }
  render() {
    let sSkill = this.state.skill;
    var sSkillDesc = this.state.desc;

    //return <div className="skill-description">{sSkill}{sSkillDesc}</div>;
    return (
      <div className="skill-description">
        <h3>{sSkill}</h3>
        <p>{sSkillDesc}</p>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <main>
        <h2>Experience</h2>
        <section>
          <h3>Capgemini</h3>
          <span>June 2017 - Present</span>
          <p>I have worked for over a year at a secure project and I am currently the UI Development lead at this project. My responsibilities include running workshops with the client, designing & architecting Fiori solutions, developing UI5 applications, organise code reviews and run our team's daily development stand-up.</p>
          <p>While at Capgemini I have also helped to develop a cloud automation tool for SAP systems, created standard training for those joining the SAP practice and organised a CodeJam.</p>
          <ReadMoreLink company="Capgemini" tag="capgemini" />
        </section><hr/>

        <section>
          <h3>Atebol Interactive</h3>
          <span>June 2016 - December 2016</span>
          <p>Atebol is a publishing company based in Aberystwyth, I worked here during my final year of university (and preceeding summer). During this time I was able to build web applications using the Angular.js framework and work closesly with a number of content-management systems such as Joomla and OpenCart.</p>
        </section><hr/>

        <section>
          <h3>IBM</h3>
          <span>June 2015 - June 2016 (Industral Year)</span>
          <p>At IBM I worked as a database administrator for the DEFRA account day-to-day, in my spare time I persued my interests in the form of internal projects and hackathons. In my year at IBM I attended and won 3 hackathons, one of which I presented to the event's sponsor, Robert LeBlanc - IBM USA's Senior VP of Cloud.</p>
          <ReadMoreLink company="IBM" tag="ibm" />
        </section><hr/>

        <section>
          <h3>Bottomline Technology</h3>
          <span>June 2014 - September 2014</span>
          <p>I worked at Bottomline as a QA Engineer and focused on introducing automated testing, specifically regression testing on new releases and features that could be plugged into the Jenkins Continuous Integration pipeline. I used RobotFramework with Python bindings to write my scripts, for the particular product I was working on I also used the Gmail API to automate some user actions prompted by emails.</p>
        </section>
      </main>
    );
  }
}

class ReadMoreLink extends Content {
  render() {
    return (
      <div className="readMore">
        <a href={"https://blog.leonhassan.co.uk/tag/" + this.props.tag} rel="noopener noreferrer" target="_blank">
          Read more about my experience at {this.props.company} here. 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon"><path className="iconPrimary" d="M12 8a1 1 0 0 1-1 1H5v10h10v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6a1 1 0 0 1 1 1z"/><path className="iconSecondary" d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41z"/></svg>
        </a>
      </div>
    );
  }
}

export default App;
