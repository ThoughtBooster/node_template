import { AppMiddleware } from "src/typings";

export const mw1: AppMiddleware = async (ctx, next) => {
  ctx.info({ msg: "hello" });
  await next();
};
