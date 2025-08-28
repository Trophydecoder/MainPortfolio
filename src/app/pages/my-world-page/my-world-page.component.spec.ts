import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorldPageComponent } from './my-world-page.component';

describe('MyWorldPageComponent', () => {
  let component: MyWorldPageComponent;
  let fixture: ComponentFixture<MyWorldPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWorldPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWorldPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
