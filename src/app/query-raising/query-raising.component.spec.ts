import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryRaisingComponent } from './query-raising.component';

describe('QueryRaisingComponent', () => {
  let component: QueryRaisingComponent;
  let fixture: ComponentFixture<QueryRaisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryRaisingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryRaisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
