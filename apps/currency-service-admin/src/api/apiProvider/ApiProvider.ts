export type ApiProvider = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  apiKey: string | null;
  name: string | null;
  endpoint: string | null;
};
