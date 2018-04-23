import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-field-error-display',
  templateUrl: './field-error-display.component.html',
  styleUrls: ['./field-error-display.component.css']
})

/**
 *
 * @whatItDoes
 * @howToUse
 * {@example
 * @description
 * Form validation and display of error messages.
 * @stable
 */
export class FieldErrorDisplayComponent{
  @Input() errorMsg: string;
  @Input() displayError: boolean;
}
