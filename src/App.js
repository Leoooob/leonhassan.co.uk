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
        <p>I am currently working as a SAPUI5 \& Fiori developer and trying to update your average enterprise software to be a little more modern. </p>
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

const aSkillObjs = [{
    exp: 5,
    name: "JavaScript",
    desc: "Leon writes JavaScript day-to-day and looks to make use of new ECMAScript features where he can."
  },
  {
    exp: 5,
    name: "CSS",
    desc: "Leon is an advocate of using CSS to it's maximum rather than writing some dodgy JS to create the same effect as a few lines of smart styling."
  },
  {
    exp: 5,
    name: "HTML",
    desc: "Leon has been following HTML standards since learning about the power of semantic mark-up and how difficult browsing the web can be for those that rely on accessibility features of the web."
  },
  {
    exp: 3,
    name: "Node.js",
    desc: "Leon has used Node extensively from creating a middleman REST server for SAP System Cloud Automation to his local development environment."
  },
  {
    exp: 1,
    name: "React",
    desc: "Leon is new to React but not the underlying idea of abstracting code to the component-level and is well underway with presenting React as a modern alternative to SAPUI5."
  },
  {
    exp: 2,
    name: "SAPUI5",
    desc: "Leon uses SAPUI5 as his bread and butter work and is deeply familiar with the framework."
  },
  {
    exp: 0,
    name: "Web APIs",
    desc: "Leon follows the new Web Standards and APIs and is trying to engage with them at the explainer level to better understand how the web works."
  },
  {
    exp: 2,
    name: "SAP",
    desc: "Leon has gained invaluable experience in both Gateway and S4Hana systems through high-profile engagements."
  },
  {
    exp: 2,
    name: "Fiori",
    desc: "Leon quickly got to grips with Fiori 2.0 design principals and is currently focusing on increasing the UISmart team capability of frameworks outside of SAPUI5 with the advent of Fiori 3.0"
  },
  {
    exp: 0,//3,
    name: "Design Thinking",
    desc: "Leon is an advocate of the Design Thinking toolset and believes collaboration between developers, designers, business leads and the end user is essential to build something great."
  },
  {
    exp: 0,//4,
    name: "Agile",
    desc: "Leon has worked in Agile teams throughout his career and has been an evangalist for Agile Methodologies since joining Capgemini, showcasing the difference between an Agile delivery vs Wagile or Waterfall."
  },
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
        <SkillWall aSkills={aSkillObjs} />
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

function updateText(skill, desc, exp) {
  this.setState({skill, desc, exp});
}

class SkillBricks extends SkillWall {
  render() {
    var skillComponents = this.props.aSkillList.map(function(oSkill, iKey) {
      function onClickUpdateText(oEvent) {
        let sSkill = oEvent.target.textContent;
        let sDesc = oEvent.target.dataset.desc;
        let iExp = oEvent.target.dataset.exp;
        
        updateText(sSkill, sDesc, iExp);
      }
      return <li data-desc={oSkill.desc} data-exp={oSkill.exp} key={iKey} onClick={(e) => onClickUpdateText(e)}>{oSkill.name}</li>;
    });
    
    return <ul className="skills-list">{skillComponents}</ul>;
  }
}

class SkillDescription extends SkillWall {
  constructor(props) {
    super(props);
    this.state = {
      skill: "Skill Description",
      exp: 0,
      desc: "Click on a skill for some more information"
    };
    
    updateText = updateText.bind(this);
  }

  renderExperienceSpan(iSkillExp) {
    if (iSkillExp > 0) {
      return <span>{iSkillExp} years exp</span>;
    }
  }

  render() {
    let sSkill = this.state.skill;
    var sSkillDesc = this.state.desc;
    var iSkillExp = this.state.exp;

    // TODO: use js to create element, if exp > 0 append child to div
    return (
      <div className="skill-description">
        <h3>{sSkill}</h3>
        <p>{sSkillDesc}</p>
        {this.renderExperienceSpan(iSkillExp)}
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
          <p>I have worked for over a year at a secure project and I am currently the UI Development lead at this project. My responsibilities include running workshops with the client, designing & architecting Fiori solutions, developing UI5 applications, organise code reviews and run our daily development stand-up.</p>
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
          <p>At IBM I worked as a database administrator for the DEFRA account day-to-day, in my spare time I persued my interests in the form of internal projects and hackathons. In my year at IBM I attended and won 3 hackathons, one of which I presented to the event sponsor, Robert LeBlanc - IBM Senior VP of Cloud.</p>
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
