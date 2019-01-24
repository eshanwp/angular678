import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationCxResponseComponent } from './configuration-cx-response.component';

describe('ConfigurationCxResponseComponent', () => {
  let component: ConfigurationCxResponseComponent;
  let fixture: ComponentFixture<ConfigurationCxResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationCxResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationCxResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
