import {Input, Pipe, PipeTransform} from '@angular/core';
import * as dayjs from "dayjs";

@Pipe({
  name: 'badgeAnnee'
})
export class BadgeAnneePipe implements PipeTransform {

  transform(year:number): number {
    if (dayjs().year()-year < 1)
      return -1;
    else if (dayjs().year()-year < 5 && dayjs().year()-year > 1)
      return -5;
    else
      return +5;
  }

}
