// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to get a list of cognito user pools.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const selectedRestApi = pulumi.output(aws.apigateway.getRestApi({
 *     name: var_api_gateway_name,
 * }));
 * const selectedUserPools = pulumi.output(aws.cognito.getUserPools({
 *     name: var_cognito_user_pool_name,
 * }));
 * const cognito = new aws.apigateway.Authorizer("cognito", {
 *     providerArns: selectedUserPools.arns,
 *     restApi: selectedRestApi.id,
 *     type: "COGNITO_USER_POOLS",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/cognito_user_pools.html.markdown.
 */
export function getUserPools(args: GetUserPoolsArgs, opts?: pulumi.InvokeOptions): Promise<GetUserPoolsResult> & GetUserPoolsResult {
    const promise: Promise<GetUserPoolsResult> = pulumi.runtime.invoke("aws:cognito/getUserPools:getUserPools", {
        "name": args.name,
    }, opts);

    return pulumi.utils.liftProperties(promise);
}

/**
 * A collection of arguments for invoking getUserPools.
 */
export interface GetUserPoolsArgs {
    /**
     * Name of the cognito user pools. Name is not a unique attribute for cognito user pool, so multiple pools might be returned with given name.
     */
    readonly name: string;
}

/**
 * A collection of values returned by getUserPools.
 */
export interface GetUserPoolsResult {
    readonly arns: string[];
    /**
     * The list of cognito user pool ids.
     */
    readonly ids: string[];
    readonly name: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
