import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReturnBlockComponent } from './service-return-block.component';

describe('ServiceReturnBlockComponent', () => {
  let component: ServiceReturnBlockComponent;
  let fixture: ComponentFixture<ServiceReturnBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceReturnBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceReturnBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
