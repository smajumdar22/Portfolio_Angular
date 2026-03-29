import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {

  pmSkills = [
    'Product Strategy', 'Roadmap Planning', 'Stakeholder Alignment',
    'User Story Writing', 'Feature Prioritization', 'OKRs & KPIs',
    'Cross-functional Leadership', 'Technical Scoping', 'A/B Testing',
    'Go-to-Market', 'Competitive Analysis', 'Voice of Customer',
    'Sprint Planning', 'PRD Writing', 'Data-Driven Decision Making'
  ];

  engineeringSkills = [
    {
      category: 'Languages',
      items: ['Java', 'Python', 'Ruby', 'TypeScript', 'JavaScript', 'C#', 'Node.js', 'SQL']
    },
    {
      category: 'Test Automation',
      items: ['Selenium', 'Playwright', 'Cypress', 'Rest Assured', 'Cucumber (BDD)', 'TestNG', 'JMeter', 'Gatling', 'SOAPUI']
    },
    {
      category: 'DevOps & Cloud',
      items: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Jenkins', 'Azure DevOps', 'CI/CD']
    },
    {
      category: 'API & Backend',
      items: ['Postman', 'Newman', 'Kafka', 'Swagger', 'REST', 'GraphQL', 'Microservices']
    },
    {
      category: 'Observability',
      items: ['Splunk', 'Datadog', 'ELK Stack', 'New Relic']
    },
    {
      category: 'Methodology',
      items: ['Agile / Scrum', 'TDD', 'BDD', 'POM', 'Contract Testing', 'Security Testing', 'API-First']
    }
  ];

  leadershipSkills = [
    'US Army Veteran', 'Team Leadership', 'Mentoring & Coaching',
    'Executive Communication', 'Distributed Team Management',
    'Conflict Resolution', 'Strategic Planning', 'Vendor Negotiation',
    'Budget Management', 'Public Speaking'
  ];
}
