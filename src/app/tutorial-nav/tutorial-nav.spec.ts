import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialNav } from './tutorial-nav';

describe('TutorialNav', () => {
  let component: TutorialNav;
  let fixture: ComponentFixture<TutorialNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialNav],
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
