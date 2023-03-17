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


  flavourTin!: Tin;

  ngOnInit(): void {
    this._getData();
  }

  constructor(private router:Router, private tin:TinService){}

  private _getData(){
    const resultTin:Tin|undefined=this.tin.getData(this.flavour); //costante che conterrà grazie al metodo, tutte le lattine
    if (resultTin) { //se ...?
      this.flavourTin=resultTin //mettimi il gusto lattina nella costante
    }
  }

  addToCart(){
    this.btnCart.emit(this.flavourTin);
  }

  getIngredients():string{
    return this.flavourTin.info.ingredients.join();
  }

}
