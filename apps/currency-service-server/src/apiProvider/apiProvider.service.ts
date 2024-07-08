import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApiProviderServiceBase } from "./base/apiProvider.service.base";

@Injectable()
export class ApiProviderService extends ApiProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
