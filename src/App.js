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
        <p>I am currently working as a SAPUI5 &amp; Fiori developer and trying to update your average enterprise software to be a little more modern. </p>
        <p>If you would like to get in touch, you can find me at the below links or email <strong>me<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><title>@</title><desc>at symbol</desc><path class="iconSecondary" d="M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>leonhassan.co.uk</strong>.</p>
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
    desc: "Leon is an advocate of using CSS to it's maximum rather than writing flaky JS to create the same effect as a few lines of smart styling."
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
    desc: "Leon has worked in Agile teams throughout his career and has been an evangelist for Agile Methodologies since joining Capgemini, showcasing the difference between an Agile delivery vs Wagile or Waterfall."
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
  this._setState({skill, desc, exp});
}

class SkillBricks extends SkillWall {
  render() {
    let skillComponents = this.props.aSkillList.map(function(oSkill, iKey) {
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
    this._initState = {
      skill: "Skill Description",
      exp: 0,
      desc: "Click on a skill for some more information."
    };

    this.state = this._initState;

    updateText = updateText.bind(this);
  }

  _resetState(){
    this.setState(this._initState);
  }

  _setState(oState) {
    let newState = (oState.skill === this.state.skill) ? this._initState : oState;
    this.setState(newState);
  }

  _renderExperienceSpan(iSkillExp) {
    if (iSkillExp > 0) {
      return <span>{iSkillExp} years exp</span>;
    }
  }

  render() {
    let sSkill = this.state.skill;
    let sSkillDesc = this.state.desc;
    let iSkillExp = this.state.exp;

    return (
      <div className="skill-description">
        <h3>{sSkill}</h3>
        <p>{sSkillDesc}</p>
        {this._renderExperienceSpan(iSkillExp)}
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
          <p>Leon has worked for over a year at a secure project and is currently the UI Development Lead at this project. His responsibilities include running workshops with the client, designing &amp; architecting Fiori solutions, developing UI5 applications, organising code reviews and running the daily development stand-up.</p>
          <p>While at Capgemini Leon has also helped to develop a cloud automation tool for SAP systems, created standard training for those joining the SAP practice and organised a CodeJam.</p>
          <ReadMoreLink company="Capgemini" tag="capgemini" />
        </section><hr/>

        <section>
          <h3>Atebol Interactive</h3>
          <span>June 2016 - December 2016</span>
          <p>Atebol is a publishing company based in Aberystwyth, Leon worked here during the summer until January exams. During this time Leon was able to build web applications using Angular.js &amp; jQuery, he also worked closesly with a number of content-management systems such as Joomla and OpenCart.</p>
        </section><hr/>

        <section>
          <h3>IBM</h3>
          <span>June 2015 - June 2016 (Industral Year)</span>
          <p>At IBM Leon worked as a database administrator for the DEFRA account, in his spare time he persued more challenging internal projects and took part in hackathons over a few weekends. During Leon's year at IBM he attended and won a number hackathons, some of which he went on to present to Robert LeBlanc (Senior VP of Cloud) and Damon Deaner (Director of Employee Experience &amp; HR Design).</p>
          <ReadMoreLink company="IBM" tag="ibm" />
        </section><hr/>

        <section>
          <h3>Bottomline Technology</h3>
          <span>June 2014 - September 2014</span>
          <p>Leon worked as a QA Engineer over the Summer to gain a deeper understanding of delivering software and agile methodologies. In this role he introduced automated testing to his particular project, specifically regression testing that could be plugged into their Jenkins CI pipeline. Leon used RobotFramework (Selenium-based) with Python bindings to write plain-text scripts, for the particular product he was working on he also made use of the Gmail API to automate user-actions prompted by emails.</p>
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
