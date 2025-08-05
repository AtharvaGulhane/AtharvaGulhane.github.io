import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitting = false;

  onSubmit() {
    if (this.submitting) return;
    
    this.submitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      this.submitting = false;
      
      // Show success message (you can implement a toast notification here)
      alert('Thank you for your message! I\'ll get back to you soon.');
    }, 2000);
  }
}
