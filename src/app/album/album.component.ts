import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Subscription } from 'rxjs';
import { Album } from './album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  albums:any
  constructor(private albumService:AlbumService, private album:Album){
    this.getAlbums();
  }
  public getAlbums(){
    
    this.albums = this.albumService.getAllAlbums().subscribe(data => {
      this.albums=data;
    });
    return this.albums;
  }
}
