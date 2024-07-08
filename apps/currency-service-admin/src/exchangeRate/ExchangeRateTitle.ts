import { ExchangeRate as TExchangeRate } from "../api/exchangeRate/ExchangeRate";

export const EXCHANGERATE_TITLE_FIELD = "targetCurrency";

export const ExchangeRateTitle = (record: TExchangeRate): string => {
  return record.targetCurrency?.toString() || String(record.id);
};
