import { BroadcastWhereInput } from "./BroadcastWhereInput";
import { BroadcastOrderByInput } from "./BroadcastOrderByInput";

export type BroadcastFindManyArgs = {
  where?: BroadcastWhereInput;
  orderBy?: Array<BroadcastOrderByInput>;
  skip?: number;
  take?: number;
};
