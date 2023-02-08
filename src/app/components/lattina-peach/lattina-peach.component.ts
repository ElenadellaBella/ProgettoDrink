import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lattina-peach',
  templateUrl: './lattina-peach.component.html',
  styleUrls: ['./lattina-peach.component.scss']
})
export class LattinaPeachComponent {


  constructor(private router:Router, private httpClient:HttpClient){}



  aggiungiAlCarrello(){
    this.router.navigate(['carrello']);
  }

}
