import { Component, OnInit } from '@angular/core';
import { Coffee } from './coffee.model';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {
  coffeList: Array<Coffee> = [];
  constructor(
    private service: CoffeeService
  ) { }

  ngOnInit(): void {
    this.getCoffes();
  }

  public getCoffes(): void {
    this.service.getCoffees().subscribe(coffees => {
      this.coffeList = coffees;
      console.log(coffees);
    }
    );
  }
}

