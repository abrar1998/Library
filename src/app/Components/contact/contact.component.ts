import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactForm } from '../../Models/ContactForm';
import Swal from 'sweetalert2'; // Import SweetAlert2

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Changed from styleUrl to styleUrls
})
export class ContactComponent {
  email: string = "thevisionlibrarychandilora@gmail.com";

  form: ContactForm = {
    name: '',
    email: '',
    message: '',
  }

  SendMail() {
    if (this.form.name === '' || this.form.email === '' || this.form.message === '') {
      Swal.fire({
        title: 'Oops!',
        text: 'Please enter your name, email, and message first!',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Contact Form Submission Failed!',
        text: 'We are unable to receive your contact form right now. Please send us an email directly or call/WhatsApp us!',
        icon: 'error',
        confirmButtonText: 'Close'
      });
    }
  }
}
