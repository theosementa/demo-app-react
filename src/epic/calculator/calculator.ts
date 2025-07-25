import { makeAutoObservable } from "mobx";

export class Calculator {  
  result: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  add(a: number, b: number) {
    this.result = a + b;
  }

  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}