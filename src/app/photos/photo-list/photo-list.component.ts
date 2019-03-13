import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  
  constructor(private photoService: PhotoService){ /*utilizar construtor apenas para injeção de dependências*/ }
  
  ngOnInit(): void {
    this.photoService
    .listFromUser('flavio')
    .subscribe(
      photos => {
        console.log(photos[0].user);
        this.photos = photos;
      },
      err => {
        console.log(err);
      }
    );    
  }

}
