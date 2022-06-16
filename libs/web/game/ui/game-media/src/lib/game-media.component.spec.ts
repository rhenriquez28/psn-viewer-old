import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMediaComponent } from './game-media.component';

describe('GameMediaComponent', () => {
  let component: GameMediaComponent;
  let fixture: ComponentFixture<GameMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameMediaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
