import { Injectable } from '@angular/core';
import { FlavourTin, Tin } from '../interfaces/tin';

@Injectable({
  providedIn: 'root'
})
export class TinApiService {

  constructor() { }

  getFlavours(){
    return [
      {
      KeyFlavour: FlavourTin.Peach,
      info: {
        title:"Peach & Mango",
        ingredients: [
          "Acqua",
          "Saccarosio",
          "Pesca (20%)",
          "Mango (15%)",
          "Glucosio",
          "Anidride Carbonica",
          "Caffeina (0,03%)",
          "Vitamine (Niacina, Acido Pantotenico, B6, B12)"
        ],
        price: 3.5,
        image: "../../../assets/cans/canOrange.png"
      }
    },

    {
      KeyFlavour: FlavourTin.DragonFruit,
      info: {
        title:"Dragon Fruit",
        ingredients: [
          "Acqua",
          "Saccarosio",
          "Dragon Fruit (30%)",
          "Glucosio",
          "Anidride Carbonica",
          "Caffeina (0,03%)",
          "Vitamine (Niacina, Acido Pantotenico, B6, B12)"
        ],
        price: 4,
        image: "../../../assets/cans/canPink.png"
      }
    },

    {
      KeyFlavour: FlavourTin.Lemon,
      info: {
        title:"Lemon",
        ingredients: [
          "Acqua",
          "Saccarosio",
          "Lemon (30%)",
          "Glucosio",
          "Anidride Carbonica",
          "Caffeina (0,03%)",
          "Vitamine (Niacina, Acido Pantotenico, B6, B12)"
        ],
        price: 3.8,
        image: "../../../assets/cans/canGreen.png"
      }
    },

    {
      KeyFlavour: FlavourTin.Pineapple,
      info: {
        title:"Pineapple",
        ingredients: [
          "Acqua",
          "Saccarosio",
          "Pineapple (30%)",
          "Glucosio",
          "Anidride Carbonica",
          "Caffeina (0,03%)",
          "Vitamine (Niacina, Acido Pantotenico, B6, B12)"
        ],
        price: 4.3,
        image: "../../../assets/cans/canYellow.png"
      }
    },

    {
      KeyFlavour: FlavourTin.Watermelon,
      info: {
        title:"Watermelon",
        ingredients: [
          "Acqua",
          "Saccarosio",
          "Watermelon (30%)",
          "Glucosio",
          "Anidride Carbonica",
          "Caffeina (0,03%)",
          "Vitamine (Niacina, Acido Pantotenico, B6, B12)"
        ],
        price: 3.7,
        image: "../../../assets/cans/canRed.png"
      }
    },

    {
      KeyFlavour: FlavourTin.Explosion,
      info: {
        title:"Explosion",
        ingredients: [
          "Acqua",
          "Saccarosio",
          "Watermelon (30%)",
          "Glucosio",
          "Anidride Carbonica",
          "Caffeina (0,03%)",
          "Vitamine (Niacina, Acido Pantotenico, B6, B12)"
        ],
        price: 3.7,
        image: "../../../assets/cans/canRed.png"
      }
    }
  ]

  }
}
