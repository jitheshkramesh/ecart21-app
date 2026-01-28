import { Component, signal, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  
  products = signal([
    { id: 1, name: 'Laptop', price: 999.99, description: 'High-performance laptop' },
    { id: 2, name: 'Mouse', price: 29.99, description: 'Wireless optical mouse' },
    { id: 3, name: 'Keyboard', price: 79.99, description: 'Mechanical gaming keyboard' },
    { id: 4, name: 'Monitor', price: 299.99, description: '27-inch 4K display' },
    { id: 5, name: 'Headphones', price: 149.99, description: 'Noise-canceling headphones' },
    { id: 6, name: 'Webcam', price: 89.99, description: '1080p web camera' }
  ]);

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

  ngOnInit(): void {
      console.log('Logged In successfully')
  }
}
