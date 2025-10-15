import { Component, input, OnInit } from '@angular/core';

import {
  IonCard,
  IonBadge,
  IonThumbnail,
  IonItem,
  IonLabel,
  IonText,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { ViewAllCardComponent } from '../view-all-card/view-all-card.component';
import { CurrencyPipe } from '@angular/common';
import { addIcons } from 'ionicons';
import { bookmarkOutline } from 'ionicons/icons';
import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss'],
  imports: [
    IonIcon,
    IonButton,
    IonText,
    IonLabel,
    IonItem,
    IonBadge,
    IonCard,
    IonThumbnail,
    ViewAllCardComponent,
    CurrencyPipe,
  ],
})
export class CarItemComponent implements OnInit {
  car = input<Car>();
  isViewAll = input<boolean>(false);

  constructor() {
    addIcons({ bookmarkOutline });
  }

  ngOnInit() {}
}
