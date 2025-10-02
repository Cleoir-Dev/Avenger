import { Injectable } from '@angular/core';
import { banners } from '@avenger/dummy-data';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() { }

  getBanners() {
    return banners;
  }
}
