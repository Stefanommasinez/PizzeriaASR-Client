import { Component, OnInit } from '@angular/core';
import { Impasto } from 'src/app/models/impasto.model';
import { Ingrediente } from 'src/app/models/ingrediente.model';
import { Pizza } from 'src/app/models/pizza.model';
import { ImpastoService } from 'src/app/services/impasto.service';
import { IngredienteService } from 'src/app/services/ingrediente.service';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {
  pizza: Pizza = {
    nome: '',
    impasto: NaN,
    ingredienti: []
  };

  impasti?: Impasto[];

  ingredienti?: Ingrediente[];

  submitted = false;

  constructor(
    private pizzaService: PizzaService,
    private impastoService: ImpastoService,
    private ingredienteService: IngredienteService
    ) { }
    
  ngOnInit(): void {
    this.retrieveImpasti();
    this.retrieveIngredienti();
  }

  savePizza(): void {
    const data = {
      nome: this.pizza.nome,
      impasto: this.pizza.impasto,
      ingredienti: this.pizza.ingredienti
    };

    this.pizzaService.createPizza(data)
      .subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (e: any) => console.error(e)
      });
  }

  newPizza(): void {
    this.pizza = {
      nome: '',
      impasto: NaN,
      ingredienti: []
    };
  }

  retrieveImpasti(): void {
    this.impastoService.getAllImpasti()
      .subscribe({
        next: (data: any) => {
          this.impasti = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }

  retrieveIngredienti(): void {
    this.ingredienteService.getAllIngredienti()
      .subscribe({
        next: (data: any) => {
          this.ingredienti = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }
}
