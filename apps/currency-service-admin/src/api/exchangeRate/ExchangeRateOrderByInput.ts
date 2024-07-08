import { SortOrder } from "../../util/SortOrder";

export type ExchangeRateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  rate?: SortOrder;
  lastUpdated?: SortOrder;
  targetCurrency?: SortOrder;
  sourceCurrency?: SortOrder;
};
