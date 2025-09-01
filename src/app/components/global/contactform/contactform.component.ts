import { Component } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import swal from 'sweetalert';

@Component({
  selector: 'app-contactform',
  imports: [FormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl:'./contactform.component.scss',
  animations: [
    trigger('scrollAnimation', [
      transition('* => *', [
        query('.fade-in', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(200, [
            animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
      ])
    ])
  ]
})
export class ContactformComponent {

  sendEmail(form: any) {
    // Check if all fields are filled
    if (!form.name || !form.email || !form.message) {
      swal({
        title: "Incomplete Form",
        text: "Please fill in all fields before sending.",
        icon: "warning",
      });
      return;
    }

    // Send email
    emailjs.send(
      'service_h902icy',      // your EmailJS service ID
      'template_hmhses9',     // your EmailJS template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message
      },
      'cyX0me-Uk20l7lWMj'    // your EmailJS public key
    ).then(
      (result) => {
        swal({
          title: "Message Sent!",
          text: "Thank you for reaching out. I will get back to you soon.",
          icon: "success",

        });
        // Reset form after success
        form.name = '';
        form.email = '';
        form.message = '';
      },
      (error) => {
        swal({
          title: "Error",
          text: "Failed to send message. Please try again later.",
          icon: "error",
        });
      }
    );
  }
}
