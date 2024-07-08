/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ApiProvider } from "./ApiProvider";
import { ApiProviderCountArgs } from "./ApiProviderCountArgs";
import { ApiProviderFindManyArgs } from "./ApiProviderFindManyArgs";
import { ApiProviderFindUniqueArgs } from "./ApiProviderFindUniqueArgs";
import { CreateApiProviderArgs } from "./CreateApiProviderArgs";
import { UpdateApiProviderArgs } from "./UpdateApiProviderArgs";
import { DeleteApiProviderArgs } from "./DeleteApiProviderArgs";
import { ApiProviderService } from "../apiProvider.service";
@graphql.Resolver(() => ApiProvider)
export class ApiProviderResolverBase {
  constructor(protected readonly service: ApiProviderService) {}

  async _apiProvidersMeta(
    @graphql.Args() args: ApiProviderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ApiProvider])
  async apiProviders(
    @graphql.Args() args: ApiProviderFindManyArgs
  ): Promise<ApiProvider[]> {
    return this.service.apiProviders(args);
  }

  @graphql.Query(() => ApiProvider, { nullable: true })
  async apiProvider(
    @graphql.Args() args: ApiProviderFindUniqueArgs
  ): Promise<ApiProvider | null> {
    const result = await this.service.apiProvider(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ApiProvider)
  async createApiProvider(
    @graphql.Args() args: CreateApiProviderArgs
  ): Promise<ApiProvider> {
    return await this.service.createApiProvider({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ApiProvider)
  async updateApiProvider(
    @graphql.Args() args: UpdateApiProviderArgs
  ): Promise<ApiProvider | null> {
    try {
      return await this.service.updateApiProvider({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ApiProvider)
  async deleteApiProvider(
    @graphql.Args() args: DeleteApiProviderArgs
  ): Promise<ApiProvider | null> {
    try {
      return await this.service.deleteApiProvider(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
