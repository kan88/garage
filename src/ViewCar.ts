import { ControllerCar } from "./ControllerCar";
import { TYPE_CAR } from "./Types";

export class ViewCar {
  controller: typeof ControllerCar;
  #garage: HTMLElement = document.querySelector(".car__list");
  #cart: HTMLElement = document.querySelector(".money__total");
  bet: HTMLElement = document.querySelector(".money__input");
  update: HTMLElement = document.querySelector(".admin__submit");
  cars: HTMLElement = document.querySelector(".admin__input");

  super(controller: typeof ControllerCar) {
    this.controller = controller;
  }

  renderCars(cars: TYPE_CAR[], controller: ControllerCar) {
    cars.map((car) => {
      const item = document.createElement("li");
      item.classList.add("car__item");
      item.textContent = car.name;
      item.style.backgroundColor = `${car.color}`;
      item.dataset.speed = car.speed.toString();
      item.dataset.fuel = car.fuel.toString();
      const id = car.id;
      item.addEventListener("click", () => {
        controller.model.setWinnerId(id);
        console.log(controller.model.getWinnerId() == id);
      });
      this.#garage.appendChild(item);
    });
  }
  clearCars() {
    this.#garage.textContent = "";
  }
}
