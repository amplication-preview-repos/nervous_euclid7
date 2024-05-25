import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BroadcastWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
