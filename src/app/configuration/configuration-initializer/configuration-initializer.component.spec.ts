import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationInitializerComponent } from './configuration-initializer.component';

describe('ConfigurationInitializerComponent', () => {
  let component: ConfigurationInitializerComponent;
  let fixture: ComponentFixture<ConfigurationInitializerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationInitializerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationInitializerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
