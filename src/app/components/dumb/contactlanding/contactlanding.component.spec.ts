import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlandingComponent } from './contactlanding.component';

describe('ContactlandingComponent', () => {
  let component: ContactlandingComponent;
  let fixture: ComponentFixture<ContactlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactlandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
