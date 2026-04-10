import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProjectSetup } from './angular-project-setup';

describe('AngularProjectSetup', () => {
  let component: AngularProjectSetup;
  let fixture: ComponentFixture<AngularProjectSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularProjectSetup],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularProjectSetup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
