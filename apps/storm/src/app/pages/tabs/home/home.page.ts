import { Component, OnInit, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonInput, IonList, IonCard, IonCardContent, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  menuOutline,
  notificationsOutline,
  personOutline,
  searchOutline,
  paperPlaneOutline,
  arrowForwardOutline,
} from 'ionicons/icons';
import { ListHeaderComponent } from "../../../components/list-header/list-header.component";
import { HorizontalListComponent } from "../../../components/horizontal-list/horizontal-list.component";

import { CarItemComponent } from "../../../components/car-item/car-item.component";
import { BrandItemComponent } from "../../../components/brand-item/brand-item.component";
import { brands } from '../../../mock-data/brands';
import { Brand } from '../../../interfaces/brand.interface';
import { Car } from '../../../interfaces/car.interface';
import { cars } from '../../../mock-data/cars';
import { Banner } from '../../../interfaces/banner.interface';
import { banners } from '../../../mock-data/banners';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonCardContent, IonCard, IonList,
    IonInput,
    IonIcon,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonToolbar,
    ListHeaderComponent, HorizontalListComponent, CarItemComponent, BrandItemComponent],
})
export class HomePage implements OnInit {

  brands = signal<Brand[]>(brands);
  cars = signal<Car[]>(cars);
  recentViewedCars = signal<Car[]>(cars.slice(0, 3));
  featuredBanners = signal<Banner[]>(banners);
  
  constructor() {
    addIcons({
      menuOutline,
      personOutline,
      notificationsOutline,
      searchOutline,
      paperPlaneOutline,
      arrowForwardOutline
    });
  }

  ngOnInit() {}
}
