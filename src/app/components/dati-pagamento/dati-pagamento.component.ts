import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dati-pagamento',
  templateUrl: './dati-pagamento.component.html',
  styleUrls: ['./dati-pagamento.component.scss']
})
export class DatiPagamentoComponent {

  constructor(private router:Router){}
  vaiAProdotti(){
    this.router.navigate(['prodotti']);
  }

  tornaACarrello(){
    this.router.navigate(['carrello']);
  }

}
