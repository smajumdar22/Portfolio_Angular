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
      duration: 'Mar 2022 – Present',
      tag: 'Finance · AI/ML · FAANG-adjacent',
      tech: ['Java', 'Rest Assured', 'Playwright', 'Selenium', 'Kafka', 'Docker', 'AWS', 'Splunk', 'GitHub Actions'],
      details: [
        'Owned end-to-end test architecture and quality strategy for AI/ML-driven financial products (Experian Money, Chime integration) serving millions of users.',
        'Architected modular Playwright and Selenium UI frameworks using Page Object Model, reducing regression cycle time by 40%.',
        'Established enterprise BDD standards with Cucumber: peer review processes, test data strategy, and CI/CD integration on AWS and Docker.',
        'Built Kafka-based validation utilities and Splunk dashboards for real-time production quality monitoring.',
        'Conducted automated security scans and vulnerability assessments on financial APIs ensuring compliance with OWASP and internal security protocols.',
        'Mentored 3 junior SDETs and drove quarterly quality reviews with product and engineering leadership.'
      ]
    },
    {
      role: 'Sr. SDET',
      company: 'University of Washington',
      duration: 'Jul 2020 – Mar 2022',
      tag: 'EdTech · FinOps',
      tech: ['C#', 'Cypress', 'TypeScript', 'Newman', 'Azure DevOps', 'Jasmine'],
      details: [
        'Developed C#/Cucumber API frameworks and backend validation tools for mission-critical payment processing systems.',
        'Converted Postman collections to Newman CLI, enabling fully automated payment testing in Azure CI/CD.',
        'Built and maintained Cypress automation suites in TypeScript, achieving 90%+ UI regression coverage.',
        'Led cross-functional QA initiatives with engineering and product teams, improving release confidence and velocity.'
      ]
    },
    {
      role: 'SDET',
      company: 'Holland America Line',
      duration: 'Jul 2019 – Jul 2020',
      tag: 'Travel · E-Commerce',
      tech: ['Java', 'Rest Assured', 'Selenium', 'Jenkins', 'Gatling', 'BrowserStack'],
      details: [
        'Built Java/Rest Assured API automation and Selenium UI regression suites using POM across booking and commerce platforms.',
        'Integrated Jenkins CI pipelines and Azure for continuous test execution across multiple environments.',
        'Used Gatling for load and performance testing, identifying key bottlenecks before Black Friday traffic peaks.',
        'Ensured cross-browser and mobile compatibility via BrowserStack across all major booking flows.'
      ]
    },
    {
      role: 'Lead Test Engineer',
      company: 'Provoke Solutions',
      duration: 'May 2019 – Jul 2019',
      tag: 'Consulting',
      tech: ['Java', 'Rest Assured', 'Azure'],
      details: [
        'Delivered Java-based backend API automation suite from scratch within a 10-week engagement.',
        'Integrated Azure CI pipelines for continuous validation and provided automated testing best-practice guidance to the client.'
      ]
    },
    {
      role: 'Quality Health Team Lead',
      company: 'US Army',
      duration: 'Jul 2015 – Jul 2019',
      tag: 'Leadership · Government',
      tech: ['Healthcare Systems', 'Cross-functional Leadership', 'Feature Prioritization'],
      details: [
        'Led a quality health team supporting enterprise healthcare systems for military personnel across multiple installations.',
        'Collaborated with cross-functional stakeholders to define feature prioritization and quality standards under high-stakes operational conditions.',
        'Developed a disciplined, outcome-driven approach to team leadership that translates directly to product management practice.'
      ]
    },
    {
      role: 'Systems QA Lead',
      company: 'Wells Fargo',
      duration: 'Jun 2013 – Jul 2015',
      tag: 'Finance · Enterprise',
      tech: ['Java', 'LoadRunner', 'Onshore/Offshore'],
      details: [
        'Led QA teams across onshore-offshore delivery models, building Java-based backend automation for 100+ financial products.',
        'Created QA strategy templates and testing plans that became organizational standards across the division.',
        'Delivered backend performance testing with LoadRunner, validating SLAs under peak load for critical banking services.'
      ]
    },
    {
      role: 'Sr. QA Analyst',
      company: 'RR Donnelley',
      duration: 'Mar 2013 – Jun 2013',
      tag: 'Enterprise',
      tech: ['Java', 'SOA', 'Microservices'],
      details: [
        'Implemented Java automation for SOA-based web services and microservices architecture.',
        'Provided QA leadership for geographically distributed teams across multiple time zones.'
      ]
    },
    {
      role: 'QA Engineer',
      company: 'Libre Digital',
      duration: 'Jan 2012 – Mar 2013',
      tag: 'Digital Media',
      tech: ['SOAPUI', 'Selenium'],
      details: [
        'Built API automation framework using SOAPUI for digital content delivery services.',
        'Developed Selenium end-to-end test scripts for cross-browser web application coverage.'
      ]
    }
  ];
}
