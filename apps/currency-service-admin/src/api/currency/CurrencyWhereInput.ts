import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CurrencyWhereInput = {
  id?: StringFilter;
  code?: StringNullableFilter;
  name?: StringNullableFilter;
};
