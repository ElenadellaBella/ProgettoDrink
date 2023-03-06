import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
    // this.router.navigate(['carrello']);
    this.btnCart.emit(this.flavourTin);
  }

  getIngredients(){
    return this.flavourTin.info.ingredients.join();
  }

}
