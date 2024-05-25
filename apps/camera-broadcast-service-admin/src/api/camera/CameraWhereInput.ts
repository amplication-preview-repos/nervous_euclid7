import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CameraWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Option1";
  url?: StringNullableFilter;
};
