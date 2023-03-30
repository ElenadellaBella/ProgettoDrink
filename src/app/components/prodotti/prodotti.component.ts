import { Component, OnInit } from '@angular/core';
import { drink } from 'src/app/variable_properties';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss']
})
export class ProdottiComponent implements OnInit{
  drink=drink;

  constructor() {}

  ngOnInit(): void {

    let count = 0;
    const imageUrls = [
      'url(../../../assets/sfondiColorati/sfondo1.svg)', //[0]
      'url(../../../assets/sfondiColorati/sfondo2.svg)', //[1]
      'url(../../../assets/sfondiColorati/sfondo3.svg)', //[2]
      'url(../../../assets/sfondiColorati/sfondo4.svg)', //[3]
      'url(../../../assets/sfondiColorati/sfondo5.svg)'  //[4]
    ];

    const changeBg = () => {
      if (!!imageUrls[count]&&imageUrls.length>=0) { //se esiste l'elemento [count] dell'array imageUrls, & la lunghezza dell'array è > 0
        const section:any = document.querySelector(".bg-container"); //costante section = attribuisco la classe bg-container
        if (section) {
          const bg = imageUrls[count]; //costante bg = contiene l'immagine [i]
          section.style.backgroundImage = bg; //per legare la section al bg, attribuisco come stile alla section la variabile bg che contiene l'img[i];
          count++; //aumenta il contatore, passa all'immagine seguente
        }
      }else{ //in tutti gli altri casi:
        count=0; //azzero il contatore perchè l' [i] dell'immagine non trova un'immagine associata e azzerando il contatore, il ciclo riparte
      }
    }
    changeBg();
    setInterval(changeBg, 1500);
  }
}







