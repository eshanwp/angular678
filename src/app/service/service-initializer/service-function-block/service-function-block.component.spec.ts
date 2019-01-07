import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFunctionBlockComponent } from './service-function-block.component';

describe('ServiceFunctionBlockComponent', () => {
  let component: ServiceFunctionBlockComponent;
  let fixture: ComponentFixture<ServiceFunctionBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceFunctionBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFunctionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
