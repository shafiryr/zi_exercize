import { Pipe, PipeTransform } from '@angular/core';
import { ListItem } from '../models/list-item';

@Pipe({
  name: 'getMemberId'
})
export class GetMemberIdPipe implements PipeTransform {

  transform(value: string, members: ListItem[]): string {    
    if (value && members?.length > 0) {
      return members.find(member => member.label === value)?.id;
    }
    return null;
  }

}
