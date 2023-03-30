import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonConfiguration } from 'src/app/interfaces/button';
import { Cart } from 'src/app/interfaces/cart';
import { Invoice } from 'src/app/interfaces/invoice';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss']
})
export class InvoiceDialogComponent implements OnInit{

  buttonConfig:ButtonConfiguration={
    label:"Indietro",
    colorText: '#383C3F',
    colorStroke: '#383C3F'
  }

  confirmPurchaseButtonConfig:ButtonConfiguration={
    label:"Conferma acquisto",
    colorText: '#383C3F',
    colorStroke: '#383C3F'
  }

  products: Cart[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: {form: Invoice, products:Cart[]}, public dialogRef: MatDialogRef<InvoiceDialogComponent>) { }

  totalPrice = 0; // ...

  ngOnInit(): void { //calcolo il totale usando operatore rxjs .reduce()
    this.totalPrice = this.data.products.reduce((acc,product)=> acc + product.price, 0);
  }
  //La funzione reduce() viene utilizzata per iterare attraverso ogni elemento dell'array data.products
  //e accumulare il prezzo di ogni prodotto in una variabile chiamata acc. Alla fine dell'iterazione,
  //il valore finale di acc è il prezzo totale di tutti i prodotti.

  //In pratica, reduce() somma il prezzo di ogni prodotto all'accumulatore acc,
  //partendo da un valore iniziale di 0, e restituisce il valore finale dell'accumulatore.
  //Il valore finale dell'accumulatore viene quindi assegnato alla proprietà totalPrice conterrà il prezzo totale di tutti i prodotti presenti nell'array.

  purchaseConfirmation():void{
    alert(`ACQUISTO CONFERMATO! | Grazie per averci scelto. `);
    this.dialogRef.close('close');
    this.data.products=[];
  }

}
