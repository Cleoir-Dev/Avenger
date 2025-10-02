import { Injectable } from '@angular/core';
import { banners } from '@avenger/dummy-data';
import { Banner } from '@avenger/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() { }

  getBanners(): Banner[] {
    return banners.map((banner: any): Banner => ({
      id: banner.id,
      banner: banner.banner,
      active: banner.active
    }));
  }
}
