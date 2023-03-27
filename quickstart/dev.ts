import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as storage from "@pulumi/azure-native/storage";

// Add storage account name
// var saAccountName =  "dev";

// Allow blob access

export const devStorageAcct = {
    accountName: "devtszkp",
    allowBlobPublicAccess: false,
}