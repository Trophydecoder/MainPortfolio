import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OciJourneyComponent } from './oci-journey.component';

describe('OciJourneyComponent', () => {
  let component: OciJourneyComponent;
  let fixture: ComponentFixture<OciJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OciJourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OciJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
