import { Broadcast as TBroadcast } from "../api/broadcast/Broadcast";

export const BROADCAST_TITLE_FIELD = "title";

export const BroadcastTitle = (record: TBroadcast): string => {
  return record.title?.toString() || String(record.id);
};
