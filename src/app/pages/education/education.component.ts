import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education = [
    {
      degree: 'Master of Business Administration (MBA)',
      institution: 'Foster School of Business, University of Washington',
      location: 'Seattle, WA',
      duration: '2025 – 2027',
      active: true,
      note: 'Focus areas: Product Strategy, Venture Capital, Technology Management. Targeting PM roles at FAANG-tier companies upon graduation.'
    },
    {
      degree: 'M.S. in Electrical & Electronics Engineering',
      institution: 'California State University',
      location: 'Los Angeles, CA',
      duration: 'Completed',
      active: false,
      note: 'Graduate engineering foundation underpinning 12+ years of systems and software expertise.'
    },
    {
      degree: 'Certificate — MERN Stack Development',
      institution: 'Code Fellows',
      location: 'Seattle, WA',
      duration: 'Completed',
      active: false,
      note: null
    }
  ];
}
