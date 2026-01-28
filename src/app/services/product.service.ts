import { Injectable, signal } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = signal<Product[]>([
    {
      id: '1',
      name: 'Laptop',
      price: 999.99,
      description: 'High-performance laptop for work and gaming',
      image: 'https://via.placeholder.com/300?text=Laptop'
    },
    {
      id: '2',
      name: 'Wireless Mouse',
      price: 29.99,
      description: 'Ergonomic wireless mouse with 2.4GHz connection',
      image: 'https://via.placeholder.com/300?text=Mouse'
    },
    {
      id: '3',
      name: 'USB-C Cable',
      price: 12.99,
      description: 'Fast charging USB-C cable, 2 meters long',
      image: 'https://via.placeholder.com/300?text=USB-C+Cable'
    },
    {
      id: '4',
      name: 'Mechanical Keyboard',
      price: 149.99,
      description: 'RGB mechanical keyboard with Cherry switches',
      image: 'https://via.placeholder.com/300?text=Keyboard'
    },
    {
      id: '5',
      name: 'Monitor',
      price: 349.99,
      description: '27-inch 4K monitor with HDR support',
      image: 'https://via.placeholder.com/300?text=Monitor'
    },
    {
      id: '6',
      name: 'Headphones',
      price: 199.99,
      description: 'Noise-cancelling Bluetooth headphones',
      image: 'https://via.placeholder.com/300?text=Headphones'
    }
  ]);

  getProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products().find(p => p.id === id);
  }
}
