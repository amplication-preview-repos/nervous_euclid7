import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BroadcastServiceBase } from "./base/broadcast.service.base";

@Injectable()
export class BroadcastService extends BroadcastServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
