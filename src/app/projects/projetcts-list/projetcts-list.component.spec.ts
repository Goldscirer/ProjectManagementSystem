import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetctsListComponent } from './projetcts-list.component';

describe('ProjetctsListComponent', () => {
  let component: ProjetctsListComponent;
  let fixture: ComponentFixture<ProjetctsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetctsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetctsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
