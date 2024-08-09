import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor() { }

  onSubmit() {
    const templateParams = {
      from_name: this.form.firstName + ' ' + this.form.lastName,
      from_email: this.form.email,
      subject: this.form.subject,
      message: this.form.message
    };

    emailjs.send('service_uqr8agx', 'template_elai1tr', templateParams, '0piBcZt4OpK7cxihh')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Error sending message.');
      });

    // Reset form after submission
    this.form = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
