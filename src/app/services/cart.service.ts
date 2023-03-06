import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../interfaces/cart';
import { FlavourTin } from '../interfaces/tin';

interface AddToCart {
  item: Cart,
  add: boolean
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _listItemAdded:Cart[]=[]

  constructor() {
    this.cartObs$.subscribe((tin: AddToCart) =>
    {
      const tinFinded:Cart|undefined= this._listItemAdded.find(item=> item.keyFlavour === tin.item.keyFlavour);
      if (tinFinded) { //se trovo la tin
        if(tin.add){ //aggiungila
          tinFinded.quantity=tinFinded.quantity+tin.item.quantity;
          tinFinded.price=tinFinded.price+tin.item.price;
        } else{
          if (tinFinded.quantity === 1) { //se è 1, rimuovo intero item dalla lista
            const indexItem=this._listItemAdded.findIndex(item=>item.keyFlavour===tin.item.keyFlavour);
            this._listItemAdded.splice(indexItem,1)
          }else{
            tinFinded.quantity=tinFinded.quantity-tin.item.quantity;//altrim. decrementa solo
            tinFinded.price=tinFinded.price-tin.item.price;
          }
        }
      }else{ //aggiungi perchè non trovata
        this._listItemAdded.push(tin.item);
      }
      this._subject2.next(this._listItemAdded);

    })
   }

  private _subject=new Subject<AddToCart>(); //creazione di un oggetto di scrittura
  cartObs$=this._subject.asObservable(); //oggetto in lettura (observable cartObs contiene un oggetto che viene letto come observable?)

  private _subject2=new Subject<Cart[]>();
  itemObs$=this._subject2.asObservable();

  setItemToCart(item:Cart, add=true){ //aggiunge o rimuove l'item all'array del carrello
    const tinToAdd: AddToCart = {
      item: item,
      add: add
    }

    this._subject.next(tinToAdd);
  }

  getListItem(){
    return this._listItemAdded;
  }

  removeItem(keyFlavour:FlavourTin){
    const indexItem=this._listItemAdded.findIndex(item=>item.keyFlavour===keyFlavour);
    this._listItemAdded.splice(indexItem,1);
    this._subject2.next(this._listItemAdded); //aggiorna tutto

  }
}
