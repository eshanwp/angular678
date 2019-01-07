import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAssignBlockComponent } from './service-assign-block.component';

describe('ServiceAssignBlockComponent', () => {
  let component: ServiceAssignBlockComponent;
  let fixture: ComponentFixture<ServiceAssignBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAssignBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAssignBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
