import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { FlavourTin, Tin } from 'src/app/interfaces/tin';
import { CartService } from 'src/app/services/cart.service';
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

  constructor (private tin:TinService, private cart:CartService){}

  ngOnInit(): void {
    this.flavours=this.tin.getFlavours() //flavours è array di gusti
  }



  flavoursEnum=FlavourTin;
  flavours:Tin[]= [];

  addToCart(tin:Tin){
    const tinToAdd:Cart={
      title:tin.info.title,
      keyFlavour:tin.KeyFlavour,
      price:tin.info.price,
      quantity:1
    }
    this.cart.setItemToCart(tinToAdd)
  }
}
