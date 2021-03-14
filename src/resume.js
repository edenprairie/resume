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
                <title>Jun Wang's Resume</title>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
                <header class="clear" id="header">
                    <img class="picture" alt="Jun Wang" src={require('./junwang.jpg')}></img>
                    <div class="middle">
                        <h1 class="name">Jun Wang</h1>
                        <h2 class="label">Sofware Development Manager @Amazon aws</h2>
                    </div>
                    <span class="location">
                        <span class="city"> Eden Prairie,</span>
                        <span class="region"> MN</span>
                        <span class="postalCode"> 55346</span>
                    </span>
                    <div id="contact">
                        <div class="website">
                            <span class="fa fa-external-link"></span>
                            <a href="http://junwang.us" target="_blank" rel="noopener noreferrer">http://junwang.us</a>
                        </div>
                        <div class="email">
                            <span class="fa fa-envelope-o"></span>
                            <a href="mailto:junwang01@gmail.com"><span
                                class="__cf_email__">junwang01@gmail.com</span></a>
                        </div>
                        <div class="phone">
                            <span class="fa fa-mobile"></span>
                            <a href="tel:(612) 308-9856">(612) 308-9856</a>
                        </div>
                    </div>
                    <div id="profiles">
                        <div class="item">
                            <div class="username">
                                <span class="fa fa-linkedin linkedin social"></span>
                                <span class="url">
                                    <a href="https://www.linkedin.com/in/junwang03/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="username">
                                <span class="fa fa-github github social"></span>
                                <span class="url"><a href="https://github.com/edenprairie">Github</a></span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="username">
                                <span class="fa fa-file-pdf-o"></span>
                                <span class="url"><a href={require('./JunWangResume.pdf')}>Download</a></span>
                            </div>
                        </div>
                    </div>
                </header>
                <section class="section main-summary">
                    <section>
                        <div>
                            <p>I am an innovator with creative ideas and strong problem solving skills, a passionate technologist with hands-on software engineering skills in modern technology stack, a servant leader who constantly drives changes and aims to add business value, and a trusted mentor who prioritizes developing our people and cultivating engineering culture.</p>
                        </div>
                    </section>
                </section>
                <section class="section margin1">
                    <header>
                        <h2 class="section-title">Skills</h2>
                    </header>
                    <section id="skills">
                        <div class="item">
                            <h3 class="name">
                                Micro Service Web API
                    </h3>
                            <div class="level advanced">
                                <em>Advanced</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>REST</li>
                                <li>GRPC</li>
                                <li>GraphQL</li>
                                <li>JWT</li>
                                <li>SOAP</li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                Cloud Services
                    </h3>
                            <div class="level advanced">
                                <em>Advanced</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>Azure</li>
                                <li>Amazon Web Services</li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                SQL, No-SQL
                    </h3>
                            <div class="level advanced">
                                <em>Advanced</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>MSSQL</li>
                                <li>Elasticsearch</li>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                                <li>Kafka</li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                DevSecOps
                    </h3>
                            <div class="level advanced">
                                <em>Advanced</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>Github Action</li>
                                <li>Azure DevOps</li>
                                <li>Docker</li>
                                <li>Jenkins</li>
                                <li>CI/CD Pipeline</li>
                                <li>Vulnerability Management</li>
                                <li>Firewalls</li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                Web Technology
                    </h3>
                            <div class="level advanced">
                                <em>Advanced</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>.NET Core</li>
                                <li>Java</li>
                                <li>Spring boot</li>
                                <li>http2</li>
                                <li>Splunk</li>
                                <li>Dynatrace</li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                Desgin Pattern
                    </h3>
                            <div class="level advanced">
                                <em>Advanced</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>creational</li>
                                <li>structural</li>
                                <li>behavioral</li>
                                <li>The Twelve-Factor App</li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                Test Automation
                    </h3>
                            <div class="level advanced">
                                <em>Advanced</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>Cypress.io</li>
                                <li>xunit/Junit</li>
                                <li>jest</li>
                                <li>karmar</li>
                                <li>Cucumber</li>
                                <li>Jmeter</li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                Javascript
                    </h3>
                            <div class="level intermediate">
                                <em>Intermediate</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>JQuery</li>
                                <li>React</li>
                                <li>Angular</li>
                                <li>SignalR</li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                Mobile Development
                    </h3>
                            <div class="level intermediate">
                                <em>Intermediate</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>Flutter</li>
                                <li>Widget UI</li>
                                <li>React Native</li>
                                <li>Blazor</li>
                            </ul>
                        </div>
                    </section>
                </section>
                <section class="section">
                    <header>
                        <h2 class="section-title">Work Experience <span class="item-count"></span></h2>
                    </header>
                    <section id="work">
                        <section class="work-item">
                            <input class="toggle-item" id="work-item-0" type="checkbox" checked="checked" />
                            <label for="work-item-0"></label>
                            <header>
                                <div class="position">Software Development Manager </div>
                                <div class="company">Amazon|aws</div>
                                <div class="date">
                                    <span class="startDate">March 2021</span>
                                    <span class="endDate">- Present</span>
                                </div>
                            </header>
                            <span class="website">
                                <a href="https://www.cvshealth.com/" target="_blank" rel="noopener noreferrer">https://aws.amazon.com/</a>
                            </span>
                            <br /><br /><br />
                        </section>
                        <section class="work-item">
                            <input class="toggle-item" id="work-item-0" type="checkbox" checked="checked" />
                            <label for="work-item-0"></label>
                            <header>
                                <div class="position">Senior Manager </div>
                                <div class="company">CVS Health</div>
                                <div class="date">
                                    <span class="startDate">November 2013</span>
                                    <span class="endDate">- March 2021</span>
                                </div>
                            </header>
                            <span class="website">
                                <a href="https://www.cvshealth.com/" target="_blank" rel="noopener noreferrer">https://www.cvshealth.com/</a>
                            </span>
                            <div class="item" id="work-item">
                                <div class="summary">
                                    <p></p>
                                    <p>
                                    </p>
                                    <p></p>
                                </div>
                                <div class="summary">
                                    <p>Leadership and management</p>
                                </div>
                                <ul class="highlights">
                                    <li>
                                        <p>Lead 5 scrum teams with over 30 engineers in 5 locations.</p>
                                    </li>
                                    <li>
                                        <p>Founder of non-profit organization to promote STEM to youth.</p>
                                    </li>
                                    <br />
                                </ul>
                                <div class="summary">
                                    <p>Projects through work</p>
                                </div>
                                <ul class="highlights">
                                    <li>
                                        <p>Prior authorization: Medical and pharmacy benefit prior authorization systems, including NCPDP ePA, HL7 FHIR Da Vinci based PA. - Tech simplification.</p>
                                    </li>
                                    <li>
                                        <p>Oncology Regimen based prior authorization: Implement industry leading edge regimen PA system, machine learning drive recommendation system for oncologist. - This is a revenue generation project, clients cut regimen PA process time from two weeks to minutes. </p>
                                    </li>
                                    <li>
                                        <p>Medical claim/rebate: EDI 837 and proprietary claim, medical rebate system. - Revenue generation, helped clients save over 8 million dollars per year.</p>
                                    </li>
                                    <li>
                                        <p>Azure cloud: Migrate medical claim editing system using docker technology to Azure. - Modernization</p>
                                    </li>
                                    <li>
                                        <p>Eligibility: Implement EDI 270/271, file based and API driven eligibility system. Integrate with Azure AD through certificate assertion. - Security project.</p>
                                    </li>
                                    <li>
                                        <p>Provider portal: File based and API driven provider portal system, implement SSO through SAML 2.0. - Security, tech debt reduction project.</p>
                                    </li>
                                    <li>
                                        <p>DevOps: Azure DevOps build and release pipeline, Jenkins. Splunk, VeraCode, New Relic and APM. - Scalability, performance project.</p>
                                    </li>
                                    <li>
                                        <p>Micro Service: established Web API, API gateway strategy. - Modernization project. </p>
                                    </li>
                                    <li>
                                        <p>Elastcisearch/Kibana/Logstash: Cluster setup, PKI security, application real time searching and dashboarding. - Modernization project.</p>
                                    </li>
                                    <li>
                                        <p>Using Kafka to implement multiple PA concurrent access projects. - Modernization project.</p>
                                    </li>
                                    <br />
                                </ul>
                                <div class="summary">
                                    <p>Projects outside work</p>
                                </div>
                                <ul class="highlights">
                                    <li>
                                        <p>laboratory test result management system: fully Azure native application leverages HL7 2.0 and HL7 3 FHIR to manage test result records for providers. </p>
                                    </li>
                                    <li>
                                        <p>COVID-19 test kit order system: help organization to quick order self test kit for potential COVID patients. </p>
                                    </li>
                                    <li>
                                        <p>Law enforcement and campus safe system: Azure based applications help organizations to engage law enforcement more efficiently.</p>
                                    </li>
                                    <li>
                                        <p>TnT(Tool n' Tool): an open source project with friends as a technical playground project. https://github.com/tnt-develop-team, Technology framework and tools including: Spring boot, Gradle, Neo4J, Docker, Spock, Travis CI, Ionic2, Jenkins, VSCode, IntelliJ, Azure VM, Bash, waffle.io</p>
                                    </li>
                                    <li>
                                        <p>Contributed to over 30 open source repositories on <a href="https://github.com/edenprairie" target="_blank" rel="noopener noreferrer">https://github.com/edenprairie</a> , Github Arctic Code Vault Contributor. </p>
                                    </li>
                                    <br />
                                </ul>
                                <div class="summary">
                                    <p>Community Service</p>
                                </div>
                                <ul class="highlights">
                                    <li>
                                        <p>Teach 4 hours per week over 2 year on Natural Language Processing class to middle school and high school students. </p>
                                    </li>

                                    <li>
                                        <p>Community service: founder of local ethnic group and active volunteer.</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section class="work-item">
                            <input class="toggle-item" id="work-item-1" type="checkbox" checked="checked" />
                            <label for="work-item-1"></label>
                            <header>
                                <div class="position">Senior Technical Architect </div>
                                <div class="company">Bluestem Brands Inc. (Formerly known as Fingerhut Direct Marketing)</div>
                                <div class="date">
                                    <span class="startDate">May 2003</span>
                                    <span class="endDate">- November 2013</span>
                                </div>
                            </header>
                            <span class="website">
                                <a href="http://www.bluestem.com/" target="_blank" rel="noopener noreferrer">http://www.bluestem.com/</a>
                            </span>
                            <div class="item" id="work-item">
                                <div class="summary">
                                    <p></p>
                                    <p>Work as a senior technical architect in development team, design and develop company’s
                                    system integration involving BizTalk server 2010, BizTalk 2006R2, SSIS and .NET windows service and
                                    web API. Created custom BizTalk pipeline and eConnect adapter to handle Microsoft
                                    GreatPlains transaction. Besides regular BizTalk mapper, using xslt to transform complicated
                                    business requirement map.
                                    Responsible to participate in creating and enhancing enterprise customer business
                                    services, work on problems involving the evaluation of specifications for complex business
                                    requirements and processes (new, enhancements, maintenance), and develops and prepares automated
                                    solutions.
                                    Verify program logic by preparing test data for trial runs, tests and debugs programs as
                                    well as to participate in overall systems testing and support of the implementation of the
                                    application into production.
                            </p>
                                    <p>Technologies including: BizTalk, SSIS, SSRS, Git, IntelliJ, Jenkin, VB.NET, C#, WebAPI2, JavaScript, jQuery, Spring Boot, Groovy, Gradle, Java, BeanIO, Stubby4j, Spock</p>
                                </div>
                            </div>
                        </section>
                        <section class="work-item">
                            <input class="toggle-item" id="work-item-2" type="checkbox" checked="checked" />
                            <label for="work-item-2"></label>
                            <header>
                                <div class="position">Software Developer </div>
                                <div class="company">Boombuy Inc.</div>
                                <div class="date">
                                    <span class="startDate">January 2003</span>
                                    <span class="endDate">- May 2003</span>
                                </div>
                            </header>
                            <span class="website">

                            </span>
                            <div class="item" id="work-item">
                                <div class="summary">
                                    <p></p>
                                    <p>Responsible for company Web and database application programming, quality assurance by
                                    using Microsoft Site Server, Commerce Server, IIS, XML/XSLT, MSMQ, Web Service. Set up
                                    Microsoft Source Safe version control and remote debug system. Implementing Microsoft
                                    Passport and Wallet by using .NET technology. Set up and maintain SQL Server Log
                                    shipping for MS SQL Server 2000. Use .NET technology to implement Microsoft Passport and
                                    wallet system. Using object-oriented method to create and debug ASP ASP.NET, SQL Server
                                    application and data management system. SQL Server 2000 development and administration.
                                    </p>
                                    <p>Technologies including: MS SQL Server, XML/XSLT, MSMQ, Web Service</p><p></p>
                                </div>

                            </div>
                        </section>
                        <section class="work-item">
                            <input class="toggle-item" id="work-item-3" type="checkbox" checked="checked" />
                            <label for="work-item-3"></label>
                            <header>
                                <div class="position">Software Engineer </div>
                                <div class="company">AMAX Engineering Corporation</div>
                                <div class="date">
                                    <span class="startDate">April 2001</span>
                                    <span class="endDate">- January 2002</span>
                                </div>
                            </header>
                            <span class="website">
                                <a href="http://www.amax.com/" target="_blank" rel="noopener noreferrer">http://www.amax.com/</a>
                            </span>
                            <div class="item" id="work-item">
                                <div class="summary">
                                    <p></p>
                                    <p>Responsible for web development and quality assurance of company's B2B and B2C projects
                                    using ASP,
                                    XML/XSLT, JavaScript, VBScript, Windows NT, IIS, and SQL Server 7.0. Integrated SQL and
                                    stored procedure with Microsoft Site Server, Commerce Server built-in search component
                                    to build
                                    specific catalog and implement the whole web site with dynamic power search. Created and
                                    tested
                                    COM/DCOM to implement spider function. Developed full-text index searching development
                                    and tested
                                    Web site mastering including SSL set up, FTP files, site backup and updating. Also
                                    worked closely
                                    with front-end designers on issues in browser compatibility, email system
                                    administration,
                                    Linux/FreeBSD server administration, shell coding, and PHP coding. Design and
                                    implemented complex
                                business requirement and process, verify program logic by test data and trial runs.</p>
                                    <p>Technologies including: Javascript, COM/DCOM, IIS, SSL, Linux/FreeBSD</p>
                                </div>

                            </div>
                        </section>

                    </section>
                </section>
                <section class="section">
                    <header>
                        <h2 class="section-title">Education <span class="item-count"></span></h2>
                    </header>
                    <section id="education">
                        <section class="education-item">
                            <header>
                                <div class="header-left">
                                    <div class="studyType">
                                        Master's Degree in
                            </div>
                                    <div class="area">
                                        Software Engineering(Ongoing)
                            </div>
                                    <div class="institution">
                                        University of St. Thomas
                            </div>
                                </div>

                            </header>
                            <div class="item">
                                <div class="gpa">

                                </div>
                            </div>
                        </section>
                        <section class="education-item">
                            <header>
                                <div class="header-left">
                                    <div class="studyType">
                                        Bachelor's Degree in
                            </div>
                                    <div class="area">
                                        Electrical and Electronics
                            </div>
                                    <div class="institution">
                                        North China Electric Power University
                            </div>
                                </div>

                            </header>
                            <div class="item">
                                <div class="gpa">

                                </div>
                            </div>
                        </section>
                    </section>
                </section>
                <section class="section margin1">
                    <header>
                        <h2 class="section-title">Interests</h2>
                    </header>
                    <section id="interests">
                        <div class="item">
                            <h6 class="institution">
                                Videography Photography
                            </h6>
                            <ul class="keywords">
                                <li>Portraits</li>
                                <li>Events</li>
                            </ul>
                        </div>
                    </section>
                </section>
                <section class="section">
                    <header>
                        <h2 class="section-title">References</h2>
                    </header>
                    <section id="references">
                        <div class="item">
                            <blockquote class="reference">
                                REFERENCE AVAILABLE UPON REQUEST
                    </blockquote>

                        </div>

                    </section>
                </section>
                <script src="/cdn-cgi/scripts/78d64697/cloudflare-static/email-decode.min.js"></script>

            </div>
        );
    }
}

export default Resume;
