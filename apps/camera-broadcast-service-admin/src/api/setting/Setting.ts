import { JsonValue } from "type-fest";

export type Setting = {
  createdAt: Date;
  id: string;
  key: string | null;
  updatedAt: Date;
  value: JsonValue;
};
