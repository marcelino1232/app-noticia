import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  //url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=37b9b5db767741a0ac7bab60b1848cab';
  key = '37b9b5db767741a0ac7bab60b1848cab';
  constructor(private http:HttpClient) { }

  getNoticias(noticia:any): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=${noticia.pais}&category=${noticia.categoria}&apiKey=${this.key}`;
    return this.http.get(url);
  }
}
