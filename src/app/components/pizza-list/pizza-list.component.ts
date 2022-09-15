import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizze?: Pizza[];
  currentPizza: Pizza = {};
  currentIndex = -1;

  constructor(private pizzaService: PizzaService) { }
  ngOnInit(): void {
    this.retrievePizze();
  }
  
  retrievePizze(): void {
    this.pizzaService.getAllPizze()
      .subscribe({
        next: (data: any) => {
          this.pizze = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrievePizze();
    this.currentPizza = {};
    this.currentIndex = -1;
  }
  setActivePizza(pizza: Pizza, index: number): void {
    this.currentPizza = pizza;
    this.currentIndex = index;
  }
}
