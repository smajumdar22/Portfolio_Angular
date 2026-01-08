import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    MatCardModule   // ✅ for mat-card
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {

  openDemo() {
    console.log('Skill card clicked');
  }

}
