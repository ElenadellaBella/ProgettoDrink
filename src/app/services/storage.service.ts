import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  //SERVIZIO UTILIZZATO PER MANTENERE I DATI DELL'APP PERSISTENTI:I DATI RESTANO ANCHE DOPO LA CHIUSURA DEL BROWSER O IL REFRESH DELL'APP
  //SALVA E RECUPERA LA LISTA DI ELEMENTI DEL CARRELLO (utilizzando una chiave specifica) NEL LOCALSTORAGE DEL BROWSER

  constructor() {}

  private _key:string='products'; //utilizzata come chiave per salvare e recuperare i dati del carrello acquisti dall'oggetto localStorage del browser.

  //Metodo "setData" lo userò per salvare i dati del carrello nel localStorage del browser. Prende un array di oggetti "Cart" come parametro
  setData(listItems:Cart[]){
    localStorage.setItem(this._key, JSON.stringify(listItems)); //a partire dall'array listItems, lo converto in una stringa JSON utilizzando il metodo JSON.stringify, per poi salvarlo con il metodo localStorage.setItem() con chiave _key come identificatore.
    //Quindi quando i dati vengono salvati, verranno memorizzati all'interno del localStorage con la chiave _key.
  }

  //Metodo "getData" lo userò per recuperare i dati del carrello dal localStorage
  getData():Cart[]{
    const store:string|null=localStorage.getItem(this._key); //e recupera i dati dal localStorage utilizzando la stessa chiave "_key" utilizzata dal metodo "setData".
    //Se i dati esistono --> vengono analizzati dalla stringa JSON e convertiti in un array di oggetti "Cart" grazie al metodo JSON.parse()
    return store ? JSON.parse(store):[]; //Se non ci sono dati salvati con la chiave _key, la funzione restituirà un array vuoto.
  }
}
