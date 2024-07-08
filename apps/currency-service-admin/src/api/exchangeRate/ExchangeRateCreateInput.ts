export type ExchangeRateCreateInput = {
  rate?: number | null;
  lastUpdated?: Date | null;
  targetCurrency?: string | null;
  sourceCurrency?: string | null;
};
