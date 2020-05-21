import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.css']
})
export class TableMainComponent implements OnInit {
  currentDateRow: Array<string> = [
    'Fri May 01 ', 'Sat May 02 ', 'Sun May 03 ',
    'Mon May 04 ', 'Tue May 05 ', 'Wed May 06 ',
    'Thu May 07 ', 'Fri May 08 ', 'Sat May 09 ',
    'Sun May 10 ', 'Mon May 11 ', 'Tue May 12 ',
    'Wed May 13 ', 'Thu May 14 ', 'Fri May 15 ',
    'Sat May 16 ', 'Sun May 17 ', 'Mon May 18 ',
    'Tue May 19 ', 'Wed May 20 ', 'Thu May 21 ',
    'Fri May 22 ', 'Sat May 23 ', 'Sun May 24 ',
    'Mon May 25 ', 'Tue May 26 ', 'Wed May 27 ',
    'Thu May 28 ', 'Fri May 29 ', 'Sat May 30 ',
    'Sun May 31 '
  ];
  year: number;
  month: number;

  columns: Array<any> = [];

  columnsHeaders: Array<any> = [
    { title: 'Date' },
    { title: 'Sum spend' },
    { title: 'ostatok' },
    { title: 'Sum in day' },
    { title: 'food' },
    { title: 'alko' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentYear(): number {
    return this.year = new Date().getFullYear();
  }

  setCurrentMonth(): number {
    return new Date().getMonth();
  }

}
