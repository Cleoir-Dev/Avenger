import { Injectable } from '@angular/core';
import { categories, products, sellers } from '@avenger/dummy-data';
import { Category, Product, Seller, Variety } from '@avenger/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  // Method to fetch all products
  getProducts(): Product[] {
    return products.map((product: any): Product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      rating: product.rating,
      image: product.image,
      category_id: product.category_id,
      seller_id: product.seller_id,
      default_price: product.default_price,
      cut_price: product.cut_price,
      type: product.type,
      varieties: product.varieties.map((variety: any): Variety => ({
        id: variety.id,
        unit: variety.unit,
        quantity: variety.quantity,
        price: variety.price,
        is_default: variety.is_default
      }))
    }));
  }

  // Fetch product by ID along with seller and category data
  getProductById(
    id: number
  ): (Product & { seller?: Seller; category?: Category }) | null {
    const product = products.find((p: any) => p.id === id);

    if (product) {
      const seller = sellers.find((s: any) => s.id === product.seller_id);
      const category = categories.find((c: any) => c.id === product.category_id);

      const mappedProduct: Product = {
        id: product.id,
        name: product.name,
        description: product.description,
        rating: product.rating,
        image: product.image,
        category_id: product.category_id,
        seller_id: product.seller_id,
        default_price: product.default_price,
        cut_price: product.cut_price,
        type: product.type,
        varieties: product.varieties.map((variety: any): Variety => ({
          id: variety.id,
          unit: variety.unit,
          quantity: variety.quantity,
          price: variety.price,
          is_default: variety.is_default
        }))
      };

      const mappedSeller: Seller | undefined = seller ? {
        id: seller.id,
        name: seller.name,
        type: seller.type,
        role: seller.role,
        phone: seller.phone,
        email: seller.email,
        address: seller.address,
        lat: seller.lat,
        lng: seller.lng,
        pincode: seller.pincode,
        image: seller.image
      } : undefined;

      const mappedCategory: Category | undefined = category ? {
        id: category.id,
        name: category.name,
        image: category.image
      } : undefined;

      return { ...mappedProduct, seller: mappedSeller, category: mappedCategory };
    }

    return null; // Return null if product is not found
  }
}
