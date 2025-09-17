import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CurrencyService } from '@avenger/service';
import { generateUuid } from '@avenger/utils';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
  ],
})
export class Tab1Page {
  public readonly uuid: string;
  public readonly currencySymbol: string;

  constructor(private currencyService: CurrencyService) {
    this.uuid = generateUuid();
    this.currencySymbol = this.currencyService.getCurrentSymbol('dollar');
  }
}
