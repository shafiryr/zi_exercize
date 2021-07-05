import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberHierarchyComponent } from './member-hierarchy.component';

describe('MemberHierarchyComponent', () => {
  let component: MemberHierarchyComponent;
  let fixture: ComponentFixture<MemberHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberHierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
