import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyordersComponent } from './myorders.component';

describe('MyordersComponent', () => {
  let component: MyordersComponent;
  let fixture: ComponentFixture<MyordersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MyordersComponent]
    });
    fixture = TestBed.createComponent(MyordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
