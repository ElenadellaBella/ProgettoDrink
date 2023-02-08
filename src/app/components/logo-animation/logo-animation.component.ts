import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-animation',
  templateUrl: './logo-animation.component.html',
  styleUrls: ['./logo-animation.component.scss'],
  animations: [
    trigger('fadeAndScaleAnimation', [
      transition(':enter', [
        style({transform: 'scale(0)', opacity: 0}),
      animate('1000ms', style({transform: 'scale(1)', opacity: 1}))
    ]),
    transition(':leave', [
      style({transform: 'scale(1)', opacity: 1}),
      animate('1000ms', style({transform: 'scale(0)', opacity: 0}))
    ])
    ])
  ]
})
export class LogoAnimationComponent {

}


//FADE ANIMATION

// trigger('fade', [
//   transition('void => *', [
//     style({ opacity:0}),
//     animate(2500)
//   ])
// ])

