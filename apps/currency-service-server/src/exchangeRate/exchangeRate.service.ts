import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExchangeRateServiceBase } from "./base/exchangeRate.service.base";

@Injectable()
export class ExchangeRateService extends ExchangeRateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
