import { Injectable } from '@angular/core';
import { categories } from '@avenger/dummy-data';
import { Category } from '@avenger/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Category[] {
    return categories.map((category: any): Category => ({
      id: category.id,
      name: category.name,
      image: category.image
    }));
  } 
}
