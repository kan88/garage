import { TYPE_CAR } from "./Types";
import { ViewCar } from "./ViewCar";

export class ModelCar {
  #garage: TYPE_CAR[] = [];
  #money: number = 1000;
  #bet: number;
  #winner_id: symbol;

  setCars(cars: TYPE_CAR[]) {
    this.#garage = cars;
  }

  getCars() {
    return this.#garage;
  }

  get getBet() {
    console.log(this.#bet);
    return this.#bet;
  }
  setWinnerId(id: symbol) {
    this.#winner_id = id;
  }

  getWinnerId() {
    return this.#winner_id;
  }

  setBet(bet: number) {
    this.#bet = bet;
    console.log(this.#bet);
  }

  resetGarage() {
    this.#garage = [];
  }
}
