import { Injectable } from '@angular/core';
import { TinApiService } from '../api/tin-api.service';
import { FlavourTin, Tin } from '../interfaces/tin';

@Injectable({
  providedIn: 'root'
})
export class TinService {

  constructor(private tinApi:TinApiService) {
    this._flavours=this.tinApi.getFlavours()
   }

  //inizializzo un array vuoto che conterrà tutte le mie lattine
  private _flavours:Tin[]=[]


  //Metodo che in base al gusto specificato nel param. cerca nell'array _flavours il gusto che ho immesso come param.
  getData(flavour:FlavourTin):Tin|undefined{ //Se c'è mi restituisce la Tin corrispondente, altrim undefined
    return this._flavours.find(x=>x.KeyFlavour===flavour)
  };

  //metodo che mi restituisce in un array, tutte le lattine
  getFlavours():Tin[]{
    return this._flavours;
  }

}
