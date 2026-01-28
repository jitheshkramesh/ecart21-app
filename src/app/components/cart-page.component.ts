import { Component, signal, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  private cartService = inject(CartService);
  items = this.cartService.getItems;
  
  total = computed(() => {
    return this.items().reduce((sum, item) => sum + item.price, 0);
  });

  quantities = signal<{ [key: number]: number }>({});

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
  }

  updateQuantity(id: number, quantity: number): void {
    if (quantity > 0) {
      this.quantities.update(q => ({ ...q, [id]: quantity }));
    }
  }

  checkout(): void {
    alert('Proceeding to checkout!');
  }
}
