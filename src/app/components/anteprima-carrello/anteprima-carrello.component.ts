import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-anteprima-carrello',
  templateUrl: './anteprima-carrello.component.html',
  styleUrls: ['./anteprima-carrello.component.scss']
})
export class AnteprimaCarrelloComponent implements OnInit {

  listItemsAdd:Cart[]=[];
  totalPrice:number=0;

  constructor(private router:Router,private cartService:CartService){
    this.cartService.itemObs$.subscribe((listItemAdded: Cart[]) =>
    {
      this.listItemsAdd=listItemAdded;
      this._setTotalPrice();
    });
  }
  ngOnInit(): void {
    this.listItemsAdd=this.cartService.getListItem();
    this._setTotalPrice();
  }
  vaiAProdotti(){
    this.router.navigate(['prodotti']);
  }

  vaiADatiPagamento(){
    this.router.navigate(['dati-pagamento']);
  }

  private _setTotalPrice(){
    this.totalPrice=0;
    this.listItemsAdd.forEach((element:Cart) => {
      this.totalPrice=this.totalPrice+element.price;
    });
  }

  getDeliveryDate():Date{
    const actualDate=new Date();
    return new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate()+3);
  }
}
