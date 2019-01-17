import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDefaultBlockComponent } from './service-default-block.component';

describe('ServiceDefaultBlockComponent', () => {
  let component: ServiceDefaultBlockComponent;
  let fixture: ComponentFixture<ServiceDefaultBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDefaultBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDefaultBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
