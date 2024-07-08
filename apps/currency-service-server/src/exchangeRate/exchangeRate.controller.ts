import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExchangeRateService } from "./exchangeRate.service";
import { ExchangeRateControllerBase } from "./base/exchangeRate.controller.base";

@swagger.ApiTags("exchangeRates")
@common.Controller("exchangeRates")
export class ExchangeRateController extends ExchangeRateControllerBase {
  constructor(protected readonly service: ExchangeRateService) {
    super(service);
  }
}
