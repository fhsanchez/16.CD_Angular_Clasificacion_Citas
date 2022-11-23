import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './module-author/edit/edit.component';
import { HomeComponent } from './module-author/home/home.component';
import { NewComponent } from './module-author/new/new.component';
import { PageNotFoundComponent } from './module-author/page-not-found/page-not-found.component';
import { ListQuoteRanksComponent } from './module-quote/list-quote-ranks/list-quote-ranks.component';
import { NewQuoteRanksComponent } from './module-quote/new-quote-ranks/new-quote-ranks.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'newautor', component: NewComponent },
  { path: 'editautor/:id', component: EditComponent },
  { path: 'viewquote/:id', component : ListQuoteRanksComponent },
  { path: 'newquote/:id', component: NewQuoteRanksComponent },

  //En este orden deben agregarse estas rutas
  // redirige adirectorio web Raiz si no hay nada en la URL
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // los ** atrapará todo lo que no coincidió con ninguno de las rutas anteriores
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
