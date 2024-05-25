import * as graphql from "@nestjs/graphql";
import { BroadcastResolverBase } from "./base/broadcast.resolver.base";
import { Broadcast } from "./base/Broadcast";
import { BroadcastService } from "./broadcast.service";

@graphql.Resolver(() => Broadcast)
export class BroadcastResolver extends BroadcastResolverBase {
  constructor(protected readonly service: BroadcastService) {
    super(service);
  }
}
