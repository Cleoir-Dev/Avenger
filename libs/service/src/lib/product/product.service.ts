import { Injectable } from '@angular/core';
import { categories, products, sellers } from '@avenger/dummy-data';
import { Category, Product, Seller } from '@avenger/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  // Method to fetch all products
  getProducts(): Product[] {
    return products;
  }

  // Fetch product by ID along with seller and category data
  getProductById(
    id: number
  ): (Product & { seller?: Seller; category?: Category }) | null {
    const product = products.find((p: Product) => p.id === id);

    if (product) {
      const seller = sellers.find((s: Seller) => s.id === product.seller_id);
      const category = categories.find(
        (c: Category) => c.id === product.category_id
      );

      return { ...product, seller, category }; // Combine product, seller, and category data
    }

    return null; // Return null if product is not found
  }
}
