import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { ProdottiComponent } from './components/prodotti/prodotti.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { BottoneComponent } from './components/bottone/bottone.component';
import { LogoAnimationComponent } from './components/logo-animation/logo-animation.component';
import { DettaglioProdottoComponent } from './components/dettaglio-prodotto/dettaglio-prodotto.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollSnapComponent } from './components/scroll-snap/scroll-snap.component';
import { CicloLattineComponent } from './components/ciclo-lattine/ciclo-lattine.component';

import { SwiperModule } from 'swiper/angular';
import { LattinaPeachComponent } from './components/lattina-peach/lattina-peach.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LattinaDragonComponent } from './components/lattina-dragon/lattina-dragon.component';
import { LattinaLemonComponent } from './components/lattina-lemon/lattina-lemon.component';
import { LattinaPineappleComponent } from './components/lattina-pineapple/lattina-pineapple.component';
import { LattinaWatermelonComponent } from './components/lattina-watermelon/lattina-watermelon.component';
import { DatiPagamentoComponent } from './components/dati-pagamento/dati-pagamento.component';
import { AnteprimaCarrelloComponent } from './components/anteprima-carrello/anteprima-carrello.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { HttpClientModule} from '@angular/common/http';
import { CartItemComponent } from './components/cart-item/cart-item.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ChiSiamoComponent,
    ProdottiComponent,
    CarrelloComponent,
    CarouselComponent,
    BottoneComponent,
    LogoAnimationComponent,
    DettaglioProdottoComponent,
    ScrollSnapComponent,
    CicloLattineComponent,
    LattinaPeachComponent,
    LattinaDragonComponent,
    LattinaLemonComponent,
    LattinaPineappleComponent,
    LattinaWatermelonComponent,
    DatiPagamentoComponent,
    AnteprimaCarrelloComponent,
    Footer2Component,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
