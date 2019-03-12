import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from './photos/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alurapic';  
  photos: any[] = [];
  
  constructor(photoService: PhotoService){
    photoService
    .listFromUser('flavio')
    .subscribe(
      photos => {
        console.log(photos);
        this.photos = photos;
      },
      err => {
        console.log(err);
      }
    );
  }
}
