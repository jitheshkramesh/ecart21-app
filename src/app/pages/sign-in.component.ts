import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthStore,User } from '../services/auth.store';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent { 
  email = signal('');
  password = signal('');
  errorMessage = signal('');

  constructor(private router: Router, public auth: AuthStore) {}

  signIn() {
    if (!this.email() || !this.password()) {
      this.errorMessage.set('Email and password are required');
      return;
    }
    // Add your sign-in logic here

    const user: User = {
      id: this.email().split('@')[0],
      name: this.email(),
      role: 'ADMIN'
    };

    this.auth.setUser(user);
    this.router.navigate(['/product-list']);
  }
}