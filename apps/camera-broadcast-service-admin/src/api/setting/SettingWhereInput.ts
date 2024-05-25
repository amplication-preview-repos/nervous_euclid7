import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SettingWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  value?: JsonFilter;
};
