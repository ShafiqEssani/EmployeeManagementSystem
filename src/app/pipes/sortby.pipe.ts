import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortby'
})
export class SortbyPipe implements PipeTransform {

  transform(array: Array<string>, args?: any): any {
    
    if (array) {

      let sortField = args[0];  // that we'll be passing in address etc
      let sortDirection = args[1];
      let modifier = 1;

      if (sortDirection === 'desc') {
        modifier = -1;
      }
      
      array.sort((a: any, b: any) => {
        if (a[sortField] < b[sortField]) {
          return -1 * modifier;
        } else if (a[sortField] > b[sortField]) {
          return 1* modifier;
        } else
          return 0;
      });

      return array;
    }
  }
}
