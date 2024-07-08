import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CurrencyExchangeService } from "./currencyexchange.service";

@swagger.ApiTags("currencyExchanges")
@common.Controller("currencyExchanges")
export class CurrencyExchangeController {
  constructor(protected readonly service: CurrencyExchangeService) {}

  @common.Get("/fetch-exchange-rates")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchExchangeRates(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchExchangeRates(body);
      }

  @common.Get("/get-cached-rates")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetCachedRates(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetCachedRates(body);
      }
}
