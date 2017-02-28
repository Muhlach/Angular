import { Component, OnInit } from '@angular/core';
import { Noticia } from "../noticia";
import { NoticiasService } from "../noticias.service";
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  private noticiaService: NoticiasService;
  private noticias: Noticia[];
  private errorMessage: string;

  constructor(noticiaService: NoticiasService) {
    this.noticiaService=noticiaService;
  }
  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.noticiaService.getUser().subscribe(
      noticias => this.noticias = noticias,
      error => this.errorMessage = <any>error);
  }

}
