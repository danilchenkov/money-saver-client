import { Component, OnInit } from '@angular/core';

import { CalendarService } from '../Services/calendar.service';
import { CatalogService } from '../Services/catalog.service';

const COLUMN_HEADERS_MOCK = [
  'Date', 'Sum spend', 'Rest', 'Sum per day',
];

type DashboarHeader = { title: string };

@Component({
  selector: 'app-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.css']
})
export class TableMainComponent implements OnInit {
  
  constructor(
    private calendarService: CalendarService,
    private catalogService: CatalogService,
  ) {}
  
  currentDateRow: Array<string> = this.calendarService.getCurrentMonth();

  year: number;
  month: number;

  columns: Array<any> = [];

  categories: string[] = this.catalogService.getActiveCategories();

  columnsHeaders: DashboarHeader[] = this.getColumnHeaders();

  ngOnInit(): void {
  }

  getColumnHeaders(): DashboarHeader[] {
    const headers = [...COLUMN_HEADERS_MOCK, ...this.categories];
    return headers.map(el => ({ title: `${el}` }));
  }

  setCurrentYear(): number {
    return this.year = new Date().getFullYear();
  }

  setCurrentMonth(): number {
    return new Date().getMonth();
  }

}
