import React, { Component } from "react";
import "./App.css";
import Skills from "./data/skills.json";
import Experience from "./data/experience.json";

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
        <p>I am currently working as a lead front-end developer and trying to make your average enterprise software a little less painful and a lot more modern. </p>
        <p>If you would like to get in touch, you can find me at the below links or email <strong>me<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" alt="at symbol"><title>@</title><desc>at symbol</desc><path className="icon-secondary" d="M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>leonhassan.co.uk</strong>.</p>
        <ContactGlyphs/>
      </header>
    ); // TODO: add blog nav-button to top-right of header
  }
}

class ContactGlyphs extends Header {
  render() {
    return (
      <div className="glyphs">
        <span>
          <a href="https://github.com/Leoooob/" rel="noopener noreferrer" target="_blank">
            GitHub<span className="print-only-view">: Leoooob</span>
          </a>
        </span>
        <span>
          <a href="https://twitter.com/Consulting_LH/" rel="noopener noreferrer" target="_blank">
            Twitter<span className="print-only-view">: Consulting_LH</span>
          </a>
        </span>
        <span>
          <a href="https://blog.leonhassan.co.uk/" rel="noopener noreferrer" target="_blank">
            Blog<span className="print-only-view">.leonhassan.co.uk</span>
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/leonhassan/" rel="noopener noreferrer" target="_blank">
            LinkedIn<span className="print-only-view">: leonhassan</span>
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
      <div className="main-content">
        <Aside/>
        <Content/>
      </div>
    );
  }
}

class Aside extends React.Component {
  render() {
    return (
      <aside>
        <div className="location">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon"><path className="icon-primary" d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path className="icon-secondary" d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z"/></svg>
          <span>Southampton, UK</span>
        </div>
        <h2>Skills Wall</h2>
        <SkillWall/>
      </aside>
    );
  }
}

class SkillWall extends React.Component {
  render() {
    return (
      <div className="skill-wall">
        <SkillBricks />
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
    let skillComponents = Skills.map(function(oSkill, iKey) {
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
      exp: 0,
      skill: "Skill Description",
      desc: "Click on a skill for some more information."
    };

    this.state = this._initState;

    updateText = updateText.bind(this);
  }

  _resetState() {
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
    let ExperienceContent = Experience.map(function(section, iKey) {
      return <ExperienceItem key={iKey} entry={section} />;
    });

    return (
      <main>
        <h2>Experience</h2>
        {ExperienceContent}
      </main>
    );
  }
}

class ExperienceItem extends Content {
  _renderReadMoreLink(sCompany, sTag) {
    return <ReadMoreLink company={sCompany} tag={sTag} />;
  }

  render() {
    var oEntry = this.props.entry;
    var sCompany = oEntry.company;
    var sTitle = oEntry.title;
    var sEndDate = oEntry.endDate;
    var sStartDate = oEntry.startDate;
    var bReadMore = oEntry.bReadMore;
    var sTag = oEntry.tag;
    var aDescription = oEntry.description;

    var description = aDescription.map(function(paragraph, iKey) {
      return <p key={iKey}>{paragraph}</p>;
    });

    return (
      <section>
        <ExperienceHeadings company={sCompany} title={sTitle} endDate={sEndDate} startDate={sStartDate} />
        {description}
        {(bReadMore) ? this._renderReadMoreLink(sCompany, sTag) : null}
        <hr />
      </section>
    );
  }
}

class ExperienceHeadings extends Content {
  _renderCompany() {
    return <h3>{this.props.company}</h3>;
  }

  _renderTitle() {
    return <h4>{this.props.title}</h4>;
  }

  _renderEndDate() {
    return <span>{this.props.endDate ? this.props.endDate : "Present"}</span>;
  }

  _renderStartDate() {
    return <span>{this.props.startDate}</span>;
  }

  render() {
    return (
      <div className="headings">
        {this._renderCompany()}
        {this._renderTitle()}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon"><path className="icon-primary" d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 5v10h14V9H5z"/><path className="icon-secondary" d="M7 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z"/></svg>
        {this._renderEndDate()}
        {this._renderStartDate()}
      </div>
    );
  }
}

class ReadMoreLink extends Content {
  _getLink() {
    const link = `https://blog.leonhassan.co.uk/tag/${this.props.tag}/`;
    return link;
  }

  render() {
    return (
      <div className="read-more">
        <a href={this._getLink()} rel="noopener noreferrer" target="_blank">
          <span class="web-text">{`Read more about my experience at ${this.props.company} here`}</span>
          <span class="print-only-view">{`Read more at ${this._getLink()}`}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon"><path className="icon-primary" d="M12 8a1 1 0 0 1-1 1H5v10h10v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6a1 1 0 0 1 1 1z"/><path className="icon-secondary" d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41z"/></svg>
        </a>
      </div>
    );
  }
}

export default App;
