import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { FlavourTin } from 'src/app/interfaces/tin';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss']
})
export class ItemCartComponent {

  item!:Cart;
  url:string="";

  constructor(private cartService:CartService) {}

  @Input() set itemCart(item: Cart) { //item dal padre
    this.item=item;
    this._setTinUrl(item.keyFlavour)

  };

  private _setTinUrl(keyFlavour:FlavourTin){
      switch (keyFlavour) {
        case FlavourTin.Peach:
          this.url="../../../assets/cans/canOrange.png";
          break;
        case FlavourTin.DragonFruit:
          this.url="../../../assets/cans/canPink.png";
          break;
        case FlavourTin.Lemon:
          this.url="../../../assets/cans/canGreen.png";
          break;
        case FlavourTin.Pineapple:
          this.url="../../../assets/cans/canYellow.png";
          break;
        case FlavourTin.Watermelon:
          this.url="../../../assets/cans/canRed.png";
          break;

        default: //lattina nuova tutta nera
          break;
      }
  }

  setItemToCart(item:Cart, add:boolean){

    const itemToAdd:Cart={
      keyFlavour:item.keyFlavour,
      title:item.title,
      quantity:1,
      price:item.price/item.quantity

    }
    this.cartService.setItemToCart(itemToAdd,add);
  }

  remove(item:Cart){
    this.cartService.removeItem(item.keyFlavour);
  }



}
