import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Impasto } from 'src/app/models/impasto.model';
import { Ingrediente } from 'src/app/models/ingrediente.model';
import { Pizza } from 'src/app/models/pizza.model';
import { ImpastoService } from 'src/app/services/impasto.service';
import { IngredienteService } from 'src/app/services/ingrediente.service';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentPizza: Pizza = {
    nome: '',
    impasto: NaN,
    ingredienti: [],
  };

  message = '';

  impasti?: Impasto[];

  ingredienti?: Ingrediente[];

  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute,
    private router: Router,
    private impastoService: ImpastoService,
    private ingredienteService: IngredienteService
    ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPizza(this.route.snapshot.params["id"]);
      this.retrieveImpasti();
      this.retrieveIngredienti();
    }
  }
  getPizza(id: string): void {
    this.pizzaService.getPizza(id)
      .subscribe({
        next: (data: any) => {
          this.currentPizza = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }
  updatePizza(): void {
    this.message = '';
    this.pizzaService.updatePizza(this.currentPizza.id, this.currentPizza)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Modifiche effettuate!';
        },
        error: (e) => console.error(e)
      });
  }
  deletePizza(): void {
    this.pizzaService.deletePizza(this.currentPizza.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/pizze']);
        },
        error: (e) => console.error(e)
      });
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
