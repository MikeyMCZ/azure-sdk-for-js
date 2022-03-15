/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  CustomDomainResource,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update custom domain of one lifecycle application.
 *
 * @summary Create or update custom domain of one lifecycle application.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-03-01-preview/examples/CustomDomains_CreateOrUpdate.json
 */
async function customDomainsCreateOrUpdate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const domainName = "mydomain.com";
  const domainResource: CustomDomainResource = {
    properties: {
      certName: "mycert",
      thumbprint: "934367bf1c97033f877db0f15cb1b586957d3133"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.customDomains.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    domainName,
    domainResource
  );
  console.log(result);
}

customDomainsCreateOrUpdate().catch(console.error);
