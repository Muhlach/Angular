import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Noticia} from './noticia';
import 'rxjs/Rx';

@Injectable()
export class NoticiasService {

  private userUrl = "https://node-hnapi.herokuapp.com/news?page=1";

  constructor(private http: Http) { }

  getUser(): Observable<Noticia[]> {
    return this.http.get(this.userUrl)
      .map(this.extractData);

  }

  private extractData(res: Response) {
    let body = res.json();
    let noticias: Noticia[] = new Array<Noticia>();
    for (let c of body) {
      let user = c.user;
      let title = c.title;
      let comments = c.comments_count;
      let points = c.points;
      let time = c.time;
      let url = c.url;
      noticias.push(new Noticia(user, title, comments, points, time,url));
    }
    return noticias;
  }



}
