import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApiProviderService } from "./apiProvider.service";
import { ApiProviderControllerBase } from "./base/apiProvider.controller.base";

@swagger.ApiTags("apiProviders")
@common.Controller("apiProviders")
export class ApiProviderController extends ApiProviderControllerBase {
  constructor(protected readonly service: ApiProviderService) {
    super(service);
  }
}
