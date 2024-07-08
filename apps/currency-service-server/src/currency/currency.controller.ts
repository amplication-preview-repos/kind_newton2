import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CurrencyService } from "./currency.service";
import { CurrencyControllerBase } from "./base/currency.controller.base";

@swagger.ApiTags("currencies")
@common.Controller("currencies")
export class CurrencyController extends CurrencyControllerBase {
  constructor(protected readonly service: CurrencyService) {
    super(service);
  }
}
