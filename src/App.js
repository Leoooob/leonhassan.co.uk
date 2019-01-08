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
            GitHub
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
      <div className="skillWall">
        <SkillBricks aSkillList={this.props.aSkills} />
        <SkillDescription/>
      </div>
    );
  }
}

class SkillBricks extends SkillWall {
  render() {
    // TODO: map both skill name and description to the list item
    var skillComponents = this.props.aSkillList.map(function(sSkill, iKey) {
      return <li key={iKey}>{sSkill}</li>;
    });
    
    return <ul className="skillsList">{skillComponents}</ul>;
  }
}

class SkillDescription extends SkillWall {
  render() {
    return (
      <div>

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
