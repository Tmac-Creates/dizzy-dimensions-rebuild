import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaQueries } from './media-queries';

describe('MediaQueries', () => {
  let component: MediaQueries;
  let fixture: ComponentFixture<MediaQueries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaQueries],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaQueries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
