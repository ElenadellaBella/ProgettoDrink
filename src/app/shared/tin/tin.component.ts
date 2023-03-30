import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonConfiguration } from 'src/app/interfaces/button';
import { FlavourTin, Tin } from 'src/app/interfaces/tin';
import { TinService } from 'src/app/services/tin.service';

@Component({
  selector: 'app-tin',
  templateUrl: './tin.component.html',
  styleUrls: ['./tin.component.scss']
})
export class TinComponent implements OnInit{

  @Input() flavour!:FlavourTin;
  @Output() btnCart=new EventEmitter<Tin>();

  buttonConfig:ButtonConfiguration={
    label: "Aggiungi",
    icon: "../../../assets/icons/Shopping-cart.svg",
    iconPosition: 'right'
  }


  tin!: Tin;

  ngOnInit(): void {
    this._getData();
  }

  constructor(private router:Router, private tinService:TinService){}

  private _getData(){ //metodo privato perchè lo uso solo in questa classe
    const resultTin:Tin|undefined=this.tinService.getData(this.flavour); //costante che conterrà grazie al metodo, tutte le lattine
    if (resultTin) { //se esiste
      this.tin=resultTin //mettimi il gusto lattina nella costante
    }
  }

  //il metodo "addToCart()" emette un evento "btnCart" quando l'utente fa clic sul pulsante "Aggiungi al carrello"
  //e passa il valore corrente di "tin" come parametro.
  //Questo evento verrà poi ascoltato da un componente o servizio che si sottoscrive all'evento "btnCart", che aggiungerà l'elemento al carrello.
  addToCart(){
    this.btnCart.emit(this.tin);
  }

  getIngredients():string{
    return this.tin.info.ingredients.join();
  }

}
