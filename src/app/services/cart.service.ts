import { Injectable, computed, signal } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  description?: string;
  quantity?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = signal<CartItem[]>([]);

  itemCount = computed(() =>
    this.items().reduce((sum, item) => sum + (item.quantity || 1), 0)
  );

  totalPrice = computed(() =>
    this.items().reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
  );

  getItems = computed(() => [...this.items()]);

  addToCart(item: CartItem): void {
    const currentItems = this.items();
    const existingItem = currentItems.find(i => i.id === item.id);

    if (existingItem) {
      this.items.update(items =>
        items.map(i =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        )
      );
    } else {
      this.items.update(items => [...items, { ...item, quantity: 1 }]);
    }
  }

  removeFromCart(id: number): void {
    this.items.update(items => items.filter(i => i.id !== id));
  }

  addItem(item: CartItem): void {
    const currentItems = this.items();
    const existingItem = currentItems.find(i => i.id === item.id);

    if (existingItem) {
      this.items.update(items =>
        items.map(i =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + (item.quantity || 1) } : i
        )
      );
    } else {
      this.items.update(items => [...items, item]);
    }
  }

  removeItem(id: string | number): void {
    this.items.update(items => items.filter(i => i.id !== id));
  }

  updateQuantity(id: string | number, quantity: number): void {
    if (quantity <= 0) {
      this.removeItem(id);
    } else {
      this.items.update(items =>
        items.map(i => (i.id === id ? { ...i, quantity } : i))
      );
    }
  }

  clearCart(): void {
    this.items.set([]);
  }
}
