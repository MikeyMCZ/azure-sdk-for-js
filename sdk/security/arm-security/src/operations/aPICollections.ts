/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { APICollections } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ApiCollection,
  APICollectionsListBySubscriptionNextOptionalParams,
  APICollectionsListBySubscriptionOptionalParams,
  APICollectionsListBySubscriptionResponse,
  APICollectionsListByResourceGroupNextOptionalParams,
  APICollectionsListByResourceGroupOptionalParams,
  APICollectionsListByResourceGroupResponse,
  APICollectionsListByAzureApiManagementServiceNextOptionalParams,
  APICollectionsListByAzureApiManagementServiceOptionalParams,
  APICollectionsListByAzureApiManagementServiceResponse,
  APICollectionsGetByAzureApiManagementServiceOptionalParams,
  APICollectionsGetByAzureApiManagementServiceResponse,
  APICollectionsOnboardAzureApiManagementApiOptionalParams,
  APICollectionsOnboardAzureApiManagementApiResponse,
  APICollectionsOffboardAzureApiManagementApiOptionalParams,
  APICollectionsListBySubscriptionNextResponse,
  APICollectionsListByResourceGroupNextResponse,
  APICollectionsListByAzureApiManagementServiceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing APICollections operations. */
export class APICollectionsImpl implements APICollections {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class APICollections class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Gets a list of API collections within a subscription that have been onboarded to Microsoft Defender
   * for APIs.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: APICollectionsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<ApiCollection> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: APICollectionsListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ApiCollection[]> {
    let result: APICollectionsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: APICollectionsListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<ApiCollection> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of API collections within a resource group that have been onboarded to Microsoft
   * Defender for APIs.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: APICollectionsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ApiCollection> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: APICollectionsListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ApiCollection[]> {
    let result: APICollectionsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: APICollectionsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<ApiCollection> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of Azure API Management APIs that have been onboarded to Microsoft Defender for APIs. If
   * an Azure API Management API is onboarded to Microsoft Defender for APIs, the system will monitor the
   * operations within the Azure API Management API for intrusive behaviors and provide alerts for
   * attacks that have been detected.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listByAzureApiManagementService(
    resourceGroupName: string,
    serviceName: string,
    options?: APICollectionsListByAzureApiManagementServiceOptionalParams,
  ): PagedAsyncIterableIterator<ApiCollection> {
    const iter = this.listByAzureApiManagementServicePagingAll(
      resourceGroupName,
      serviceName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByAzureApiManagementServicePagingPage(
          resourceGroupName,
          serviceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByAzureApiManagementServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: APICollectionsListByAzureApiManagementServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ApiCollection[]> {
    let result: APICollectionsListByAzureApiManagementServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByAzureApiManagementService(
        resourceGroupName,
        serviceName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByAzureApiManagementServiceNext(
        resourceGroupName,
        serviceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByAzureApiManagementServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    options?: APICollectionsListByAzureApiManagementServiceOptionalParams,
  ): AsyncIterableIterator<ApiCollection> {
    for await (const page of this.listByAzureApiManagementServicePagingPage(
      resourceGroupName,
      serviceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of API collections within a subscription that have been onboarded to Microsoft Defender
   * for APIs.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: APICollectionsListBySubscriptionOptionalParams,
  ): Promise<APICollectionsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * Gets a list of API collections within a resource group that have been onboarded to Microsoft
   * Defender for APIs.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: APICollectionsListByResourceGroupOptionalParams,
  ): Promise<APICollectionsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Gets a list of Azure API Management APIs that have been onboarded to Microsoft Defender for APIs. If
   * an Azure API Management API is onboarded to Microsoft Defender for APIs, the system will monitor the
   * operations within the Azure API Management API for intrusive behaviors and provide alerts for
   * attacks that have been detected.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listByAzureApiManagementService(
    resourceGroupName: string,
    serviceName: string,
    options?: APICollectionsListByAzureApiManagementServiceOptionalParams,
  ): Promise<APICollectionsListByAzureApiManagementServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByAzureApiManagementServiceOperationSpec,
    );
  }

  /**
   * Gets an Azure API Management API if it has been onboarded to Microsoft Defender for APIs. If an
   * Azure API Management API is onboarded to Microsoft Defender for APIs, the system will monitor the
   * operations within the Azure API Management API for intrusive behaviors and provide alerts for
   * attacks that have been detected.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  getByAzureApiManagementService(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: APICollectionsGetByAzureApiManagementServiceOptionalParams,
  ): Promise<APICollectionsGetByAzureApiManagementServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, options },
      getByAzureApiManagementServiceOperationSpec,
    );
  }

  /**
   * Onboard an Azure API Management API to Microsoft Defender for APIs. The system will start monitoring
   * the operations within the Azure Management API for intrusive behaviors and provide alerts for
   * attacks that have been detected.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  async beginOnboardAzureApiManagementApi(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: APICollectionsOnboardAzureApiManagementApiOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<APICollectionsOnboardAzureApiManagementApiResponse>,
      APICollectionsOnboardAzureApiManagementApiResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<APICollectionsOnboardAzureApiManagementApiResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, serviceName, apiId, options },
      spec: onboardAzureApiManagementApiOperationSpec,
    });
    const poller = await createHttpPoller<
      APICollectionsOnboardAzureApiManagementApiResponse,
      OperationState<APICollectionsOnboardAzureApiManagementApiResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Onboard an Azure API Management API to Microsoft Defender for APIs. The system will start monitoring
   * the operations within the Azure Management API for intrusive behaviors and provide alerts for
   * attacks that have been detected.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  async beginOnboardAzureApiManagementApiAndWait(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: APICollectionsOnboardAzureApiManagementApiOptionalParams,
  ): Promise<APICollectionsOnboardAzureApiManagementApiResponse> {
    const poller = await this.beginOnboardAzureApiManagementApi(
      resourceGroupName,
      serviceName,
      apiId,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Offboard an Azure API Management API from Microsoft Defender for APIs. The system will stop
   * monitoring the operations within the Azure API Management API for intrusive behaviors.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  offboardAzureApiManagementApi(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: APICollectionsOffboardAzureApiManagementApiOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, options },
      offboardAzureApiManagementApiOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: APICollectionsListBySubscriptionNextOptionalParams,
  ): Promise<APICollectionsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: APICollectionsListByResourceGroupNextOptionalParams,
  ): Promise<APICollectionsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }

  /**
   * ListByAzureApiManagementServiceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListByAzureApiManagementService method.
   * @param options The options parameters.
   */
  private _listByAzureApiManagementServiceNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: APICollectionsListByAzureApiManagementServiceNextOptionalParams,
  ): Promise<APICollectionsListByAzureApiManagementServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listByAzureApiManagementServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/apiCollections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiCollectionList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion25],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/apiCollections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiCollectionList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion25],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByAzureApiManagementServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/providers/Microsoft.Security/apiCollections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiCollectionList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion25],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.serviceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getByAzureApiManagementServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/providers/Microsoft.Security/apiCollections/{apiId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion25],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.serviceName,
    Parameters.apiId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const onboardAzureApiManagementApiOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/providers/Microsoft.Security/apiCollections/{apiId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApiCollection,
    },
    201: {
      bodyMapper: Mappers.ApiCollection,
    },
    202: {
      bodyMapper: Mappers.ApiCollection,
    },
    204: {
      bodyMapper: Mappers.ApiCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion25],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.serviceName,
    Parameters.apiId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const offboardAzureApiManagementApiOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/providers/Microsoft.Security/apiCollections/{apiId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion25],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.serviceName,
    Parameters.apiId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiCollectionList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiCollectionList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByAzureApiManagementServiceNextOperationSpec: coreClient.OperationSpec =
  {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.ApiCollectionList,
      },
      default: {
        bodyMapper: Mappers.ErrorResponse,
      },
    },
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.nextLink,
      Parameters.resourceGroupName1,
      Parameters.serviceName,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
