import {Pipe, PipeTransform} from '@angular/core';
@Pipe({ name: 'search' })
export class SearchlinksPipe implements PipeTransform {
  transform(links: any, searchText: any): any {
    if (searchText == null) { return links; }

    return links.filter(function(link){
      return link.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ?
        (link.name.toLowerCase().indexOf(searchText.toLowerCase())) > -1 :
        (link.tag.toLowerCase().indexOf(searchText.toLowerCase())
      ) > -1;
    });
  }
}
