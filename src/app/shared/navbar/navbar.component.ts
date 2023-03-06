import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor (private router:Router, private cartService:CartService){
    this.cartService.itemObs$.subscribe((listItemAdded: Cart[]) =>
    {
      this.itemsAdd=listItemAdded.length;
    });
  }

  itemsAdd=0;

  ngOnInit(): void {
  }

  goToHome(){
    this.router.navigate(['home']);
  }
}
