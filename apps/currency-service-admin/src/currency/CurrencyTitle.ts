import { Currency as TCurrency } from "../api/currency/Currency";

export const CURRENCY_TITLE_FIELD = "name";

export const CurrencyTitle = (record: TCurrency): string => {
  return record.name?.toString() || String(record.id);
};
