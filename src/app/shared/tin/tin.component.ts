import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FlavourTin, Tin, TinData } from 'src/app/interfaces/tin';
import { TinService } from 'src/app/services/tin.service';

@Component({
  selector: 'app-tin',
  templateUrl: './tin.component.html',
  styleUrls: ['./tin.component.scss']
})
export class TinComponent implements OnInit{

  @Input() flavour!:FlavourTin;
  @Output() btnCart=new EventEmitter<FlavourTin>();

  flavourData!: TinData;

  ngOnInit(): void {
    this._getData();
  }

  constructor(private router:Router, private tin:TinService){}

  private _getData(){
    const resultTin:Tin|undefined=this.tin.getData(this.flavour);
    if (resultTin) {
      this.flavourData=resultTin.info
    }
  }

  addToCart(){
    // this.router.navigate(['carrello']);
    this.btnCart.emit(this.flavour);
  }

  getIngredients(){
    return this.flavourData.ingredients.join();
  }

}
