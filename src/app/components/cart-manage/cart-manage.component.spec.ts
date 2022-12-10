import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartManageComponent } from './cart-manage.component';

describe('CartManageComponent', () => {
  let component: CartManageComponent;
  let fixture: ComponentFixture<CartManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
