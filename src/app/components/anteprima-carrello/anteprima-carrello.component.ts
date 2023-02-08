import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anteprima-carrello',
  templateUrl: './anteprima-carrello.component.html',
  styleUrls: ['./anteprima-carrello.component.scss']
})
export class AnteprimaCarrelloComponent {

  constructor(private router:Router){}
  vaiAProdotti(){
    this.router.navigate(['prodotti']);
  }

  vaiADatiPagamento(){
    this.router.navigate(['dati-pagamento']);

  }
}
