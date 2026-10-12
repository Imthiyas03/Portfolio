import { Component } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: Project[] = [
    {
      title: 'Inventory Management System',
      description: 'A role-based inventory and billing platform for retail stores. Stock can be updated manually or by uploading supplier invoices, and products can be added or modified individually or in bulk by downloading a predefined Excel template, editing it and uploading it back with row-level validation. Every process runs through a Maker-Checker workflow driven by roles, where each request gets a unique reference code built from a process prefix and timestamp (e.g. STK-20261012-104522) and takes effect only after a checker approves it. The billing counter supports barcode scanning and manual item entry, with role-specific dashboards and sales reports. Admin makers and checkers manage user creation, role creation and screen-level permissions through the same approval flow. Built with Angular 16 on the frontend and .NET 8 Web API with MS SQL Server on the backend.',
      gitLink: 'https://github.com/Imthiyas03',
      tags: ['Angular 16', '.NET 8', 'MS SQL', 'Maker-Checker', 'RBAC', 'Excel Bulk Upload', 'Barcode Billing'],
      images: ['assets/inv-8.png', 'assets/inv-1.png', 'assets/inv-9.png', 'assets/inv-10.png', 'assets/inv-2.png', 'assets/inv-3.png', 'assets/inv-4.png', 'assets/inv-13.png', 'assets/inv-5.png', 'assets/inv-11.png', 'assets/inv-6.png', 'assets/inv-12.png', 'assets/inv-7.png'],
      currentImage: 'assets/inv-8.png',
      currentIndex: 0
    },
    {
      title: 'Help Desk Ticketing System',
      description: 'A support platform for a software product team. Customers report bugs, production incidents, API and integration issues, performance problems and data-fix requests from a self-service portal, with module, environment, app version and steps to reproduce. Tickets follow a three-level support model: L1 Service Desk triages and resolves known issues, L2 Application Support investigates logs, data and integrations, and L3 Engineering delivers code fixes and hotfixes. A rule engine routes each ticket to the right level and team (production P1 incidents go straight to the L3 on-call engineer), agents escalate or de-escalate with a hand-over note, escalation to L3 requires a linked Jira item, and P1/P2 tickets still at L1 after 30 minutes move to L2 automatically. SLA timers run in business hours, pause while waiting on the customer or a release, and trigger alerts at 75%, 100% and 150%. A live Kanban board by level uses SignalR, the knowledge base suggests known issues and release notes as users type, and reports cover L1 resolution rate, L3 escalation rate and SLA compliance. Built with Angular 16, .NET 8 Web API, SignalR and MS SQL Server.',
      gitLink: 'https://github.com/Imthiyas03',
      tags: ['Angular 16', '.NET 8', 'SignalR', 'MS SQL', 'L1/L2/L3 Support', 'SLA Engine', 'Auto-Escalation'],
      images: ['assets/hd-1.png', 'assets/hd-2.png', 'assets/hd-3.png', 'assets/hd-4.png', 'assets/hd-5.png', 'assets/hd-6.png', 'assets/hd-7.png', 'assets/hd-8.png', 'assets/hd-9.png'],
      currentImage: 'assets/hd-1.png',
      currentIndex: 0
    },
    {
      title: 'Mobile Shopping Application',
      description: 'The Mobile Shopping Platform is a web application designed to streamline mobile device sales, featuring distinct dashboards for both users and administrators. Users can securely register, log in, browse products, make purchases, and manage their orders, while admins can add, edit, and delete products, manage user accounts, and view detailed product listings. Built with a technology stack that includes .NET Core 8 for the backend—utilizing Repository and DTO patterns, AutoMapper, Entity Framework, and MS SQL—and Angular for the frontend with Dependency Injection, Reactive Forms, JWT Validation, and Local Storage, the platform offers a responsive design that ensures a seamless experience across all devices, along with secure authentication and efficient data handling.',
      gitLink: 'https://github.com/Imthiyas03',
      tags: ['.NET Core 8', 'Angular', 'EF Core', 'MS SQL', 'JWT', 'AutoMapper'],
      images: ['assets/1.png', 'assets/2.png', 'assets/3.png','assets/4.png','assets/5.png','assets/6.png'],
      currentImage: 'assets/1.png',
      currentIndex: 0
    }
  ];

  nextImage(project: Project) {
    project.currentIndex = (project.currentIndex + 1) % project.images.length;
    project.currentImage = project.images[project.currentIndex];
  }

  prevImage(project: Project) {
    project.currentIndex = (project.currentIndex - 1 + project.images.length) % project.images.length;
    project.currentImage = project.images[project.currentIndex];
  }
}
