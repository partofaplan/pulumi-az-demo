import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as storage from "@pulumi/azure-native/storage";

// Create an Azure Resource Group
export const resourceGroup = new resources.ResourceGroup("resourceGroup");

// Create an Azure resource (Storage Account)
export const storageAccount = new storage.StorageAccount("sa", {
    allowBlobPublicAccess: false,
    resourceGroupName: resourceGroup.name,
    sku: {
        name: storage.SkuName.Standard_LRS,
    },
    kind: storage.Kind.StorageV2,
});