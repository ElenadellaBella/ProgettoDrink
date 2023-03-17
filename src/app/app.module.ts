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
import { DettaglioProdottoComponent } from './components/dettaglio-prodotto/dettaglio-prodotto.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollSnapComponent } from './components/scroll-snap/scroll-snap.component';

import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DatiPagamentoComponent } from './components/dati-pagamento/dati-pagamento.component';
import { AnteprimaCarrelloComponent } from './components/anteprima-carrello/anteprima-carrello.component';
import { HttpClientModule} from '@angular/common/http';
import { TinComponent } from './shared/tin/tin.component';
import { ItemCartComponent } from './components/item-cart/item-cart.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { InvoiceDialogComponent } from './components/invoice-dialog/invoice-dialog.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';









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
    DettaglioProdottoComponent,
    ScrollSnapComponent,
    DatiPagamentoComponent,
    AnteprimaCarrelloComponent,
    TinComponent,
    ItemCartComponent,
    InvoiceDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
