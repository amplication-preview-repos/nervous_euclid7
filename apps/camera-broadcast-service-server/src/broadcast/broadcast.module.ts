import { Module } from "@nestjs/common";
import { BroadcastModuleBase } from "./base/broadcast.module.base";
import { BroadcastService } from "./broadcast.service";
import { BroadcastController } from "./broadcast.controller";
import { BroadcastResolver } from "./broadcast.resolver";

@Module({
  imports: [BroadcastModuleBase],
  controllers: [BroadcastController],
  providers: [BroadcastService, BroadcastResolver],
  exports: [BroadcastService],
})
export class BroadcastModule {}
