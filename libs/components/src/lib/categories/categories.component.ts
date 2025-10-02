
import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';
import { Category } from '@avenger/interfaces';
import { IonicSlides, IonCol } from '@ionic/angular/standalone';
import { ImageCircleComponent } from '../widgets/image-circle/image-circle.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  standalone: true,
  imports: [IonCol, ImageCircleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesComponent  implements OnInit {

  swiperModules = [IonicSlides];
  categories = input<Category[]>([]);

  constructor() { }

  ngOnInit() {}

}
