import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WpapiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WpapiProvider {

  constructor(public http: Http) {
    console.log('Hello WpapiProvider Provider');
  }
index(id){
    return this.http.get('http://meleknur.com/wp-json/wp/v2/posts/?_embed&?filter[order]=DESC&filter[posts_per_page]=5&page='+id)
  
  }
}
