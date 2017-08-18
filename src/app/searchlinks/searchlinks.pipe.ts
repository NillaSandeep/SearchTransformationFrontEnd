import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'searlinks' })
export class SearchlinksPipe implements PipeTransform {
  transform(categories: any, searchText: any): any {
    if(searchText == null) return categories;

    return categories.filter(function(category){
      return category.CategoryName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}
