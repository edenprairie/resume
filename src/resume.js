import React, { Component } from 'react';
import './resume.css';

class Resume extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div id="resume">
                <header className="clear" id="header">
                    <img className="picture" alt="Jun Wang" src={require('./junwang.jpg')}></img>
                    <div className="middle">
                        <h1 className="name">Jun Wang</h1>
                        <h2 className="label">Director of Software Engineering</h2>
                    </div>
                    <span className="location">
                        <span className="city">Eden Prairie,</span>
                        <span className="region"> MN</span>
                        <span className="postalCode"> 55346</span>
                    </span>
                    <div id="contact">
                        <div className="website">
                            <span className="fa fa-external-link"></span>
                            <a href="https://resume.junwang.us" target="_blank" rel="noopener noreferrer">https://resume.junwang.us</a>
                        </div>
                        <div className="email">
                            <span className="fa fa-envelope-o"></span>
                            <a href="mailto:junwang01@gmail.com">junwang01@gmail.com</a>
                        </div>
                    </div>
                    <div id="profiles">
                        <div className="item">
                            <div className="username">
                                <span className="fa fa-linkedin linkedin social"></span>
                                <span className="url">
                                    <a href="https://www.linkedin.com/in/junwang03/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="username">
                                <span className="fa fa-github github social"></span>
                                <span className="url"><a href="https://github.com/edenprairie" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="username">
                                <span className="fa fa-file-pdf-o"></span>
                                <span className="url"><a href={require('./JunWangResume.pdf')}>Download</a></span>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="section main-summary">
                    <section>
                        <div>
                            <p>Director of Software Engineering with 20+ years of experience leading engineering organizations, platform architecture, and AI-driven transformation in healthcare and e-commerce. Proven track record of scaling shared platforms that serve millions of members, modernizing legacy systems in the cloud, and applying generative AI to complex clinical workflows. Known for servant leadership, growing engineering talent, and driving measurable business outcomes.</p>
                        </div>
                    </section>
                </section>
                <section className="section margin1">
                    <header>
                        <h2 className="section-title">Skills</h2>
                    </header>
                    <section id="skills">
                        <div className="item">
                            <h3 className="name">
                                AI / Machine Learning
                            </h3>
                            <div className="level advanced">
                                <em>Advanced</em>
                                <div className="bar"></div>
                            </div>
                            <ul className="keywords">
                                <li>Generative AI</li>
                                <li>LLM &amp; RAG</li>
                                <li>Azure OpenAI</li>
                                <li>Prompt Engineering</li>
                                <li>Model Evaluation</li>
                            </ul>
                        </div>
                        <div className="item">
                            <h3 className="name">
                                Micro Service Web API
                            </h3>
                            <div className="level advanced">
                                <em>Advanced</em>
                                <div className="bar"></div>
                            </div>
                            <ul className="keywords">
                                <li>REST</li>
                                <li>gRPC</li>
                                <li>GraphQL</li>
                                <li>JWT</li>
                                <li>SOAP</li>
                            </ul>
                        </div>
                        <div className="item">
                            <h3 className="name">
                                Cloud Services
                            </h3>
                            <div className="level advanced">
                                <em>Advanced</em>
                                <div className="bar"></div>
                            </div>
                            <ul className="keywords">
                                <li>Azure</li>
                                <li>Amazon Web Services</li>
                                <li>Kubernetes</li>
                                <li>Terraform</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                        <div className="item">
                            <h3 className="name">
                                SQL, No-SQL
                            </h3>
                            <div className="level advanced">
                                <em>Advanced</em>
                                <div className="bar"></div>
                            </div>
                            <ul className="keywords">
                                <li>MSSQL</li>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>Elasticsearch</li>
                                <li>Kafka</li>
                            </ul>
                        </div>
                        <div className="item">
                            <h3 className="name">
                                DevSecOps
                            </h3>
                            <div className="level advanced">
                                <em>Advanced</em>
                                <div className="bar"></div>
                            </div>
                            <ul className="keywords">
                                <li>GitHub Actions</li>
                                <li>Azure DevOps</li>
                                <li>CI/CD Pipeline</li>
                                <li>Jenkins</li>
                                <li>Vulnerability Management</li>
                                <li>Splunk</li>
                                <li>Dynatrace</li>
                            </ul>
                        </div>
                        <div className="item">
                            <h3 className="name">
                                Application Development
                            </h3>
                            <div className="level advanced">
                                <em>Advanced</em>
                                <div className="bar"></div>
                            </div>
                            <ul className="keywords">
                                <li>.NET Core</li>
                                <li>Java</li>
                                <li>Spring Boot</li>
                                <li>Python</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>
                        <div className="item">
                            <h3 className="name">
                                Design Pattern
                            </h3>
                            <div className="level advanced">
                                <em>Advanced</em>
                                <div className="bar"></div>
                            </div>
                            <ul className="keywords">
                                <li>creational</li>
                                <li>structural</li>
                                <li>behavioral</li>
                                <li>The Twelve-Factor App</li>
                            </ul>
                        </div>
                        <div className="item">
                            <h3 className="name">
                                Test Automation
                            </h3>
                            <div className="level advanced">
                                <em>Advanced</em>
                                <div className="bar"></div>
                            </div>
                            <ul className="keywords">
                                <li>Cypress.io</li>
                                <li>xUnit/JUnit</li>
                                <li>Jest</li>
                                <li>Karma</li>
                                <li>Cucumber</li>
                                <li>JMeter</li>
                            </ul>
                        </div>
                        <div className="item">
                            <h3 className="name">
                                JavaScript
                            </h3>
                            <div className="level intermediate">
                                <em>Intermediate</em>
                                <div className="bar"></div>
                            </div>
                            <ul className="keywords">
                                <li>React</li>
                                <li>Angular</li>
                                <li>Node.js</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>
                        <div className="item">
                            <h3 className="name">
                                Mobile Development
                            </h3>
                            <div className="level intermediate">
                                <em>Intermediate</em>
                                <div className="bar"></div>
                            </div>
                            <ul className="keywords">
                                <li>Flutter</li>
                                <li>React Native</li>
                                <li>Blazor</li>
                                <li>Widget UI</li>
                            </ul>
                        </div>
                    </section>
                </section>
                <section className="section">
                    <header>
                        <h2 className="section-title">Work Experience <span className="item-count"></span></h2>
                    </header>
                    <section id="work">
                        <section className="work-item">
                            <input className="toggle-item" id="work-item-0" type="checkbox" defaultChecked />
                            <label htmlFor="work-item-0"></label>
                            <header>
                                <div className="position">Director of Software Engineering</div>
                                <div className="company">Optum</div>
                                <div className="date">
                                    <span className="startDate">October 2022</span>
                                    <span className="endDate">- Present</span>
                                </div>
                            </header>
                            <span className="website">
                                <a href="https://www.optum.com/en/" target="_blank" rel="noopener noreferrer">https://www.optum.com/</a>
                            </span>
                            <br />
                            <div className="item">
                                <div className="summary">
                                    <p>Lead technical architecture for Optum Behavioral Health, supporting 6+ million members. Own the shared API layer that powers 180+ web applications, including 30 critical (P1/P2) systems, and contribute to the CTO office to elevate engineering excellence and maturity across the organization.</p>
                                </div>
                                <ul className="highlights">
                                    <li>
                                        <p>Spearhead AI/ML initiatives applying generative AI to utilization management (UM), modernizing clinical workflows and driving innovation in behavioral healthcare.</p>
                                    </li>
                                    <li>
                                        <p>Define architecture standards and governance for a shared API platform serving 180+ applications, including 30 priority 1 and 2 systems.</p>
                                    </li>
                                    <li>
                                        <p>Drive engineering excellence, talent growth, and engineering culture across the behavioral health division.</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="work-item">
                            <input className="toggle-item" id="work-item-1" type="checkbox" defaultChecked />
                            <label htmlFor="work-item-1"></label>
                            <header>
                                <div className="position">Software Development Manager</div>
                                <div className="company">Amazon</div>
                                <div className="date">
                                    <span className="startDate">March 2021</span>
                                    <span className="endDate">- October 2022</span>
                                </div>
                            </header>
                            <span className="website">
                                <a href="https://buywithprime.amazon.com/" target="_blank" rel="noopener noreferrer">https://buywithprime.amazon.com/</a>
                            </span>
                            <br />
                            <div className="item">
                                <div className="summary">
                                    <p>Led a two-pizza engineering team implementing major changes to Amazon Buy with Prime, Amazon's flagship merchant checkout product.</p>
                                </div>
                                <ul className="highlights">
                                    <li>
                                        <p>Partnered across Buy with Prime teams to build and onboard new solutions that raised the bar on shopper and merchant product discovery.</p>
                                    </li>
                                    <li>
                                        <p>Grew the development team to tackle complex problems in massively scaled retail solutions and prepared teams for future challenges.</p>
                                    </li>
                                    <li>
                                        <p>Owned critical, highly scalable systems, fostering innovation and attracting and growing engineering talent.</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="work-item">
                            <input className="toggle-item" id="work-item-2" type="checkbox" defaultChecked />
                            <label htmlFor="work-item-2"></label>
                            <header>
                                <div className="position">Senior Manager</div>
                                <div className="company">CVS Health</div>
                                <div className="date">
                                    <span className="startDate">November 2013</span>
                                    <span className="endDate">- March 2021</span>
                                </div>
                            </header>
                            <span className="website">
                                <a href="https://www.cvshealth.com/" target="_blank" rel="noopener noreferrer">https://www.cvshealth.com/</a>
                            </span>
                            <br />
                            <div className="item">
                                <div className="summary">
                                    <p>Led 5 scrum teams with over 30 engineers across 5 locations, delivering medical and pharmacy benefit systems.</p>
                                </div>
                                <ul className="highlights">
                                    <li>
                                        <p>Oncology regimen-based prior authorization: delivered an industry-leading, machine-learning-driven recommendation system for oncologists. Revenue-generation project that cut regimen prior authorization processing time from two weeks to minutes.</p>
                                    </li>
                                    <li>
                                        <p>Medical claim/rebate (EDI 837): revenue-generation project that saved clients over $8 million per year.</p>
                                    </li>
                                    <li>
                                        <p>Prior authorization (NCPDP ePA, HL7 FHIR Da Vinci): simplified medical and pharmacy benefit prior authorization systems.</p>
                                    </li>
                                    <li>
                                        <p>Modernized medical claim editing by migrating Docker-based systems to Azure cloud.</p>
                                    </li>
                                    <li>
                                        <p>Eligibility (EDI 270/271) and provider portal systems with Azure AD certificate assertion and SAML 2.0 SSO - security and tech debt reduction.</p>
                                    </li>
                                    <li>
                                        <p>Established microservices Web API and API gateway strategy; stood up Elasticsearch/Kibana/Logstash clusters with PKI security.</p>
                                    </li>
                                    <li>
                                        <p>Founded a non-profit organization promoting STEM to youth.</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="work-item">
                            <input className="toggle-item" id="work-item-3" type="checkbox" defaultChecked />
                            <label htmlFor="work-item-3"></label>
                            <header>
                                <div className="position">Senior Technical Architect</div>
                                <div className="company">Bluestem Brands Inc.</div>
                                <div className="date">
                                    <span className="startDate">May 2003</span>
                                    <span className="endDate">- November 2013</span>
                                </div>
                            </header>
                            <span className="website">
                                <a href="http://www.bluestem.com/" target="_blank" rel="noopener noreferrer">http://www.bluestem.com/</a>
                            </span>
                            <br />
                            <div className="item">
                                <div className="summary">
                                    <p>Designed and developed enterprise system integrations (BizTalk Server 2010, BizTalk 2006R2, SSIS, .NET services and Web APIs), including custom BizTalk pipelines and an eConnect adapter for Microsoft Great Plains transactions.</p>
                                </div>
                                <ul className="highlights">
                                    <li>
                                        <p>Built and enhanced enterprise customer business services, developing automated solutions for complex business requirements using XSLT-based mappings.</p>
                                    </li>
                                    <li>
                                        <p>Technologies: BizTalk, SSIS, SSRS, C#, Web API 2, Java, Spring Boot, JavaScript, jQuery.</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="work-item">
                            <input className="toggle-item" id="work-item-4" type="checkbox" defaultChecked />
                            <label htmlFor="work-item-4"></label>
                            <header>
                                <div className="position">Software Developer</div>
                                <div className="company">Boombuy Inc.</div>
                                <div className="date">
                                    <span className="startDate">January 2003</span>
                                    <span className="endDate">- May 2003</span>
                                </div>
                            </header>
                            <span className="website"></span>
                            <br />
                            <div className="item">
                                <div className="summary">
                                    <p>Developed web and database applications with Microsoft Site Server, Commerce Server, IIS, XML/XSLT, MSMQ, and .NET (Microsoft Passport and Wallet). Set up Source Safe version control, remote debugging, and SQL Server 2000 log shipping.</p>
                                </div>
                            </div>
                        </section>
                        <section className="work-item">
                            <input className="toggle-item" id="work-item-5" type="checkbox" defaultChecked />
                            <label htmlFor="work-item-5"></label>
                            <header>
                                <div className="position">Software Engineer</div>
                                <div className="company">AMAX Engineering Corporation</div>
                                <div className="date">
                                    <span className="startDate">April 2001</span>
                                    <span className="endDate">- January 2002</span>
                                </div>
                            </header>
                            <span className="website">
                                <a href="http://www.amax.com/" target="_blank" rel="noopener noreferrer">http://www.amax.com/</a>
                            </span>
                            <br />
                            <div className="item">
                                <div className="summary">
                                    <p>Developed B2B and B2C websites using ASP, XML/XSLT, JavaScript, and SQL Server 7.0; integrated Site Server/Commerce Server search to build dynamic catalog search. Created and tested COM/DCOM components and implemented full-text search indexing.</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
                <section className="section">
                    <header>
                        <h2 className="section-title">Education <span className="item-count"></span></h2>
                    </header>
                    <section id="education">
                        <section className="education-item">
                            <header>
                                <div className="header-left">
                                    <div className="studyType">
                                        Master's Degree in
                                    </div>
                                    <div className="area">
                                        &nbsp;Software Engineering (in progress)&nbsp;
                                    </div>
                                    <div className="institution">
                                        University of St. Thomas
                                    </div>
                                </div>
                            </header>
                            <div className="item">
                                <div className="gpa">

                                </div>
                            </div>
                        </section>
                        <section className="education-item">
                            <header>
                                <div className="header-left">
                                    <div className="studyType">
                                        Bachelor's Degree in
                                    </div>
                                    <div className="area">
                                        &nbsp;Electrical and Electronics&nbsp;
                                    </div>
                                    <div className="institution">
                                        North China Electric Power University
                                    </div>
                                </div>
                            </header>
                            <div className="item">
                                <div className="gpa">

                                </div>
                            </div>
                        </section>
                    </section>
                </section>
                <section className="section margin1">
                    <header>
                        <h2 className="section-title">Interests</h2>
                    </header>
                    <section id="interests">
                        <div className="item">
                            <h6 className="institution">
                                Videography Photography
                            </h6>
                            <ul className="keywords">
                                <li>Portraits</li>
                                <li>Events</li>
                            </ul>
                        </div>
                    </section>
                </section>
                <section className="section">
                    <header>
                        <h2 className="section-title">References</h2>
                    </header>
                    <section id="references">
                        <div className="item">
                            <blockquote className="reference">
                                REFERENCE AVAILABLE UPON REQUEST
                            </blockquote>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

export default Resume;
