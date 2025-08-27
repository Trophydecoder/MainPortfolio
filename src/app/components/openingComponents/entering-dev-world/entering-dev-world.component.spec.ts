import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteringDevWorldComponent } from './entering-dev-world.component';

describe('EnteringDevWorldComponent', () => {
  let component: EnteringDevWorldComponent;
  let fixture: ComponentFixture<EnteringDevWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnteringDevWorldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnteringDevWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
