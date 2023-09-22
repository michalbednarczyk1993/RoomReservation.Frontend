import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullpageAdminComponent } from './fullpage-admin.component';

describe('FullpageAdminComponent', () => {
  let component: FullpageAdminComponent;
  let fixture: ComponentFixture<FullpageAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullpageAdminComponent]
    });
    fixture = TestBed.createComponent(FullpageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
