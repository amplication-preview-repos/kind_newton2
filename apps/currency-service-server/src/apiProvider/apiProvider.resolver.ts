import * as graphql from "@nestjs/graphql";
import { ApiProviderResolverBase } from "./base/apiProvider.resolver.base";
import { ApiProvider } from "./base/ApiProvider";
import { ApiProviderService } from "./apiProvider.service";

@graphql.Resolver(() => ApiProvider)
export class ApiProviderResolver extends ApiProviderResolverBase {
  constructor(protected readonly service: ApiProviderService) {
    super(service);
  }
}
