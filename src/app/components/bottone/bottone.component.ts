import { Component, Input } from '@angular/core';
import { ButtonConfiguration } from 'src/app/interfaces/button';

@Component({
  selector: 'app-bottone',
  templateUrl: './bottone.component.html',
  styleUrls: ['./bottone.component.scss']
})
export class BottoneComponent {

  @Input() buttonConfig!: ButtonConfiguration;

  @Input() disabled!:boolean;

}
