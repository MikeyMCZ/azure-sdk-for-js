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
  CheckHostNameAvailabilityInput,
  CdnManagementClient
} from "@azure/arm-cdn";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS.
 *
 * @summary Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2021-06-01/examples/AFDProfiles_CheckHostNameAvailability.json
 */
async function afdProfilesCheckHostNameAvailability() {
  const subscriptionId = "subid";
  const resourceGroupName = "RG";
  const profileName = "profile1";
  const checkHostNameAvailabilityInput: CheckHostNameAvailabilityInput = {
    hostName: "www.someDomain.net"
  };
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.afdProfiles.checkHostNameAvailability(
    resourceGroupName,
    profileName,
    checkHostNameAvailabilityInput
  );
  console.log(result);
}

afdProfilesCheckHostNameAvailability().catch(console.error);
