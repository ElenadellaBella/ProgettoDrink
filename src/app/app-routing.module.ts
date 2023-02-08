import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { DatiPagamentoComponent } from './components/dati-pagamento/dati-pagamento.component';
import { HomeComponent } from './components/home/home.component';
import { ProdottiComponent } from './components/prodotti/prodotti.component';

const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch:"full"},
  {path: "home", component:HomeComponent},
  {path: "chi-siamo", component:ChiSiamoComponent},
  {path: "prodotti", component:ProdottiComponent},
  {path: "carrello", component:CarrelloComponent},
  {path: "dati-pagamento", component:DatiPagamentoComponent},
  {path: "**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
