import { ModelCar } from "./ModelCar";

export type TYPE_CAR = {
  name?: string;
  fuel?: number;
  speed?: number;
  color?: string;
  id?: symbol;
};

export enum ENUM_CAR {
  Toyota = 0,
  Mazda = 1,
  BMW = 2,
  Geely = 3,
  Haval = 4,
}

export interface INTERFACE_CAR extends ModelCar {}
