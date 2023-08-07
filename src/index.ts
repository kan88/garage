console.log("Hello World!");
import "./styles/styles.scss";
import { ModelCar } from "./ModelCar";
import { ViewCar } from "./ViewCar";
import { ControllerCar } from "./ControllerCar";

new ControllerCar(new ModelCar(), new ViewCar());
