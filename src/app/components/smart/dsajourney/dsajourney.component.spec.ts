import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSAjourneyComponent } from './dsajourney.component';

describe('DSAjourneyComponent', () => {
  let component: DSAjourneyComponent;
  let fixture: ComponentFixture<DSAjourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DSAjourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DSAjourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
