import { Module } from "@nestjs/common";
import { CurrencyExchangeService } from "./currencyexchange.service";
import { CurrencyExchangeController } from "./currencyexchange.controller";
import { CurrencyExchangeResolver } from "./currencyexchange.resolver";

@Module({
  controllers: [CurrencyExchangeController],
  providers: [CurrencyExchangeService, CurrencyExchangeResolver],
  exports: [CurrencyExchangeService],
})
export class CurrencyExchangeModule {}
