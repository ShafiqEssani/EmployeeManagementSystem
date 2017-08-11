import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array: Array<any>, input: any) {

    if (input) {
      input = input.toLowerCase();
      return array.filter(function (el: any) {

        return ( el.Firstname.toString().toLowerCase().indexOf(input) > -1 || el.Lastname.toString().toLowerCase().indexOf(input) > -1 );
      })
    }
    return array;
  }
}
