import { SortOrder } from "../../util/SortOrder";

export type ApiProviderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  apiKey?: SortOrder;
  name?: SortOrder;
  endpoint?: SortOrder;
};
