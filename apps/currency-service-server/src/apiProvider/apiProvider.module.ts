import { Module } from "@nestjs/common";
import { ApiProviderModuleBase } from "./base/apiProvider.module.base";
import { ApiProviderService } from "./apiProvider.service";
import { ApiProviderController } from "./apiProvider.controller";
import { ApiProviderResolver } from "./apiProvider.resolver";

@Module({
  imports: [ApiProviderModuleBase],
  controllers: [ApiProviderController],
  providers: [ApiProviderService, ApiProviderResolver],
  exports: [ApiProviderService],
})
export class ApiProviderModule {}
