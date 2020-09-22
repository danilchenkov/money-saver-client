import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() {
    this.currentMonth = new Date().getMonth();
    this.currentYear = new Date().getFullYear();
  }

  private currentMonth: number;

  private currentYear: number;

  getCurrentMonth(): string[] {
    const ld = new Date(this.currentYear, this.currentMonth + 1, 0);

    const mArr = [];

    for (let i = 0; i < ld.getDate(); i++) {
      let _d = new Date(this.currentYear, this.currentMonth, 1 + i).toDateString();
      _d = _d.replace(`${this.currentYear}`, '');
      mArr.push(_d)
    }

    return mArr;
  }
}
