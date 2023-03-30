import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonConfiguration } from 'src/app/interfaces/button';
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


  buttonConfig:ButtonConfiguration={
    label:"Prosegui acquisto",
    colorText: '#383C3F',
    colorStroke: '#383C3F'
  }

  //il codice ascolta gli aggiornamenti del carrello attraverso un observable del servizio CartService,
  //aggiorna la lista degli elementi del carrello e aggiorna il prezzo totale degli articoli ogni volta
  //che un nuovo elemento viene aggiunto al carrello.
    constructor(private router:Router,private cartService:CartService){
    this.cartService.itemObs$.subscribe((listItemAdded: Cart[]) => //Il callback passato a subscribe() viene eseguito ogni volta che viene aggiunto un nuovo elemento all'array listItemAdded del servizio CartService.
    {
      this.listItemsAdd=listItemAdded; //All'interno del callback, la variabile listItemsAdd della classe viene aggiornata con il valore dell'array listItemAdded del servizio CartService.
      this._setTotalPrice(); //Infine, viene chiamato il metodo _setTotalPrice() per aggiornare il prezzo totale degli articoli nel carrello.
    });
  }

  // ottengo la lista degli elementi del carrello dal servizio CartService e
  // aggiornare il prezzo totale degli articoli.
  ngOnInit(): void {
    this.listItemsAdd=this.cartService.getListItem(); //richiamato il metodo getListItem() del servizio CartService per ottenere la lista degli elementi del carrello
    this._setTotalPrice(); //calcolare e aggiornare il prezzo totale degli articoli nel carrello.
  }

  tornaAlloShopping(){
    this.router.navigate(['prodotti']);
  }

  vaiADatiPagamento(){
    this.router.navigate(['dati-pagamento']);
  }

  private _setTotalPrice(){ //calcolo e aggiorno il prezzo totale degli articoli nel carrello.
    this.totalPrice=0;
    this.listItemsAdd.forEach((element:Cart) => { //vado ad iterare per ogni elemento della lista degli elementi del carrello listItemsAdd utilizzando il metodo forEach().
      this.totalPrice=this.totalPrice+element.price; // totalPrice conterrà la somma totale dei prezzi di tutti gli elementi del carrello.
    });
  }

  getDeliveryDate():Date{
    const actualDate=new Date();
    return new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate()+3);
  }
}
