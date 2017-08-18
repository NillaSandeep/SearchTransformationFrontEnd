import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {  } from '../retrievelinks';
@Pipe({
  name: 'searchfilter',
})
@Component({
  selector: 'app-searchlinks',
  templateUrl: './searchlinks.component.html',
  styleUrls: ['./searchlinks.component.css']
})
export class SearchlinksComponent{

  constructor() { }

}
