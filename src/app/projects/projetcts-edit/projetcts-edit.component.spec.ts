import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetctsEditComponent } from './projetcts-edit.component';

describe('ProjetctsEditComponent', () => {
  let component: ProjetctsEditComponent;
  let fixture: ComponentFixture<ProjetctsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetctsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetctsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
