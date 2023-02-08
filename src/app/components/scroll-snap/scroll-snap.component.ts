import { Component } from '@angular/core';
import { drink } from 'src/app/variable_properties';

@Component({
  selector: 'app-scroll-snap',
  templateUrl: './scroll-snap.component.html',
  styleUrls: ['./scroll-snap.component.scss']
})
export class ScrollSnapComponent {

  drink=drink;

}
