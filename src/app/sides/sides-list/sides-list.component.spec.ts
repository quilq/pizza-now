import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidesListComponent } from './sides-list.component';

describe('SidesListComponent', () => {
  let component: SidesListComponent;
  let fixture: ComponentFixture<SidesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
