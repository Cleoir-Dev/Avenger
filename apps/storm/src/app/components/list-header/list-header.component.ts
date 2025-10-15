import { Component, input, OnInit } from '@angular/core';
import { IonItemDivider, IonLabel, IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
  imports: [IonIcon, IonButton, IonLabel, IonItemDivider, ]
})
export class ListHeaderComponent  implements OnInit {

  readonly heading = input.required<string>();
  readonly buttonName = input<string>();
  readonly buttonIcon = input.required<string>();
  readonly buttonColor = input.required<string>();

  constructor() { }

  ngOnInit() {}

}
