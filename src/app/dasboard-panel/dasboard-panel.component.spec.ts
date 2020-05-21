import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardPanelComponent } from './dasboard-panel.component';

describe('DasboardPanelComponent', () => {
  let component: DasboardPanelComponent;
  let fixture: ComponentFixture<DasboardPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
