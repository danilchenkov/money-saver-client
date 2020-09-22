import { Injectable } from '@angular/core';

const CATEGORIES_MOCK: string[] = [
  'Food', 'Alko', 'Animals', 'Home Staff', 'Auto', 'Other',
];

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  constructor() { }

  getActiveCategories(): string[] {
    return CATEGORIES_MOCK;
  }
}
