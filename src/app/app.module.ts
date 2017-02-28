import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasService } from './noticias.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { BuscarComponent } from './buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiaComponent,
    ProfileComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoticiasService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
