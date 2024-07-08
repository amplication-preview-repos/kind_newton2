import { ApiProviderWhereInput } from "./ApiProviderWhereInput";
import { ApiProviderOrderByInput } from "./ApiProviderOrderByInput";

export type ApiProviderFindManyArgs = {
  where?: ApiProviderWhereInput;
  orderBy?: Array<ApiProviderOrderByInput>;
  skip?: number;
  take?: number;
};
