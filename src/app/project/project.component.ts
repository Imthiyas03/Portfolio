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
      title: 'Mobile Shopping Application',
      description: 'The Mobile Shopping Platform is a web application designed to streamline mobile device sales, featuring distinct dashboards for both users and administrators. Users can securely register, log in, browse products, make purchases, and manage their orders, while admins can add, edit, and delete products, manage user accounts, and view detailed product listings. Built with a technology stack that includes .NET Core 8 for the backend—utilizing Repository and DTO patterns, AutoMapper, Entity Framework, and MS SQL—and Angular for the frontend with Dependency Injection, Reactive Forms, JWT Validation, and Local Storage, the platform offers a responsive design that ensures a seamless experience across all devices, along with secure authentication and efficient data handling.',
      gitLink: 'https://github.com/Imthiyas03',
      tags: ['.NET Core 8', 'Angular', 'EF Core', 'MS SQL', 'JWT', 'AutoMapper'],
      images: ['assets/1.png', 'assets/2.png', 'assets/3.png','assets/4.png','assets/5.png','assets/6.png'],
      currentImage: 'assets/1.png',
      currentIndex: 0
    },
    {
      title: 'Inventory Management System',
      description: 'A role-based inventory and billing platform for retail stores. Stock can be updated manually or by uploading supplier invoices, and products can be added or modified individually or in bulk by downloading a predefined Excel template, editing it and uploading it back with row-level validation. Every process runs through a Maker-Checker workflow driven by roles, where each request gets a unique reference code built from a process prefix and timestamp (e.g. STK-20261012-104522) and takes effect only after a checker approves it. The billing counter supports barcode scanning and manual item entry, with role-specific dashboards and sales reports. Admin makers and checkers manage user creation, role creation and screen-level permissions through the same approval flow. Built with Angular 16 on the frontend and .NET 8 Web API with MS SQL Server on the backend.',
      gitLink: 'https://github.com/Imthiyas03',
      tags: ['Angular 16', '.NET 8', 'MS SQL', 'Maker-Checker', 'RBAC', 'Excel Bulk Upload', 'Barcode Billing'],
      images: ['assets/inv-1.png', 'assets/inv-2.png', 'assets/inv-3.png', 'assets/inv-4.png', 'assets/inv-5.png', 'assets/inv-6.png', 'assets/inv-7.png'],
      currentImage: 'assets/inv-1.png',
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
