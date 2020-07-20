import {
  PickAndFlatten,
  QuarkConfig,
  QuarkContext,
  QuarkControllers,
  QuarkMiddleware,
} from "@thought-booster/quark";
import { DemoService } from "src/service/demo";

/**
 * 请求上下文。
 */
export type AppContext = QuarkContext<AppConfig, State, Context>;

/**
 * 应用服务。
 */
export type AppServices = {
  [k in keyof PickAndFlatten<Context, "services">]: any;
};

/**
 * 应用控制器。
 */
export type AppControllers = QuarkControllers<AppConfig>;

/**
 * 应用中间件。
 */
export type AppMiddleware = QuarkMiddleware<AppConfig, State, Context>;

// 以上代码不可修改！
//
// 以下代码均可修改！

/**
 * 应用配置。
 */
export type AppConfig = QuarkConfig & {
  demo: string[];
};

/**
 * 上下文状态信息。
 */
export type State = {};

/**
 * 上下文服务信息。
 */
export type Context = {
  /**
   * 应用服务列表。
   */
  services: {
    demo: DemoService;
  };
};
