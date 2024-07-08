import * as graphql from "@nestjs/graphql";
import { CurrencyResolverBase } from "./base/currency.resolver.base";
import { Currency } from "./base/Currency";
import { CurrencyService } from "./currency.service";

@graphql.Resolver(() => Currency)
export class CurrencyResolver extends CurrencyResolverBase {
  constructor(protected readonly service: CurrencyService) {
    super(service);
  }
}
