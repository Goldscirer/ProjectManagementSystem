import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetctsItemComponent } from './projetcts-item.component';

describe('ProjetctsItemComponent', () => {
  let component: ProjetctsItemComponent;
  let fixture: ComponentFixture<ProjetctsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetctsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetctsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
