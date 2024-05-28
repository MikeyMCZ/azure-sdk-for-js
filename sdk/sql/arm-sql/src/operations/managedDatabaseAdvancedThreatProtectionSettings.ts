/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ManagedDatabaseAdvancedThreatProtectionSettings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  ManagedDatabaseAdvancedThreatProtection,
  ManagedDatabaseAdvancedThreatProtectionSettingsListByDatabaseNextOptionalParams,
  ManagedDatabaseAdvancedThreatProtectionSettingsListByDatabaseOptionalParams,
  ManagedDatabaseAdvancedThreatProtectionSettingsListByDatabaseResponse,
  AdvancedThreatProtectionName,
  ManagedDatabaseAdvancedThreatProtectionSettingsGetOptionalParams,
  ManagedDatabaseAdvancedThreatProtectionSettingsGetResponse,
  ManagedDatabaseAdvancedThreatProtectionSettingsCreateOrUpdateOptionalParams,
  ManagedDatabaseAdvancedThreatProtectionSettingsCreateOrUpdateResponse,
  ManagedDatabaseAdvancedThreatProtectionSettingsListByDatabaseNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedDatabaseAdvancedThreatProtectionSettings operations. */
export class ManagedDatabaseAdvancedThreatProtectionSettingsImpl
  implements ManagedDatabaseAdvancedThreatProtectionSettings
{
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ManagedDatabaseAdvancedThreatProtectionSettings class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of managed database's Advanced Threat Protection states.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseAdvancedThreatProtectionSettingsListByDatabaseOptionalParams,
  ): PagedAsyncIterableIterator<ManagedDatabaseAdvancedThreatProtection> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      managedInstanceName,
      databaseName,
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
        return this.listByDatabasePagingPage(
          resourceGroupName,
          managedInstanceName,
          databaseName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseAdvancedThreatProtectionSettingsListByDatabaseOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ManagedDatabaseAdvancedThreatProtection[]> {
    let result: ManagedDatabaseAdvancedThreatProtectionSettingsListByDatabaseResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDatabase(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseAdvancedThreatProtectionSettingsListByDatabaseOptionalParams,
  ): AsyncIterableIterator<ManagedDatabaseAdvancedThreatProtection> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of managed database's Advanced Threat Protection states.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseAdvancedThreatProtectionSettingsListByDatabaseOptionalParams,
  ): Promise<ManagedDatabaseAdvancedThreatProtectionSettingsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, databaseName, options },
      listByDatabaseOperationSpec,
    );
  }

  /**
   * Gets a managed database's Advanced Threat Protection state.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    options?: ManagedDatabaseAdvancedThreatProtectionSettingsGetOptionalParams,
  ): Promise<ManagedDatabaseAdvancedThreatProtectionSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        advancedThreatProtectionName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a managed database's Advanced Threat Protection state.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param parameters The managed database Advanced Threat Protection state.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    parameters: ManagedDatabaseAdvancedThreatProtection,
    options?: ManagedDatabaseAdvancedThreatProtectionSettingsCreateOrUpdateOptionalParams,
  ): Promise<ManagedDatabaseAdvancedThreatProtectionSettingsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        advancedThreatProtectionName,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    nextLink: string,
    options?: ManagedDatabaseAdvancedThreatProtectionSettingsListByDatabaseNextOptionalParams,
  ): Promise<ManagedDatabaseAdvancedThreatProtectionSettingsListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        nextLink,
        options,
      },
      listByDatabaseNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/advancedThreatProtectionSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseAdvancedThreatProtectionListResult,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseAdvancedThreatProtection,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName,
    Parameters.advancedThreatProtectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseAdvancedThreatProtection,
    },
    201: {
      bodyMapper: Mappers.ManagedDatabaseAdvancedThreatProtection,
    },
    default: {},
  },
  requestBody: Parameters.parameters78,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName,
    Parameters.advancedThreatProtectionName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const listByDatabaseNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseAdvancedThreatProtectionListResult,
    },
    default: {},
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.managedInstanceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
