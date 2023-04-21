import { Component, Input } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  listNoticias:any[] = [];
  loading = false;

  constructor(private _noticiaService:NoticiaService){
    
  }
  
  buscarNoticias(noticia:any){
    this.loading = true;

    setTimeout(() => {
      this._noticiaService.getNoticias(noticia).subscribe(data => {
        this.loading = false;
        this.listNoticias = data.articles;
      });
    },2000);
  }
  
}
