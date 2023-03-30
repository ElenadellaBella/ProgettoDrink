import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../interfaces/cart';
import { FlavourTin } from '../interfaces/tin';
import { StorageService } from './storage.service';

//SERVIZIO CHE GESTISCE IL CARRELLO ACQUISTI DELL'UTENTE

interface AddToCart {
  item: Cart,
  add: boolean // indica se l'elemento deve essere aggiunto al carrello o meno.
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //inizializzo un array di prodotti come array vuoto
  private _listItemAdded:Cart[]=[]

  constructor(private storageService:StorageService) {
    this.cartObs$.subscribe((tin: AddToCart) =>
    {
      const tinFinded:Cart|undefined= this._listItemAdded.find(item=> item.keyFlavour === tin.item.keyFlavour); //Cerca l'elemento corrispondente nella lista di elementi del carrello (_listItemAdded) in base alla proprietà keyFlavour dell'elemento passato come parametro
      if (tinFinded) { //Se l'elemento (tin) viene trovato
        if(tin.add){
          tinFinded.quantity=tinFinded.quantity+tin.item.quantity; //aggiorno la quantità
          tinFinded.price=tinFinded.price+tin.item.price; //ed il prezzo dell'elemento in base alla proprietà add del parametro tin.
        } else{
          if (tinFinded.quantity === 1) { //se è 1, rimuovo intero item dalla lista
            const indexItem=this._listItemAdded.findIndex(item=>item.keyFlavour===tin.item.keyFlavour);
            this._listItemAdded.splice(indexItem,1)
          }else{
            tinFinded.quantity=tinFinded.quantity-tin.item.quantity;//altrim. decrementa solo
            tinFinded.price=tinFinded.price-tin.item.price;
          }
        }
      }else{ //se non trovo la lattina, aggiungila
        this._listItemAdded.push(tin.item);
      }
      this.storageService.setData(this._listItemAdded); //Salva lista elementi carrello utilizzando il servizio StorageService.
      this._subject2.next(this._listItemAdded); //Invia una notifica utilizzando l'oggetto _subject2 per informare altri componenti che la lista degli elementi del carrello è stata aggiornata.
    })
   }

  // creo un oggetto Subject (di scrittura) che viene utilizzato per inviare un evento quando un prodotto viene aggiunto al carrello.
  private _subject=new Subject<AddToCart>(); // Il tipo <AddToCart> specifica il tipo di evento che viene emesso dal Subject.
  cartObs$=this._subject.asObservable(); //crea un observable cartObs$ che si iscrive al  _subject utilizzando il metodo asObservable().
  //In questo modo, ogni volta che viene aggiunto un prodotto al carrello, il Subject emette un evento, che viene quindi trasmesso all'observable cartObs$.

  private _subject2=new Subject<Cart[]>();
  itemObs$=this._subject2.asObservable();

  setItemToCart(item:Cart, add=true){ //metodo prende due parametri: item (elemento da aggiungere al cart) e add: (valore booleano che indica se l'elemento deve essere aggiunto o rimosso dal carrello... il valore predefinito è true, che significa aggiungere l'elemento al carrello).
    const tinToAdd: AddToCart = { //al suo interno, viene creato un oggetto AddToCart con la proprietà item che contiene l'elemento da aggiungere al carrello e la proprietà add che indica se l'elemento deve essere aggiunto o rimosso dal carrello.
      item: item,
      add: add
    }

    this._subject.next(tinToAdd); //l'oggetto AddToCart viene passato come argomento al metodo next() del Subject _subject.
    //Ciò significa che ogni volta che viene chiamato setItemToCart, il Subject emetterà un evento contenente l'oggetto AddToCart,
    //che può essere catturato da altri componenti Angular che si sono sottoscritti all'observable cartObs$ del servizio.

  }

  setAllItems(items:Cart[]){ //metodo prende un parametro items che rappresenta un array di elementi da aggiungere al carrello.
    this._listItemAdded = items; //viene assegnato il valore dell'array items alla variabile _listItemAdded, che viene utilizzata per tenere traccia degli elementi aggiunti al carrello.
    this._subject2.next(items); // l'array items viene passato come argomento al metodo next() del _subject2.
    //Ciò significa che ogni volta che viene chiamato setAllItems, il Subject emetterà un evento contenente l'array items,
    //che può essere catturato da altri componenti Angular che si sono sottoscritti all'observable itemObs$ del servizio.
  }



  getListItem():Cart[]{
    return this._listItemAdded;
  }

  //QUESTA FUNZIONE removeItem():  Rimuove un elemento dall'array "_listItemAdded",
  //salva i dati dell'applicazione in locale
  //e notifica agli altri componenti dell'applicazione che l'array è stato modificato.

  removeItem(keyFlavour:FlavourTin){ //in base al gusto passato come param, viene rimossa una tin dall'array.
    // cerca l'indice dell'elemento nell'array e lo assegna alla costante "indexItem".
    const indexItem=this._listItemAdded.findIndex(item=>item.keyFlavour===keyFlavour);
    this._listItemAdded.splice(indexItem,1); //utilizza il metodo "splice()" per rimuovere l'elemento dall'array in base all'indice trovato.

    //Dopo aver rimosso elemento dall'array, con servizio "storageService" aggiorna i dati dell'app salvando l'array "_listItemAdded" in locale.
    this.storageService.setData(this._listItemAdded);
    this._subject2.next(this._listItemAdded); // un oggetto "Subject" chiamato "_subject2" notifica ai componenti dell'app che l'array è stato modificato e che deve essere aggiornato
  }
}
