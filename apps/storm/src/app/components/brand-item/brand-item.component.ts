import { Component, input, OnInit } from '@angular/core';

import { IonCard, IonCol, IonAvatar, IonBadge, IonLabel } from "@ionic/angular/standalone";
import { ViewAllCardComponent } from "../view-all-card/view-all-card.component";
import { Brand } from '../../interfaces/brand.interface';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.scss'],
  imports: [IonLabel, IonBadge, IonAvatar, IonCol, IonCard, ViewAllCardComponent]
})
export class BrandItemComponent  implements OnInit {
  readonly brand = input<Brand>();
  readonly isViewAll = input<boolean>(false);

  constructor() {}

  ngOnInit() {}
}
