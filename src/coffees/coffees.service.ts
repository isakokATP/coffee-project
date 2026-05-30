import { Injectable, NotFoundException } from '@nestjs/common';

export interface Coffee {
  id: number;
  name: string;
  roast: string;
}

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    { id: 1, name: 'Ethiopia Yirgacheffe', roast: 'Light' },
    {id: 2, name: 'sonething', roast: 'medium'},
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find(item => item.id === +id);
    
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    const newId = this.coffees.length > 0 ? this.coffees[this.coffees.length - 1].id + 1 : 1;
    const newCoffee = { id: newId, ...createCoffeeDto };
    
    this.coffees.push(newCoffee);
    return newCoffee;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    
    if (existingCoffee) {
      Object.assign(existingCoffee, updateCoffeeDto);
    }
    return existingCoffee;
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}