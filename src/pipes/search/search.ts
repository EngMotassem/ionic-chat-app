import { Pipe, PipeTransform } from '@angular/core';
import { Profile } from '../../app/model/profile';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(items: Profile[], terms?: string): any {
    if(!items) return [];
  if(!terms) return items;
  terms = terms.toLowerCase();
  return items.filter( it => {
    return it.firstname.toLowerCase().includes(terms); // only filter product name
  });
}
}