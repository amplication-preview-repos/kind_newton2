import { Injectable } from "@nestjs/common";

@Injectable()
export class CurrencyExchangeService {
  constructor() {}
  async FetchExchangeRates(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetCachedRates(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
