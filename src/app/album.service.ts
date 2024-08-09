import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = "http://localhost:8080/get-albums";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http:HttpClient) { }

  public getAllAlbums(){
    return this.http.get(URL);
  }
}
