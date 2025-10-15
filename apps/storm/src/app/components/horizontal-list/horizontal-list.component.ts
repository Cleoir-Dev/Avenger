import { NgTemplateOutlet } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, input, OnInit, TemplateRef, viewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [NgTemplateOutlet]
})
export class HorizontalListComponent<T>  implements OnInit {

  swiperModules = [IonicSlides];
  swiperRef = viewChild<ElementRef>('swiper');

  itemTemplate = input.required<TemplateRef<{ $implicit: T }>>();

  readonly items = input.required<T[]>();
  config = input<{
    slidesPerView: number;
    spaceBetween?: number;
    // keyboard?: boolean;
    // mousewheel?: boolean;
    // pagination?: any;
    // navigation?: boolean;
    // initialSlide?: number;
    // centeredSlides?: boolean;
    // autoplay?: boolean;
    // loop?: boolean;
    // breakpoints?: {
    //   [key: string]: {
    //     slidesPerView: number;
    //     spaceBetween?: number;
    //   };
    // };
  }>();

  isViewAll = input<boolean>(true);
  viewAllTemplate = input<TemplateRef<any>>();

  constructor() { }

  ngOnInit() {}

  onSlideChange() {
    const swiperElement = this.swiperRef()?.nativeElement.swiper;
    const currentIndex = swiperElement.activeIndex;

    // if (currentIndex >= 0) this.currentIndex.set(currentIndex);
    console.log(currentIndex);
  }

  slideTo(index: number) {
    console.log('index: ', index);
    const swiperElement = this.swiperRef()?.nativeElement.swiper;
    swiperElement.slideTo(index, 300, false);
    swiperElement.update();
  }

}
