import { Component, computed, inject } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
  IonText,
  IonRow,
  IonCol,
  IonSearchbar,
} from '@ionic/angular/standalone';
import {
  chevronDownOutline,
  location,
  cart,
  notifications,
  options,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { BannerService, CategoryService, CurrencyService, ProductService } from '@avenger/service';
import { generateUuid } from '@avenger/utils';
import { Banner, Category, Product } from '@avenger/interfaces';
import {
  ListHeadingComponent,
  BannerComponent,
  CategoriesComponent,
  ProductListHorizontalComponent,
} from '@avenger/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonContent,
    IonItem,
    IonLabel,
    IonIcon,
    IonButton,
    IonText,
    IonRow,
    IonCol,
    IonSearchbar,
    ListHeadingComponent,
    BannerComponent,
    CategoriesComponent,
    ProductListHorizontalComponent
  ],
})
export class HomePage {
  public readonly uuid: string;
  public readonly currencySymbol: string;

  private readonly currencyService = inject(CurrencyService);
  private readonly bannerService = inject(BannerService);
  private readonly categoryService = inject(CategoryService);
  private readonly productService = inject(ProductService);

  banners = computed<Banner[]>(() => this.bannerService.getBanners());
  categories = computed<Category[]>(() => this.categoryService.getCategories());
  products = computed<Product[]>(() => this.productService.getProducts());


  constructor() {
    addIcons({ location, chevronDownOutline, cart, notifications, options });
    this.uuid = generateUuid();
    console.log(this.uuid);
    this.currencySymbol = this.currencyService.getCurrentSymbol('dollar');
    console.log(this.currencySymbol);
  }
}
