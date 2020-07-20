import { IsNumberString } from "@thought-booster/quark";

/**
 * 请求：获取实时配置。
 */
export class RequestGetRTConfig {}

/**
 * 响应：获取实时配置。
 */
export class ResponseGetRTConfig {
  config: string[];
}

/**
 * 请求：获取用户信息。
 */
export class RequestGetDemoInfo {
  @IsNumberString()
  id: string;
}

/**
 * 响应：获取用户信息。
 */
export class ResponseGetDemoInfo {
  id: string;
}
