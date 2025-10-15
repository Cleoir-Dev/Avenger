import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon, IonButton } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { chevronForwardCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-view-all-card',
  templateUrl: './view-all-card.component.html',
  styleUrls: ['./view-all-card.component.scss'],
  imports: [IonButton, IonIcon, RouterLink]
})
export class ViewAllCardComponent  implements OnInit {

  route = input<string[]>();

  constructor() { 
    addIcons({
      chevronForwardCircleOutline
    });
  }

  ngOnInit() {}

}
