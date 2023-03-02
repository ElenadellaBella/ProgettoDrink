import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FlavourTin, Tin } from 'src/app/interfaces/tin';
import { TinService } from 'src/app/services/tin.service';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {

  constructor (private tin:TinService){}

  ngOnInit(): void {
    this.flavours=this.tin.getFlavours() //flavours è array di gusti
  }



  flavoursEnum=FlavourTin;
  flavours:Tin[]= [];

  addToCart(flavour:FlavourTin){
    console.log(flavour);
  }
}
