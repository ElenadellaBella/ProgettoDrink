import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';//libreria Animate On Scroll
import {drink} from 'src/app/variable_properties';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: []
})

export class HomeComponent implements OnInit {

// drink_title = drink.title;
// drink_title2 = drink.title2;
// drink_title3 = drink.title3;
drink=drink;

  ngOnInit(): void {
   //avviare la libreria all'inizializzazione del componente
   Aos.init();
  }


}


