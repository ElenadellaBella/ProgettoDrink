import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { ProdottiComponent } from './components/prodotti/prodotti.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { BottoneComponent } from './components/bottone/bottone.component';
import { LogoAnimationComponent } from './components/logo-animation/logo-animation.component';
import { DettaglioProdottoComponent } from './components/dettaglio-prodotto/dettaglio-prodotto.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollSnapComponent } from './components/scroll-snap/scroll-snap.component';

import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DatiPagamentoComponent } from './components/dati-pagamento/dati-pagamento.component';
import { AnteprimaCarrelloComponent } from './components/anteprima-carrello/anteprima-carrello.component';
import { HttpClientModule} from '@angular/common/http';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { TinComponent } from './shared/tin/tin.component';
import { ItemCartComponent } from './components/item-cart/item-cart.component';

import { ReactiveFormsModule } from '@angular/forms';



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
    DatiPagamentoComponent,
    AnteprimaCarrelloComponent,
    CartItemComponent,
    TinComponent,
    ItemCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
