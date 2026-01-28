import { Component, signal, inject } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
 
  title = signal('eCart21');
  isAuthRoute = signal(false);
   isLoggedIn = signal(false);
  private router = inject(Router);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const authRoutes = ['/sign-in', '/sign-up'];
        this.isAuthRoute.set(authRoutes.some(route => event.url.includes(route)));
      });

       const token = localStorage.getItem('authToken');
     this.isLoggedIn.set(!!token);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const authRoutes = ['/sign-in', '/sign-up'];
        this.isAuthRoute.set(authRoutes.some(route => event.url.includes(route)));
      });
  }     

  logout() {
    localStorage.removeItem('authToken');
    this.isLoggedIn.set(false);
    this.router.navigate(['/sign-in']);
  } 
}