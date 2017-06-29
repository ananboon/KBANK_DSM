import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ImageService {

  bannerImages = [];
  rowCounterUdImages = [];
  constructor(
    @Inject(Http) private http: Http
  ){}


  getBanners(){
    this.http.get('./assets/Banner/banners.json').subscribe(
      (response: Response) => {
        this.bannerImages = response.json();
      }
    );
  }
}
