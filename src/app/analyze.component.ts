import {Component} from '@angular/core';
import {AnalyzeService} from './service/analyze.service';

@Component({
  selector: 'analyze-component',
  templateUrl: './analyze.component.html'
})
export class AnalyzeComponent {

  constructor(private analyzeService: AnalyzeService) { }

  public txtEntrada: string;
  public avaliation = null;
  public error: string;

  public analyze(): void {

    this.analyzeService.analyze(this.txtEntrada)
      .subscribe(res => {
        this.avaliation = res;
        this.error = '';
      }, error => {
        console.error(error);
        this.error = 'Ocorreu um erro ao analizar, tente novamente';
      });
  }


}
