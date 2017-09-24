import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AnalyzeComponent} from './analyze.component';
import {FormsModule} from '@angular/forms';
import {AnalyzeService} from './service/analyze.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AnalyzeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AnalyzeService
  ],
  bootstrap: [AnalyzeComponent]
})
export class AppModule { }
