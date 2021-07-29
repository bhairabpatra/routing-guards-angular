import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(items: any, filter: any): any {

    if(filter == 'Price'){
      return items;
    }else if(filter == 2){
      return items.slice(0, 3);
    }else if(filter == 3){
      return items;
    }else{
      return [];
    }
}

}
