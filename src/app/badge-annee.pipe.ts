import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badgeAnnee'
})
export class BadgeAnneePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
