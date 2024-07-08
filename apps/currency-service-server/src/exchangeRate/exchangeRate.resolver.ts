import * as graphql from "@nestjs/graphql";
import { ExchangeRateResolverBase } from "./base/exchangeRate.resolver.base";
import { ExchangeRate } from "./base/ExchangeRate";
import { ExchangeRateService } from "./exchangeRate.service";

@graphql.Resolver(() => ExchangeRate)
export class ExchangeRateResolver extends ExchangeRateResolverBase {
  constructor(protected readonly service: ExchangeRateService) {
    super(service);
  }
}
