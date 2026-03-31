import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent {
  experience = [
    {
      role: 'Sr. Software Engineer — Automation Architect',
      company: 'Experian',
      oneliner: 'Global consumer credit & data analytics platform serving 1B+ users.',
      duration: 'Mar 2022 – Present',
      tag: 'Finance · AI/ML',
      tech: ['Java', 'Rest Assured', 'Playwright', 'Selenium', 'Kafka', 'Docker', 'AWS', 'Splunk', 'GitHub Actions'],
      details: [
        'Co-owned the release quality roadmap for Experian Money and Chime integration — triaging trade-offs between speed-to-market and risk exposure directly with PMs and engineering leads.',
        'Identified a systemic gap in acceptance criteria across 3 squads; introduced shared definition-of-done standards that cut post-release defects by 40% and eliminated a recurring source of sprint spillover.',
        'Turned production signal (Kafka, Splunk) into a weekly risk briefing for product leadership — shifting quality conversations from reactive bug counts to forward-looking release confidence.',
        'Flagged a compliance risk in a financial API integration that would have blocked the Chime launch; worked with legal, security, and PM to resolve it 3 weeks before release.',
        'Served as the connective tissue between engineering and product on scope decisions — writing acceptance criteria, challenging vague requirements, and pushing back on features shipped without testable definitions.',
        'Grew a 3-person SDET team from execution-focused to strategy-capable, mentoring toward product thinking: user impact over test count, risk prioritization over coverage percentages.'
      ]
    },
    {
      role: 'Sr. Software Engineer',
      company: 'University of Washington',
      oneliner: 'Top-10 public research university; managed enterprise-scale payment and financial operations systems.',
      duration: 'Jul 2020 – Mar 2022',
      tag: 'EdTech · FinOps',
      tech: ['C#', 'Cypress', 'TypeScript', 'Newman', 'Azure DevOps', 'Jasmine'],
      details: [
        'Embedded directly with the product team on a mission-critical student payment platform — attended sprint planning, shaped story acceptance criteria, and acted as the quality voice in backlog grooming.',
        'Identified that manual payment regression was the single biggest drag on release velocity; made the business case to automate it, then executed — cutting the release gate from 3 days to under 4 hours.',
        'Reduced post-launch defect rate on student-facing payment flows by driving 90%+ regression coverage, improving trust in a product used by tens of thousands of students per cycle.',
        'Ran retrospectives with product and engineering to surface recurring friction points, turning systemic issues into backlog items rather than one-off bug fixes.'
      ]
    },
    {
      role: 'SDET',
      company: 'Holland America Line',
      oneliner: 'Premium cruise line with a global e-commerce booking platform serving millions of travellers annually.',
      duration: 'Jul 2019 – Jul 2020',
      tag: 'Travel · E-Commerce',
      tech: ['Java', 'Rest Assured', 'Selenium', 'Jenkins', 'Gatling', 'BrowserStack'],
      details: [
        'Proactively load-tested the booking platform ahead of Black Friday; surfaced 2 critical bottlenecks that, left unfixed, would have degraded conversion during the highest-revenue week of the year.',
        'Influenced the product team to delay a mobile booking feature by one sprint after identifying cross-device failures on international flows — preventing a poor launch experience for a key user segment.',
        'Owned end-to-end quality for the core booking funnel, giving the product team a reliable signal on release readiness at every milestone across peak travel seasons.'
      ]
    },
    {
      role: 'Lead Test Engineer',
      company: 'Provoke Solutions',
      oneliner: 'Digital transformation consultancy delivering custom software products for enterprise clients.',
      duration: 'May 2019 – Jul 2019',
      tag: 'Consulting',
      tech: ['Java', 'Rest Assured', 'Azure'],
      details: [
        'Scoped, built, and handed off a full API quality framework in 10 weeks — leaving a client team that could ship independently without ongoing external support.',
        'Diagnosed the client\'s release bottleneck as a lack of automated regression, not headcount; reframed the engagement scope and delivered the right solution over the originally requested one.'
      ]
    },
    {
      role: 'Quality Health Team Lead',
      company: 'US Army',
      oneliner: 'U.S. military — led operational healthcare quality programs across multiple installations.',
      duration: 'Jul 2015 – Jul 2019',
      tag: 'Leadership · Government',
      tech: ['Healthcare Systems', 'Cross-functional Leadership', 'Feature Prioritization'],
      details: [
        'Managed competing priorities across healthcare programs serving thousands of personnel — making resource allocation decisions with real stakes and zero margin for error.',
        'Coordinated across medical, operations, and command stakeholders to align on program changes under tight constraints, building the cross-functional muscle that defines strong product management.',
        'Developed a leadership model grounded in user-first thinking, rapid iteration under pressure, and outcome accountability — directly transferable to product ownership.'
      ]
    },
    {
      role: 'Lead Systems Analyst',
      company: 'Wells Fargo',
      oneliner: 'Top-4 U.S. bank; worked on quality strategy for 100+ financial products across enterprise systems.',
      duration: 'Jun 2013 – Jul 2015',
      tag: 'Finance · Enterprise',
      tech: ['Java', 'LoadRunner', 'Onshore/Offshore'],
      details: [
        'Built QA strategy templates adopted division-wide — effectively setting the product quality bar for 100+ financial products without direct authority over the teams using them.',
        'Managed onshore-offshore coordination across time zones, developing the stakeholder alignment and async communication skills critical to distributed product work.',
        'Validated peak-load SLAs for core banking services, ensuring reliability commitments made to millions of customers were grounded in data, not assumptions.'
      ]
    },
    {
      role: 'Sr. Quality Engineer',
      company: 'RR Donnelley',
      oneliner: 'Fortune 500 integrated communications company; worked on SOA-based enterprise web services.',
      duration: 'Mar 2013 – Jun 2013',
      tag: 'Enterprise',
      tech: ['Java', 'SOA', 'Microservices'],
      details: [
        'Provided QA leadership for geographically distributed teams, owning quality coverage across SOA and microservices architecture in a large enterprise environment.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Libre Digital',
      oneliner: 'Digital content delivery startup powering media distribution for major publishers.',
      duration: 'Jan 2012 – Mar 2013',
      tag: 'Digital Media',
      tech: ['SOAPUI', 'Selenium'],
      details: [
        'Built API and UI coverage for a digital content delivery platform in a fast-moving startup, enabling reliable product releases with a lean team and tight timelines.'
      ]
    }
  ];
}
