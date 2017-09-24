import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class AnalyzeService {

  constructor(private http: Http) { }

  public analyze(txtEntrada: string): Observable<any> {
    return this.http.post(environment.backUrl+'/analyze', { txtEntrada: txtEntrada }).map(res => res.json());
  }
}
