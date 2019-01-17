import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBranchBlockComponent } from './service-branch-block.component';

describe('ServiceBranchBlockComponent', () => {
  let component: ServiceBranchBlockComponent;
  let fixture: ComponentFixture<ServiceBranchBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBranchBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBranchBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
