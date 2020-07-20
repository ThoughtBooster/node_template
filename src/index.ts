import { Quark } from "@thought-booster/quark";
import { DemoController } from "./controller/demo";
import { DemoService } from "./service/demo";
import {
  AppConfig,
  AppControllers,
  AppServices,
  Context,
  State,
} from "./typings";

const services: AppServices = {
  demo: DemoService,
};

const controllers: AppControllers = [DemoController];

const app = new Quark<AppConfig, State, Context>(services);

app.start(controllers);
