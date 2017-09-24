import { Injectable } from '@angular/core';
import { Subject }    from "rxjs/Subject";

@Injectable()
export class ShareableStreamStoreService {
  public streams: Object = {};

  getStream (key: string) {
    if ( this.streams[key] === null || this.streams[key] === undefined ) {
      this.streams[key] = new Subject();
    }

    return this.streams[key];
  }

  emit(key: string, value: any) {
    this.getStream(key).next(value);
  }
}


// отправка
// this.shareableStreamStoreService.emit('SelectedDay', this.dateServive.selectedDay(item.day, item.passDay)

// получение
// this.subscription = this.shareableStreamStoreService.getStream('notes')
//   .asObservable()
//   .subscribe(value => {
//     console.log(value);
//   });
