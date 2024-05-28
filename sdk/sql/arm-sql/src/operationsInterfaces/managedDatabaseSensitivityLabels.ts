/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SensitivityLabel,
  ManagedDatabaseSensitivityLabelsListCurrentByDatabaseOptionalParams,
  ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseOptionalParams,
  SensitivityLabelSource,
  ManagedDatabaseSensitivityLabelsGetOptionalParams,
  ManagedDatabaseSensitivityLabelsGetResponse,
  ManagedDatabaseSensitivityLabelsCreateOrUpdateOptionalParams,
  ManagedDatabaseSensitivityLabelsCreateOrUpdateResponse,
  ManagedDatabaseSensitivityLabelsDeleteOptionalParams,
  ManagedDatabaseSensitivityLabelsDisableRecommendationOptionalParams,
  ManagedDatabaseSensitivityLabelsEnableRecommendationOptionalParams,
  SensitivityLabelUpdateList,
  ManagedDatabaseSensitivityLabelsUpdateOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedDatabaseSensitivityLabels. */
export interface ManagedDatabaseSensitivityLabels {
  /**
   * Gets the sensitivity labels of a given database
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listCurrentByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseSensitivityLabelsListCurrentByDatabaseOptionalParams,
  ): PagedAsyncIterableIterator<SensitivityLabel>;
  /**
   * Gets the sensitivity labels of a given database
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listRecommendedByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseOptionalParams,
  ): PagedAsyncIterableIterator<SensitivityLabel>;
  /**
   * Gets the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param sensitivityLabelSource The source of the sensitivity label.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    sensitivityLabelSource: SensitivityLabelSource,
    options?: ManagedDatabaseSensitivityLabelsGetOptionalParams,
  ): Promise<ManagedDatabaseSensitivityLabelsGetResponse>;
  /**
   * Creates or updates the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param parameters The column sensitivity label resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    parameters: SensitivityLabel,
    options?: ManagedDatabaseSensitivityLabelsCreateOrUpdateOptionalParams,
  ): Promise<ManagedDatabaseSensitivityLabelsCreateOrUpdateResponse>;
  /**
   * Deletes the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    options?: ManagedDatabaseSensitivityLabelsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Disables sensitivity recommendations on a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The options parameters.
   */
  disableRecommendation(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    options?: ManagedDatabaseSensitivityLabelsDisableRecommendationOptionalParams,
  ): Promise<void>;
  /**
   * Enables sensitivity recommendations on a given column (recommendations are enabled by default on all
   * columns)
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The options parameters.
   */
  enableRecommendation(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    options?: ManagedDatabaseSensitivityLabelsEnableRecommendationOptionalParams,
  ): Promise<void>;
  /**
   * Update sensitivity labels of a given database using an operations batch.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters A list of sensitivity label update operations.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    parameters: SensitivityLabelUpdateList,
    options?: ManagedDatabaseSensitivityLabelsUpdateOptionalParams,
  ): Promise<void>;
}
