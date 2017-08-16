import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { RetrieveDataComponent } from './retrievedata.component';

@NgModule({
  declarations: [
    RetrieveDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RetrieveDataComponent]
})
export class RetrieveModule { }
