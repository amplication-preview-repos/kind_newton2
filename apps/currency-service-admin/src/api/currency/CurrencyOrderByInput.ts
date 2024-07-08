import { SortOrder } from "../../util/SortOrder";

export type CurrencyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  code?: SortOrder;
  name?: SortOrder;
};
