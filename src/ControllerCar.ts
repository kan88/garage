import { INTERFACE_CAR, TYPE_CAR } from "./Types";
import { ENUM_CAR } from "./Types";
import { ModelCar } from "./ModelCar";
import { ViewCar } from "./ViewCar";

export class ControllerCar {
  model: ModelCar;
  view: ViewCar;
  constructor(model: ModelCar, view: ViewCar) {
    this.view = view;
    this.model = model;
    this.init();
    this.betHandler();
    this.updateGarage();
  }
  init(number: number = 5) {
    console.log(number);
    let cars = [];
    for (let i = 0; i < number; i++) {
      const car: TYPE_CAR = {};
      car.name = ENUM_CAR[Math.floor(Math.random() * 5)];
      car.color = `#${Math.floor(Math.random() * (999999 - 100000) + 100000)}`;
      car.fuel = Math.floor(Math.random() * 400);
      car.speed = Math.floor(Math.random() * 10);
      car.id = Symbol();
      cars.push(car);
    }
    this.model.setCars(cars);
    this.view.renderCars(this.model.getCars(), this);
  }
  getCars() {
    this.model.getCars();
  }
  betHandler() {
    this.view.bet.addEventListener("change", (evt: Event) => {
      this.model.setBet(+(evt.target as HTMLInputElement).value);
    });
  }
  updateGarage() {
    this.view.update.addEventListener("click", () => {
      if ((this.view.cars as HTMLInputElement).value) {
        this.model.resetGarage();
        this.view.clearCars();
        this.init(+(this.view.cars as HTMLInputElement).value);
      } else {
        console.log("set number of cars");
      }
    });
  }
}
