import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education = [
    {
      degree: 'Master of Business Administration (MBA)',
      institution: 'Foster School of Business, University of Washington',
      location: 'Seattle, WA',
      duration: '2025 – Present'
    },
    {
      degree: 'Certificate – MERN Stack',
      institution: 'Code Fellows',
      location: 'Seattle, WA',
      duration: 'Completed'
    },
    {
      degree: 'M.S. in Electrical & Electronics Engineering',
      institution: 'California State University',
      location: 'Los Angeles, CA',
      duration: 'Completed'
    }
  ];
}
