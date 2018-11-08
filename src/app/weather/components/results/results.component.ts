import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { Weather } from '../../../model/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent {

  @Input() searchResults: Weather[];

  constructor() { }
}


