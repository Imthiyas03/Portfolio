import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  // Google Drive file ID of the CV. Update the file in Drive via "Manage versions" to keep this ID.
  private readonly cvFileId = '1DmdP7mQGbmFkLSB0cNvVbr20a1vUoADC';
  cvUrl = `https://drive.google.com/uc?export=download&id=${this.cvFileId}`;

  skills: { name: string; tags: string[]; points: string[] }[] = [
    {
      name: '.NET',
      tags: ['C#', '.NET 8', '.NET 5', 'ASP.NET Core', 'Web API', 'EF Core', 'LINQ', 'Swagger', 'Postman'],
      points: [
        'Layered microservices: API → BL → DAL → EF, each behind interfaces.',
        'RESTful APIs with DTO & Repository patterns, AutoMapper and async/await.',
        'Upgrading legacy .NET 5 services to .NET 8 with DI and minimal hosting.',
        'Docker, GitLab CI and Azure Pipelines for build & deploy.'
      ]
    },
    {
      name: 'Angular',
      tags: ['Angular 22', 'Angular 16', 'TypeScript', 'RxJS', 'Standalone', 'Signals', 'Native Federation'],
      points: [
        'Building feature screens with standalone components, services and typed models.',
        'Integrating with .NET Web APIs for end-to-end CRUD flows.',
        'Typed API layer with HTTP interceptors for auth, loading, errors and retry.',
        'Reusable UI design system, Reactive Forms and custom validators.',
        'Lazy-loaded routing, guards and environment-driven config.',
        'Migrating a legacy JSP/jQuery app to Angular micro-frontends (host + remotes).'
      ]
    },
    {
      name: 'MS SQL Server',
      tags: ['T-SQL', 'Stored Procedures', 'Joins', 'Transactions', 'Indexing'],
      points: [
        'Writing and tuning complex queries and stored procedures.',
        'Analysing SP-driven business logic to map screen → API → SP → tables.',
        'Transactions and data consistency across insert/update flows.'
      ]
    },
    {
      name: 'PostgreSQL',
      tags: ['PostgreSQL', 'Npgsql', 'EF Core', 'Schemas & Roles', 'Indexing', 'Connection Pooling'],
      points: [
        'Working on the .NET side of converting a complete application from MS SQL to PostgreSQL.',
        'Adapting data access, queries and EF Core configuration for PostgreSQL.',
        'Indexing, connection management and pool sizing for performance.'
      ]
    },
    {
      name: 'AI-Assisted Development',
      tags: ['Claude', 'ChatGPT'],
      points: [
        'Using Claude and ChatGPT for codebase exploration, migration analysis, documentation and faster development.'
      ]
    }
  ];
}
