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
    label:"Chiudi",
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

  totalPrice = 0;

  ngOnInit(): void { //calcolo il totale usando operatore rxjs .reduce()
    this.totalPrice = this.data.products.reduce((acc,product)=> acc + product.price, 0);
  }

  purchaseConfirmation():void{
    alert(`ACQUISTO CONFERMATO! | Grazie per averci scelto. `);
    this.dialogRef.close('close');
  }

}
