export type ExchangeRateUpdateInput = {
  rate?: number | null;
  lastUpdated?: Date | null;
  targetCurrency?: string | null;
  sourceCurrency?: string | null;
};
