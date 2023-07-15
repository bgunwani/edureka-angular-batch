import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(value: string, greetingMessage: string): string {
    return `${greetingMessage} ${value}!!`;
  }

}
