import {Component,  Input, OnInit} from '@angular/core';
import {Project} from '../../project.model';

@Component({
  selector: 'app-projetcts-item',
  templateUrl: './projetcts-item.component.html',
  styleUrls: ['./projetcts-item.component.css']
})
export class ProjetctsItemComponent implements OnInit {
  @Input()  project: Project;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
