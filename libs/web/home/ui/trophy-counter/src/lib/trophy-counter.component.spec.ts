import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophyCounterComponent } from './trophy-counter.component';

describe('TrophyCounterComponent', () => {
  let component: TrophyCounterComponent;
  let fixture: ComponentFixture<TrophyCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrophyCounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrophyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
