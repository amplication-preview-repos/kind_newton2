import { ApiProvider as TApiProvider } from "../api/apiProvider/ApiProvider";

export const APIPROVIDER_TITLE_FIELD = "name";

export const ApiProviderTitle = (record: TApiProvider): string => {
  return record.name?.toString() || String(record.id);
};
