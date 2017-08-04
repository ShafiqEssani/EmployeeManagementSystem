import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array: Array<any>, input: any) {

    if (input) {
      input = input.toLowerCase();
      return array.filter(function (el: any) {
        return el.fname.toString().toLowerCase().indexOf(input) > -1;
      })
    }
    return array;




    // array.filter((a: any, b: any) => {
    //   if (a[field] != b[field]) {
    //     return 0;
    //   }
    // });

  }
}
