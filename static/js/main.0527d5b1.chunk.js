(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),l=(a(16),a(6)),s=a(1),c=a(2),u=a(4),m=a(3),d=a(5),h=(a(18),a(9)),p=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(f,null))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Leon Hassan"),r.a.createElement("p",null,"I am currently working as a SAPUI5 & Fiori developer and trying to update your average enterprise software to be a little more modern. "),r.a.createElement("p",null,"If you would like to get in touch, you can find me at the below links or email ",r.a.createElement("strong",null,"me",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"icon",alt:"at symbol"},r.a.createElement("title",null,"@"),r.a.createElement("desc",null,"at symbol"),r.a.createElement("path",{className:"iconSecondary",d:"M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})),"leonhassan.co.uk"),"."),r.a.createElement(g,null))}}]),t}(r.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"glyphs"},r.a.createElement("span",null,r.a.createElement("a",{href:"https://github.com/Leoooob",rel:"noopener noreferrer",target:"_blank"},"GitHub")),r.a.createElement("span",null,r.a.createElement("a",{href:"https://twitter.com/Consulting_LH/",rel:"noopener noreferrer",target:"_blank"},"Twitter")),r.a.createElement("span",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/leonhassan/",rel:"noopener noreferrer",target:"_blank"},"LinkedIn")))}}]),t}(b),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainContent"},r.a.createElement(w,null),r.a.createElement(j,null))}}]),t}(r.a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("aside",null,r.a.createElement("div",{className:"location"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"icon"},r.a.createElement("path",{className:"iconPrimary",d:"M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}),r.a.createElement("path",{className:"iconSecondary",d:"M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z"})),r.a.createElement("span",null,"Southampton, UK")),r.a.createElement("h2",null,"Skills Wall"),r.a.createElement(y,null))}}]),t}(r.a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"skill-wall"},r.a.createElement(E,null),r.a.createElement(k,null))}}]),t}(r.a.Component);function v(e,t,a){this._setState({skill:e,desc:t,exp:a})}var E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=h.map(function(e,t){return r.a.createElement("li",{"data-desc":e.desc,"data-exp":e.exp,key:t,onClick:function(e){var t;v((t=e).target.textContent,t.target.dataset.desc,t.target.dataset.exp)}},e.name)});return r.a.createElement("ul",{className:"skills-list"},e)}}]),t}(y),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e)))._initState={skill:"Skill Description",exp:0,desc:"Click on a skill for some more information."},a.state=a._initState,v=v.bind(Object(l.a)(Object(l.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"_resetState",value:function(){this.setState(this._initState)}},{key:"_setState",value:function(e){var t=e.skill===this.state.skill?this._initState:e;this.setState(t)}},{key:"_renderExperienceSpan",value:function(e){if(e>0)return r.a.createElement("span",null,e," years exp")}},{key:"render",value:function(){var e=this.state.skill,t=this.state.desc,a=this.state.exp;return r.a.createElement("div",{className:"skill-description"},r.a.createElement("h3",null,e),r.a.createElement("p",null,t),this._renderExperienceSpan(a))}}]),t}(y),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("h2",null,"Experience"),r.a.createElement("section",null,r.a.createElement(O,{company:"Capgemini",title:"Front-End Developer",endDate:"",startDate:"June 2017"}),r.a.createElement("p",null,"Leon has worked for over a year at a secure project and is currently the UI Development Lead at this project. His responsibilities include running workshops with the client, designing & architecting Fiori solutions, developing UI5 applications, organising code reviews and running the daily development stand-up."),r.a.createElement("p",null,"While at Capgemini Leon has also helped to develop a cloud automation tool for SAP systems, created standard training for those joining the SAP practice and organised a CodeJam."),r.a.createElement(S,{company:"Capgemini",tag:"capgemini"})),r.a.createElement("hr",null),r.a.createElement("section",null,r.a.createElement(O,{company:"Atebol Interactive",title:"Web Developer",endDate:"December 2016",startDate:"June 2016"}),r.a.createElement("p",null,"Atebol is a publishing company based in Aberystwyth, Leon worked here during the summer until January exams. During this time Leon was able to build web applications using Angular.js & jQuery, he also worked closesly with a number of content-management systems such as Joomla and OpenCart.")),r.a.createElement("hr",null),r.a.createElement("section",null,r.a.createElement(O,{company:"IBM",title:"Risks and Issues Coordinator",endDate:"June 2016",startDate:"June 2015"}),r.a.createElement("p",null,"At IBM Leon worked as a database administrator for the DEFRA account, in his spare time he persued more challenging internal projects and took part in hackathons over a few weekends. During Leon's year at IBM he attended and won a number hackathons, some of which he went on to present to Robert LeBlanc (Senior VP of Cloud) and Damon Deaner (Director of Employee Experience & HR Design)."),r.a.createElement(S,{company:"IBM",tag:"ibm"})),r.a.createElement("hr",null),r.a.createElement("section",null,r.a.createElement(O,{company:"Bottomline Technology",title:"Front-End Developer",endDate:"September 2014",startDate:"June 2014"}),r.a.createElement("p",null,"Leon worked as a QA Engineer over the Summer to gain a deeper understanding of delivering software and agile methodologies. In this role he introduced automated testing to his particular project, specifically regression testing that could be plugged into their Jenkins CI pipeline. Leon used RobotFramework (Selenium-based) with Python bindings to write plain-text scripts, for the particular product he was working on he also made use of the Gmail API to automate user-actions prompted by emails.")))}}]),t}(r.a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"_renderCompany",value:function(){return r.a.createElement("h3",null,this.props.company)}},{key:"_renderTitle",value:function(){return r.a.createElement("h4",null,this.props.title)}},{key:"_renderEndDate",value:function(){return r.a.createElement("span",null,this.props.endDate?this.props.endDate:"Present")}},{key:"_renderStartDate",value:function(){return r.a.createElement("span",null,this.props.startDate)}},{key:"render",value:function(){return r.a.createElement("div",{className:"headings"},this._renderCompany(),this._renderTitle(),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"icon"},r.a.createElement("path",{className:"iconPrimary",d:"M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 5v10h14V9H5z"}),r.a.createElement("path",{className:"iconSecondary",d:"M7 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z"})),this._renderEndDate(),this._renderStartDate())}}]),t}(j),S=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"readMore"},r.a.createElement("a",{href:"https://blog.leonhassan.co.uk/tag/"+this.props.tag,rel:"noopener noreferrer",target:"_blank"},"Read more about my experience at ",this.props.company," here.",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"icon"},r.a.createElement("path",{className:"iconPrimary",d:"M12 8a1 1 0 0 1-1 1H5v10h10v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6a1 1 0 0 1 1 1z"}),r.a.createElement("path",{className:"iconSecondary",d:"M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41z"}))))}}]),t}(j),x=p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e){e.exports=[{exp:5,name:"JavaScript",desc:"Leon writes JavaScript day-to-day and looks to make use of new ECMAScript features where he can."},{exp:5,name:"CSS",desc:"Leon is an advocate of using CSS to it's maximum rather than writing flaky JS to create the same effect as a few lines of smart styling."},{exp:5,name:"HTML",desc:"Leon has been following HTML standards since learning about the power of semantic mark-up and how difficult browsing the web can be for those that rely on accessibility features of the web."},{exp:3,name:"Node.js",desc:"Leon has used Node extensively from creating a middleman REST server for SAP System Cloud Automation to his local development environment."},{exp:1,name:"React",desc:"Leon is new to React but not the underlying idea of abstracting code to the component-level and is well underway with presenting React as a modern alternative to SAPUI5."},{exp:2,name:"SAPUI5",desc:"Leon uses SAPUI5 as his bread and butter work and is deeply familiar with the framework."},{exp:0,name:"Web APIs",desc:"Leon follows the new Web Standards and APIs and is trying to engage with them at the explainer level to better understand how the web works."},{exp:2,name:"SAP",desc:"Leon has gained invaluable experience in both Gateway and S4Hana systems through high-profile engagements."},{exp:2,name:"Fiori",desc:"Leon quickly got to grips with Fiori 2.0 design principals and is currently focusing on increasing the UISmart team capability of frameworks outside of SAPUI5 with the advent of Fiori 3.0"},{exp:0,name:"Design Thinking",desc:"Leon is an advocate of the Design Thinking toolset and believes collaboration between developers, designers, business leads and the end user is essential to build something great."},{exp:0,name:"Agile",desc:"Leon has worked in Agile teams throughout his career and has been an evangelist for Agile Methodologies since joining Capgemini, showcasing the difference between an Agile delivery vs Wagile or Waterfall."}]}},[[10,2,1]]]);
//# sourceMappingURL=main.0527d5b1.chunk.js.map