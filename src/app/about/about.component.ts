import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  stack = ['C#', '.NET Core', 'Web API', 'Entity Framework', 'Angular', 'TypeScript', 'RxJS', 'SQL Server', 'PostgreSQL', 'Docker'];
}
