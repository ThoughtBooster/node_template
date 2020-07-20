import { Controller, Multer, Route, RouteMethod } from "@thought-booster/quark";
import { ErrDemo } from "../error/demo";
import { mw1 } from "../middleware";
import { DemoService } from "../service/demo";
import { AppConfig, AppContext, AppServices } from "../typings";
import {
  RequestGetDemoInfo,
  ResponseGetDemoInfo,
  ResponseGetRTConfig,
} from "./demo.dto";

const upload = Multer({});

@Controller("/demo", [mw1])
export class DemoController {
  private demoService: DemoService;

  constructor(config: AppConfig, services: AppServices) {
    this.demoService = services.demo;
  }

  @Route("/config", RouteMethod.GET)
  public getRTConfig(ctx: AppContext) {
    const config = this.demoService.getRTConfig(ctx);
    ctx.sendOK<ResponseGetRTConfig>({ config });
  }

  @Route("/error", RouteMethod.GET, [])
  public async error(ctx: AppContext) {
    const req = await ctx.xml2js(ctx.request.rawBody);
    throw new ErrDemo();
  }

  @Route("/info", RouteMethod.GET, [upload.single()])
  public async getInfo(ctx: AppContext) {
    const req = await ctx.validate(RequestGetDemoInfo, ctx.request.rawBody);
    ctx.sendOK<ResponseGetDemoInfo>({ id: req.id });
  }
}
