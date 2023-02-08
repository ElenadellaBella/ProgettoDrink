import { Component } from '@angular/core';
import { drink } from 'src/app/variable_properties';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.scss']
})
export class ChiSiamoComponent {

  drink=drink;

}
