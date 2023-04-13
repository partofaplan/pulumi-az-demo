This repo is for educational purposes and intended to be as a template for helping people learn how to use Pulumi in Typescript, Python and YAML. These stacks connect to my private AZ lab currently and are not intended for wider use, but can be re-purposed by branching this repository.

The stacks were created using the tutorial from [Pulumi for Azure native deployment](https://www.pulumi.com/docs/get-started/azure/begin/).

## ./quickstart/

This is the OG Typescript stack. Deploys a standard blob storage to Azure.

## ./quickstart_yaml/

This is the YAML stack. Deploys a standard blob storage to Azure.

## ./quickstart_py/

This is the Python stack. Deploys a standard blob storage to Azure.

## Creating a service principal

1. In Azure, go to the Azure AD on your account.
2. Click "App registrations".
3. Click "New registration".
4. Create a registration using any name. I also prefer to create it under "single tenant" usage.
5. After creation, copy down the client ID and tenant ID on the new account.
6. Find your subscription and click on the "Access control (IAM)" option on the menu.
7. Click "Add role assignment".
8. Click "Contributor".
9. Add your new app registration as a contributor to the subscription.
10. Set the Azure configuration settings in your Pulumi configs using the model [here](https://www.pulumi.com/registry/packages/azure-native/installation-configuration/#make-tokens-available-to-pulumi).

## Create a secret for your Pulumi config
1. In Azure, go to Active Directory.
2. Click on your app registration name of the service principal for your environment.
3. Click "Certificates & secrets".
4. Click "New client secret".
5. Type in a description of the secret and set the expires time.
6. Click "Add".
7. Copy the secret ID and value into a local notepad.
8. In your Pulumi stack, type `pulumi config set --secret azure-native:clientSecret <SECRET VALUE>`.