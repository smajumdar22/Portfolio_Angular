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
        'Defined and owned the quality strategy for AI/ML-driven financial products (Experian Money, Chime integration), shaping product decisions that impacted millions of users.',
        'Drove cross-functional alignment between product, engineering, and QA leadership through quarterly quality reviews — translating technical findings into actionable roadmap priorities.',
        'Established enterprise BDD standards and test data strategy, reducing release cycle time by 40% and enabling faster iteration on product features.',
        'Built real-time production monitoring dashboards (Kafka + Splunk), giving product teams instant visibility into quality signals and reducing incident response time.',
        'Led security compliance efforts on financial APIs, ensuring OWASP-aligned product releases across regulated consumer finance flows.',
        'Mentored 3 junior engineers while serving as the primary liaison between QA and product on feature scoping and acceptance criteria.'
      ]
    },
    {
      role: 'Sr. SDET',
      company: 'University of Washington',
      oneliner: 'Top-10 public research university; managed enterprise-scale payment and financial operations systems.',
      duration: 'Jul 2020 – Mar 2022',
      tag: 'EdTech · FinOps',
      tech: ['C#', 'Cypress', 'TypeScript', 'Newman', 'Azure DevOps', 'Jasmine'],
      details: [
        'Partnered with product and engineering teams on mission-critical payment processing systems, improving release confidence and velocity through end-to-end test ownership.',
        'Converted manual payment test workflows to fully automated CI/CD pipelines, enabling the product team to ship faster with confidence across financial workflows.',
        'Achieved 90%+ UI regression coverage on student-facing payment flows, directly reducing post-release defect rates.',
        'Led cross-functional QA initiatives that improved sprint velocity and shortened feedback loops between product discovery and delivery.'
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
        'Owned automation coverage for customer-facing booking and commerce flows, supporting high-traffic product features across peak travel seasons.',
        'Identified and escalated critical performance bottlenecks ahead of Black Friday traffic peaks using Gatling load tests — directly informing product and engineering prioritization.',
        'Ensured cross-browser and mobile compatibility across all major booking flows, improving conversion reliability for international users.',
        'Integrated CI/CD pipelines enabling continuous delivery of booking feature updates with automated regression gates.'
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
        'Delivered a full backend API automation suite from scratch in a 10-week engagement, enabling the client team to ship with confidence post-handoff.',
        'Established automated testing best practices and CI/CD integration guidance adopted as standards by the client engineering team.'
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
        'Led a quality health team managing enterprise healthcare systems for military personnel, defining feature priorities under high-stakes, resource-constrained conditions.',
        'Collaborated with cross-functional stakeholders to scope, prioritize, and deliver quality initiatives — a direct analogue to product management in complex orgs.',
        'Built a disciplined, outcome-driven leadership approach grounded in user impact, systems thinking, and rapid iteration under operational pressure.'
      ]
    },
    {
      role: 'Systems QA Lead',
      company: 'Wells Fargo',
      oneliner: 'Top-4 U.S. bank; worked on quality strategy for 100+ financial products across enterprise systems.',
      duration: 'Jun 2013 – Jul 2015',
      tag: 'Finance · Enterprise',
      tech: ['Java', 'LoadRunner', 'Onshore/Offshore'],
      details: [
        'Shaped QA strategy and testing plans that became division-wide standards, directly influencing how 100+ financial products were released and maintained.',
        'Led onshore-offshore teams, coordinating delivery across geographies — building skills in stakeholder alignment, prioritization, and distributed team management.',
        'Validated SLAs under peak banking load, ensuring product reliability during high-stakes financial transactions.'
      ]
    },
    {
      role: 'Sr. QA Analyst',
      company: 'RR Donnelley',
      oneliner: 'Fortune 500 integrated communications company; worked on SOA-based enterprise web services.',
      duration: 'Mar 2013 – Jun 2013',
      tag: 'Enterprise',
      tech: ['Java', 'SOA', 'Microservices'],
      details: [
        'Provided QA leadership for geographically distributed teams, owning automation for SOA and microservices architecture across enterprise workflows.'
      ]
    },
    {
      role: 'QA Engineer',
      company: 'Libre Digital',
      oneliner: 'Digital content delivery startup powering media distribution for major publishers.',
      duration: 'Jan 2012 – Mar 2013',
      tag: 'Digital Media',
      tech: ['SOAPUI', 'Selenium'],
      details: [
        'Built API and UI automation coverage for a digital content delivery platform, enabling reliable product releases in a fast-moving startup environment.'
      ]
    }
  ];
}
