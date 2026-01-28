import { Injectable, signal, computed } from '@angular/core';

export interface User {
  id: string;
  name: string;
  role: 'ADMIN' | 'USER';
}

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private userSignal = signal<User | null>(null);

  user = computed(() => this.userSignal());
  isLoggedIn = computed(() => !!this.userSignal());
  isAdmin = computed(() => this.userSignal()?.role === 'ADMIN');

  setUser(user: User) {
    this.userSignal.set(user);
  }

  clearUser() {
    this.userSignal.set(null);
  }
}
