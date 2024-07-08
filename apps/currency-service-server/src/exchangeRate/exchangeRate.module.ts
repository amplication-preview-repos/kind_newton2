import { Module } from "@nestjs/common";
import { ExchangeRateModuleBase } from "./base/exchangeRate.module.base";
import { ExchangeRateService } from "./exchangeRate.service";
import { ExchangeRateController } from "./exchangeRate.controller";
import { ExchangeRateResolver } from "./exchangeRate.resolver";

@Module({
  imports: [ExchangeRateModuleBase],
  controllers: [ExchangeRateController],
  providers: [ExchangeRateService, ExchangeRateResolver],
  exports: [ExchangeRateService],
})
export class ExchangeRateModule {}
