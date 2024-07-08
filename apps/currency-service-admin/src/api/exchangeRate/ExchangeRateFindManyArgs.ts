import { ExchangeRateWhereInput } from "./ExchangeRateWhereInput";
import { ExchangeRateOrderByInput } from "./ExchangeRateOrderByInput";

export type ExchangeRateFindManyArgs = {
  where?: ExchangeRateWhereInput;
  orderBy?: Array<ExchangeRateOrderByInput>;
  skip?: number;
  take?: number;
};
