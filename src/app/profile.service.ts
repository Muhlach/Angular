import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Profile} from './profile';
import 'rxjs/Rx';

@Injectable()
export class ProfileService {

  private userUrl = "https://randomuser.me/api/?results=1";

  constructor(private http: Http) { }

  getUser(): Observable<Profile[]> {
    return this.http.get(this.userUrl)
      .map(this.extractData);

  }

  private extractData(res: Response) {
    let body = res.json();
    let profiles: Profile[] = new Array<Profile>();
    for (let c of body.results) {
      let user = c.login.username;
      let imgUrl = c.picture.medium;
      profiles.push(new Profile(imgUrl, user));
    }
    return profiles;
  }

}
