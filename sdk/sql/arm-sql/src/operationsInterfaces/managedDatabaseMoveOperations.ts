/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ManagedDatabaseMoveOperationResult,
  ManagedDatabaseMoveOperationsListByLocationOptionalParams,
  ManagedDatabaseMoveOperationsGetOptionalParams,
  ManagedDatabaseMoveOperationsGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedDatabaseMoveOperations. */
export interface ManagedDatabaseMoveOperations {
  /**
   * Lists managed database move operations.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName
   * @param options The options parameters.
   */
  listByLocation(
    resourceGroupName: string,
    locationName: string,
    options?: ManagedDatabaseMoveOperationsListByLocationOptionalParams,
  ): PagedAsyncIterableIterator<ManagedDatabaseMoveOperationResult>;
  /**
   * Gets a managed database move operation.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName
   * @param operationId
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    locationName: string,
    operationId: string,
    options?: ManagedDatabaseMoveOperationsGetOptionalParams,
  ): Promise<ManagedDatabaseMoveOperationsGetResponse>;
}
