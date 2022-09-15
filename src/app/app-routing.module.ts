import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaDetailsComponent } from './components/pizza-details/pizza-details.component';
import { AddPizzaComponent } from './components/add-pizza/add-pizza.component'
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'pizze', component: PizzaListComponent },
  { path: 'pizze/:id', component: PizzaDetailsComponent },
  { path: 'add', component: AddPizzaComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
