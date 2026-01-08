import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,   // ✅ for *ngFor
    MatCardModule   // ✅ for mat-card
  ],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent {
  experience = [
    {
      role: 'Sr SDET',
      company: 'Experian',
      duration: 'Mar 2022 – Present',
      details: [
        'Owned test architecture and quality strategy for AI/ML-driven financial products using Java/Rest Assured/Cucumber API automation.',
        'Architected modular Selenium and Playwright UI automation frameworks using Page Object Model (POM).',
        'Championed CI/CD integration with AWS and Docker for scalable test execution.',
        'Established testing standards including BDD with Cucumber, peer code reviews, and test data strategies.',
        'Developed Kafka-based validation utilities and leveraged Splunk for root cause analysis.',
        'Conducted automated security scans and vulnerability assessments for financial APIs to ensure data integrity and compliance with security protocols.',
        'Delivered high-quality product launches including Experian Money and Chime integration.',
        'Performed deep-dive debugging and troubleshooting in Docker and Kubernetes environments, leveraging Splunk for log monitoring and root cause analysis.',
        'Built and maintained scalable JMeter performance suites on GitHub Actions'
      ]
    },
    {
      role: 'Sr SDET',
      company: 'University of Washington',
      duration: 'Jul 2020 – Mar 2022',
      details: [
        'Developed C#/Cucumber API frameworks and backend validation tools for payment systems.',
        'Converted Postman tests to Newman CLI and integrated into Azure CI/CD pipelines.',
        'Built and maintained Cypress automation suites with TypeScript and Jasmine.',
        'Performed performance testing for both backend and frontend services'
      ]
    },
    {
      role: 'SDET',
      company: 'Holland America',
      duration: 'Jul 2019 – Jul 2020',
      details: [
        'Built Java/Rest Assured API automation and Selenium UI tests using POM.',
        'Integrated CI pipelines using Jenkins and Azure.',
        'Performed browser automation with Protractor and ensured mobile compatibility via Browser Stack.',
        'Utilized Gatling for performance testing'
      ]
    },
    {
      role: 'Lead Test Engineer',
      company: 'Provoke Solutions',
      duration: 'May 2019 – Jul 2019',
      details: [
        'Built Java-based backend automation tests using Rest Assured.',
        'Integrated CI pipelines using Azure for continuous validation.'
      ]
    },
    {
      role: 'Quality Health Team Lead',
      company: 'US Army',
      duration: 'Jul 2015 – Jul 2019',
      details: [
        'Collaborated with cross-functional teams to deliver high-quality healthcare systems.',
        'Implemented feature prioritization strategies based on stakeholder input.'
      ]
    },
    {
      role: 'Systems QA Lead',
      company: 'Wells Fargo',
      duration: 'Jun 2013 – Jul 2015',
      details: [
        'Led QA teams in building Java-based backend automation in onshore-offshore models.',
        'Created QA strategies and testing plans for 100+ products.',
        'Performed backend performance testing using Load Runner'
      ]
    },
    {
      role: 'Sr QA Analyst',
      company: 'RR Donnelley',
      duration: 'Mar 2013 – Jun 2013',
      details: [
        'Implemented Java automation for SOA-based web services and microservices.',
        'Provided leadership for geographically distributed QA teams.'
      ]
    },
    {
      role: 'QA Engineer',
      company: 'Libre Digital',
      duration: 'Jan 2012 – Mar 2013',
      details: [
        'Created API automation using SOAPUI.',
        'Developed Selenium scripts for end-to-end testing.'
      ]
    }
  ];
}
