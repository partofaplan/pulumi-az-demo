import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as storage from "@pulumi/azure-native/storage";

/**
 * Configuration for environment
 * 
 * @export
 * @interface Config
 */

export interface Config {
    /**
     * @type {string}
     * @memberof Config
     *
     */
    readonly resourceGroupName: string;
    /**
     *  @type {string}
     *  @memberof Config
     */
    readonly storageAccountName: string;
    /**
     * @type {string}
     * @memberof Config
     */ 
    readonly storageAccountSku: string;
    /**
     * @type {string}
     * @memberof Config
     */
    readonly storageAccountKind: string;
    /**
     * @type {string}
     * @memberof Config
     */
    readonly storageAccountLocation: string;
    /**
     * @type {string}
     * @memberof Config
     */
    readonly storageAccountResourceGroupName: string;
    /**
     * @type {string}
     * @memberof Config
     */
    readonly storageAccountStaticWebsiteIndexDocument: string;
    /**
     * @type {string}
     * @memberof Config
     */
    readonly accountName: string;
}
