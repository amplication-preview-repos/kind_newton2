export type ExchangeRate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rate: number | null;
  lastUpdated: Date | null;
  targetCurrency: string | null;
  sourceCurrency: string | null;
};
