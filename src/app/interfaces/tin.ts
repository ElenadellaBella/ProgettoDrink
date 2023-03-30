export interface Tin {
  KeyFlavour:FlavourTin;
  info: TinData;
}

export interface TinData{
  title:string;
  ingredients:string[];
  price:number;
  image:string;
}

export enum FlavourTin{
  Peach,
  DragonFruit,
  Lemon,
  Pineapple,
  Watermelon
}
