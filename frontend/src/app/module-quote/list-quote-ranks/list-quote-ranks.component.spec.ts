import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuoteRanksComponent } from './list-quote-ranks.component';

describe('ListQuoteRanksComponent', () => {
  let component: ListQuoteRanksComponent;
  let fixture: ComponentFixture<ListQuoteRanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuoteRanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListQuoteRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
