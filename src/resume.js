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
                        <h2 class="label">Sr. Application Development Manager</h2>
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
                                    <a href="https://www.linkedin.com/in/jun-wang-8117193/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
                            <p>My primary strength is expertise in software design and development in enterprise application
                                integration.
                                My focus is to specialize in Business Process Modeling and integration architecture with
                                intensive hands on
                        development experience.</p>
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
                                .NET Core / Framework
                    </h3>
                            <div class="level master">
                                <em>Master</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>C#</li>
                                <li>Blazor</li>
                                <li>Visual Basic.net</li>
                                <li>ASP.NET</li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                IT Project Management
                    </h3>
                            <div class="level master">
                                <em>Master</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>Agile</li>
                                <li>Scrum</li>
                                <li>Resource Management</li>
                            </ul>
                        </div>
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
                                <li>JWT</li>
                                <li>WCF</li>
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
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                DevOps
                    </h3>
                            <div class="level advanced">
                                <em>Advanced</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>Azure DevOps</li>
                                <li>Docker</li>
                                <li>Jenkins</li>
                                <li>CI/CD Pipeline</li>
                                <li>Octopus</li>
                                <li>Bamboo</li>
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
                                <li>IIS</li>
                                <li>Apache</li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                Desktop Applications
                    </h3>
                            <div class="level advanced">
                                <em>Advanced</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>Forms</li>
                                <li>Services</li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                Unit Testing
                    </h3>
                            <div class="level intermediate">
                                <em>Intermediate</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>xunit</li>
                                <li>log4net</li>
                                <li>Moq</li>
                                <li>Cypress.io</li>
                                <li>Cucumber</li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                Interoperability
                    </h3>
                            <div class="level intermediate">
                                <em>Intermediate</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>VB6 and .NET</li>
                                <li>.NET and PlanetPress</li>
                                <li>.NET and Java</li>
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
                                <li>Angular</li>
                                <li>React</li>
                                <li>SignalR</li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3 class="name">
                                Mobile Development
                    </h3>
                            <div class="level beginner">
                                <em>Beginner</em>
                                <div class="bar"></div>
                            </div>
                            <ul class="keywords">
                                <li>Flutter</li>
                                <li>Xamarin</li>
                                <li>React Native</li>
                                <li>IONIC</li>
                            </ul>
                        </div>
                    </section>
                </section>
                <section class="section">
                    <header>
                        <h2 class="section-title">Work Experience <span class="item-count">(7)</span></h2>
                    </header>
                    <section id="work">
                        <section class="work-item">
                            <input class="toggle-item" id="work-item-0" type="checkbox" checked="checked" />
                            <label for="work-item-0"></label>
                            <header>
                                <div class="position">Senior Manger </div>
                                <div class="company">CVS Health</div>
                                <div class="date">
                                    <span class="startDate">November 2013</span>
                                    <span class="endDate">- Present</span>
                                </div>
                            </header>
                            <span class="website">
                                <a href="https://www.caremark.com/" target="_blank" rel="noopener noreferrer">https://www.caremark.com/</a>
                            </span>
                            <div class="item" id="work-item">
                                <div class="summary">
                                    <p></p>
                                    <p>Lead development team of 20 – 40 developers to create .NET based web and windows
                                        application
                                        process for medical benefit transactions. Include but not limited to claim (EDI 837 and
                                        proprietary),
                                        eligibility 270/271 proprietary, authorization, NCPDP EPA, medical rebate etc.
                                        Application was writing in C#, Angular, Python language, architect using WCF service and RESTful web
                                        services.
                                        In the process to migrate to micro service structure by adopting Azure technology.
                                        Implemented Elastic based PA search system, significantly improved search capability and
                                        performance.
                                        Rebuild front end web application using Angular 5, using cypress.io automated UI
                                        testing.
                                        Architect application using Enterprise Architect tool. Building CI/CD pipeline in Azure
                                        DevOps
                                        I manage multiple projects in parallel with aggressive deadline using both Agile and
                                        water fall process.
                            </p>
                                    <p></p>
                                </div>
                                <ul class="highlights">
                                    <li>
                                        <p>DevOps: Azure DevOps build and release pipeline, Jenkins, Splunck, VeraCode, New
                                    Relic and APM</p>
                                    </li>
                                    <li>
                                        <p>Micro Service: Web API, API gateway</p>
                                    </li>
                                    <li>
                                        <p>Elastcisearch: Cluster setup, PKI security, application real time searching,
                                    dashboarding</p>
                                    </li>
                                    <li>
                                        <p>Eligibility: expert on 270/271 and proprietary eligibility service and file load
                                    process. </p>
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
                                        system
                                        integration involving BizTalk server 2010, BizTalk 2006R2, SSIS and .NET windows service
                                        and
                                        web service. Created custom BizTalk pipeline and eConnect adapter to handle Microsoft
                                        GreatPlains
                                        transaction. Besides regular BizTalk mapper, using xslt to transform complicated
                                        business requirement map.
                                        Responsible to participate in creating and enhancing enterprise customer business
                                        services,
                                        work on problems involving the evaluation of specifications for complex business
                                        requirements
                                        and processes (new, enhancements, maintenance), and develops and prepares automated
                                        solutions.
                                        Verify program logic by preparing test data for trial runs, tests and debugs programs as
                                        well
                                        as to participate in overall systems testing and support of the implementation of the
                                        application into production.
                            </p>
                                    <p></p>
                                </div>
                                <ul class="highlights">
                                    <li>
                                        <p>BizTalk</p>
                                    </li>
                                    <li>
                                        <p>SSIS, SSRS</p>
                                    </li>
                                    <li>
                                        <p>VB.NET, C#</p>
                                    </li>
                                    <li>
                                        <p>MSMQ</p>
                                    </li>
                                    <li>
                                        <p>SQL Server</p>
                                    </li>
                                    <li>
                                        <p>WCF, Web service programming</p>
                                    </li>
                                    <li>
                                        <p>UML tools and database design</p>
                                    </li>
                                    <li>
                                        <p>Integrated Microsoft .NET framework to a flexible Web based order entry system</p>
                                    </li>
                                    <li>
                                        <p>Strong problem resolution, analysis, and customer service skills</p>
                                    </li>
                                    <li>
                                        <p>Ability to manage multiple tasks with shifting priorities</p>
                                    </li>
                                </ul>
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
                                    <p></p>
                                </div>
                                <ul class="highlights">
                                    <li>
                                        <p>MS SQL Server</p>
                                    </li>
                                    <li>
                                        <p>XML/XSLT</p>
                                    </li>
                                    <li>
                                        <p>MSMQ</p>
                                    </li>
                                    <li>
                                        <p>Web Service</p>
                                    </li>
                                </ul>
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
                                    <p></p>
                                </div>
                                <ul class="highlights">
                                    <li>
                                        <p>Javascript</p>
                                    </li>
                                    <li>
                                        <p>COM/DCOM</p>
                                    </li>
                                    <li>
                                        <p>IIS</p>
                                    </li>
                                    <li>
                                        <p>SSL</p>
                                    </li>
                                    <li>
                                        <p>Linux/FreeBSD</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section class="work-item">
                            <input class="toggle-item" id="work-item-4" type="checkbox" checked="checked" />
                            <label for="work-item-4"></label>
                            <header>
                                <div class="position">System and Networking Administrator, ASP+SQL developer </div>
                                <div class="company">Amazon China</div>
                                <div class="date">
                                    <span class="startDate">May 2000</span>
                                    <span class="endDate">- April 2001</span>
                                </div>
                            </header>
                            <span class="website">
                                <a href="http://amazon.cn" target="_blank" rel="noopener noreferrer">http://amazon.cn</a>
                            </span>
                            <div class="item" id="work-item">
                                <div class="summary">
                                    <p></p>
                                    <p>Responsible for system administration of web server, mail server (Linux/FreeBSD), DNS
                                        server, and SQL server, and Checkpoint FW1/VPN. OLAP security.
                                        ASP programming, intranet administration and website design.

                            </p>
                                    <p></p>
                                </div>

                            </div>
                        </section>
                        <section class="work-item">
                            <input class="toggle-item" id="work-item-5" type="checkbox" checked="checked" />
                            <label for="work-item-5"></label>
                            <header>
                                <div class="position">Department Head, Development Department </div>
                                <div class="company">Bada Group Limited</div>
                                <div class="date">
                                    <span class="startDate">October 1995 </span>
                                    <span class="endDate">- December 1999</span>
                                </div>
                            </header>

                            <div class="item" id="work-item">
                                <div class="summary">
                                    <p></p>
                                    <p>Responsible for new project development, business analysis, intranet system
                                        administration, and website developing.
                                        Using HTML, ASP, JavaScript, Access and SQL Server database created data-driven website.
                                        Manage intranet website design and configuration, and Lotus Notes application management
                                and provide training for end users.</p>
                                    <p></p>
                                </div>
                            </div>
                        </section>
                        <section class="work-item">
                            <input class="toggle-item" id="work-item-6" type="checkbox" checked="checked" />
                            <label for="work-item-6"></label>
                            <header>
                                <div class="position">Application Engineer (Texas Instruments contractor) </div>
                                <div class="company">Metal Technics Pte. Ltd.</div>
                                <div class="date">
                                    <span class="startDate">December 1993</span>
                                    <span class="endDate">- October 1995</span>
                                </div>
                            </header>

                            <div class="item" id="work-item">
                                <div class="summary">
                                    <p></p>
                                    <p>Responsible for design, assembly and test of semiconductor automation instrument and
                                        motion control systems,
                                        PLC control system. Software programming by using assembly language and C/C++ in
                                        Embedded system.
                                        Create design documents such as ladder diagrams, sequence diagrams and to translate this
                                logic into a programming language.</p>
                                    <p></p>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
                <section class="section">
                    <header>
                        <h2 class="section-title">Education <span class="item-count">(1)</span></h2>
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
