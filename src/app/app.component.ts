import { Component, OnInit } from '@angular/core';
import { PhotosService } from './services/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(public _photosService: PhotosService){}

  ngOnInit() {
    this._photosService.getPhotos().subscribe(
      photos => {
        return console.log(photos);
      },
      error => {
        console.log(error)
      }
    );
  }
}
