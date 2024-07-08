import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ApiProviderWhereInput = {
  id?: StringFilter;
  apiKey?: StringNullableFilter;
  name?: StringNullableFilter;
  endpoint?: StringNullableFilter;
};
