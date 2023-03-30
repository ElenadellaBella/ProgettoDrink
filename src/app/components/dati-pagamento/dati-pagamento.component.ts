import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

import {MatDialog} from '@angular/material/dialog';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';
import { ButtonConfiguration } from 'src/app/interfaces/button';



@Component({
  selector: 'app-dati-pagamento',
  templateUrl: './dati-pagamento.component.html',
  styleUrls: ['./dati-pagamento.component.scss']
})
export class DatiPagamentoComponent implements OnInit {



  buttonConfig:ButtonConfiguration={
    label: "Indietro",
    colorText: '#383C3F',
    colorStroke: '#383C3F'
  }

  acquistaButtonConfig:ButtonConfiguration={
    label:"Acquista",
    colorText: '#383C3F',
    colorStroke: '#383C3F'
  }


  myForm=new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('',Validators.required),
    indirizzo: new FormControl('',Validators.required),
    città: new FormControl(''),
    stato: new FormControl(''),
    cap: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    numCard: new FormControl('' ,Validators.required),
    annoScadenza: new FormControl('',Validators.required),
    cvv: new FormControl('',[Validators.required, Validators.maxLength(3)]),
  });


  ngOnInit(): void {  }

  constructor(private router:Router, private cartService:CartService, private dialog:MatDialog){
    if (this.cartService.getListItem().length<=0) {
      this.tornaIndietroAlCarrello();

    }
   }

  tornaAlloShopping(){
    this.router.navigate(['prodotti']);
  }

  tornaIndietroAlCarrello(){
    this.router.navigate(['carrello']);
  }

  acquista(){ // se l'utente ha aggiunto almeno un prodotto al carrello, consenti l'acquisto.
    if (this.cartService.getListItem().length>0) { //controllo se ci sono item nel carrello del servizio cartService chiamando il suo metodo getListItem()
     this.openDialog()
    }
  }

  openDialog() {
    this.dialog.open(InvoiceDialogComponent, {
      width:'30%',
      height:'60%',
      data: { form: this.myForm.value,
              products: this.cartService.getListItem()
      }
    });
  }

  keydown(event:KeyboardEvent){
    return event.keyCode === 8 || (event.keyCode >= 48 && event.keyCode <=57) || (event.keyCode >=96 && event.keyCode<=105);
  }
}
