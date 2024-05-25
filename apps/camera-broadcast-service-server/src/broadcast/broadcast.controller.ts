import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BroadcastService } from "./broadcast.service";
import { BroadcastControllerBase } from "./base/broadcast.controller.base";

@swagger.ApiTags("broadcasts")
@common.Controller("broadcasts")
export class BroadcastController extends BroadcastControllerBase {
  constructor(protected readonly service: BroadcastService) {
    super(service);
  }
}
