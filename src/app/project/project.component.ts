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
      title: 'Mobile Shoping Application',
      description: 'The Mobile Shoping Platform is a web application designed to streamline mobile device sales, featuring distinct dashboards for both users and administrators. Users can securely register, log in, browse products, make purchases, and manage their orders, while admins can add, edit, and delete products, manage user accounts, and view detailed product listings. Built with a technology stack that includes .NET Core 8 for the backend—utilizing Repository and DTO patterns, AutoMapper, Entity Framework, and MS SQL—and Angular for the frontend with Dependency Injection, Reactive Forms, JWT Validation, and Local Storage, the platform offers a responsive design that ensures a seamless experience across all devices, along with secure authentication and efficient data handling.',
      gitLink: 'https://github.com/Imthiyas03',
      images: ['assets/2.png', 'assets/3.png','assets/4.png','assets/5.png','assets/6.png'],
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
