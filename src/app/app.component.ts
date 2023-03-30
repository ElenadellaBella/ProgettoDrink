import { Component, OnInit } from '@angular/core';
import { Cart } from './interfaces/cart';
import { CartService } from './services/cart.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'drink-app';

  constructor(private storageService:StorageService, private cartService:CartService){ }

  //All'avvio dell'app, vengono recuperati i dati del carrello precedentemente salvati e li imposta come elementi del carrello all'interno dell'app.
  ngOnInit(): void {
    //il metodo "getData" del servizio "StorageService" fornisce i dati del carrello precedentemente salvati nel localStorage.
    //I dati vengono quindi salvati in una variabile "products" come un array di oggetti Cart.
    const products:Cart[]= this.storageService.getData();

    //il metodo "setAllItems" del servizio "CartService" viene richiamato per impostare tutti gli oggetti Cart nella variabile "products" come elementi del carrello.
    //Questo significa che gli oggetti Cart precedentemente salvati verranno ripristinati e visualizzati come elementi del carrello all'interno dell'applicazione.
    this.cartService.setAllItems(products);
  }
}
