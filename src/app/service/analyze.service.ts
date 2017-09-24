import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AnalyzeService {

  constructor(private http: Http) { }

  public analyze(txtEntrada: string): Observable<any> {
    const url = 'http://localhost:3000/analyze';
    console.log("Service : " + txtEntrada);
    return this.http.post(url, { txtEntrada: txtEntrada }).map(res => res.json());
  }
}
