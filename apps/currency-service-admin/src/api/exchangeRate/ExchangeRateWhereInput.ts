import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ExchangeRateWhereInput = {
  id?: StringFilter;
  rate?: FloatNullableFilter;
  lastUpdated?: DateTimeNullableFilter;
  targetCurrency?: StringNullableFilter;
  sourceCurrency?: StringNullableFilter;
};
