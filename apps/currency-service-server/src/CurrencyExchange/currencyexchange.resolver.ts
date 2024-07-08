import * as graphql from "@nestjs/graphql";
import { CurrencyExchangeService } from "./currencyexchange.service";

export class CurrencyExchangeResolver {
  constructor(protected readonly service: CurrencyExchangeService) {}

  @graphql.Mutation(() => String)
  async FetchExchangeRates(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchExchangeRates(args);
  }

  @graphql.Query(() => String)
  async GetCachedRates(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetCachedRates(args);
  }
}
