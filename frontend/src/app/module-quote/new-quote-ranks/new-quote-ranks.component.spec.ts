import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuoteRanksComponent } from './new-quote-ranks.component';

describe('NewQuoteRanksComponent', () => {
  let component: NewQuoteRanksComponent;
  let fixture: ComponentFixture<NewQuoteRanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQuoteRanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewQuoteRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
