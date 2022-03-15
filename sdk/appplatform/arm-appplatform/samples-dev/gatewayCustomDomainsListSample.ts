/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AppPlatformManagementClient } from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Handle requests to list all Spring Cloud Gateway custom domains.
 *
 * @summary Handle requests to list all Spring Cloud Gateway custom domains.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-03-01-preview/examples/GatewayCustomDomains_List.json
 */
async function gatewayCustomDomainsList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const gatewayName = "default";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.gatewayCustomDomains.list(
    resourceGroupName,
    serviceName,
    gatewayName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

gatewayCustomDomainsList().catch(console.error);
