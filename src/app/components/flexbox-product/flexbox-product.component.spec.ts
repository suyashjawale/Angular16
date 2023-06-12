import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxProductComponent } from './flexbox-product.component';

describe('FlexboxProductComponent', () => {
  let component: FlexboxProductComponent;
  let fixture: ComponentFixture<FlexboxProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlexboxProductComponent]
    });
    fixture = TestBed.createComponent(FlexboxProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
