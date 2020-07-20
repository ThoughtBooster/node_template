import { AppContext } from "../typings";

/**
 * 演示服务。
 */
export class DemoService {
  /**
   * 获取实时文件配置。
   */
  public getRTConfig(ctx: AppContext): string[] {
    return ctx.config.demo;
  }
}
