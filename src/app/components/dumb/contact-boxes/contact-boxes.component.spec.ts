import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBoxesComponent } from './contact-boxes.component';

describe('ContactBoxesComponent', () => {
  let component: ContactBoxesComponent;
  let fixture: ComponentFixture<ContactBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactBoxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
