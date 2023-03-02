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

  private _flavours:Tin[]=[]




  getData(flavour:FlavourTin):Tin|undefined{
    return this._flavours.find(x=>x.KeyFlavour===flavour)
  };

  getFlavours():Tin[]{ //mi ritorna tutta la struttura dati di tutti i gusti
    return this._flavours;
  }

}
