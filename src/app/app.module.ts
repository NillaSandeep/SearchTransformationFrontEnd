import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RetrievelinksComponent } from './retrievelinks/retrievelinks.component';
import { CreatelinksComponent } from './createlinks/createlinks.component';
import { SearchlinksComponent } from './searchlinks/searchlinks.component';
import { DeletelinkComponent } from './deletelink/deletelink.component';

@NgModule({
  declarations: [
    AppComponent,
    RetrievelinksComponent,
    CreatelinksComponent,
    SearchlinksComponent,
    DeletelinkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
