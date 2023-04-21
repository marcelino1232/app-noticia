import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-noticia',
  templateUrl: './list-noticia.component.html',
  styleUrls: ['./list-noticia.component.css']
})
export class ListNoticiaComponent {
   @Input() listadoNoticias:any;
}
