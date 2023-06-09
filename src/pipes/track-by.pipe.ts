import { Pipe, PipeTransform, TrackByFunction } from '@angular/core';

@Pipe({
  name: 'trackByProperty',
})
export class TrackByPropertyPipe<T> implements PipeTransform {
  transform(propertyName: keyof T): TrackByFunction<T> {
    return (_index: number, obj: T) => obj && obj[propertyName];
  }
}
