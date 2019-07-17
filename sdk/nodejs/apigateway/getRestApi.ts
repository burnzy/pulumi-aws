// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as utils from "../utils";

/**
 * Use this data source to get the id and root_resource_id of a REST API in
 * API Gateway. To fetch the REST API you must provide a name to match against. 
 * As there is no unique name constraint on REST APIs this data source will 
 * error if there is more than one match.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const myRestApi = pulumi.output(aws.apigateway.getRestApi({
 *     name: "my-rest-api",
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/api_gateway_rest_api.html.markdown.
 */
export function getRestApi(args: GetRestApiArgs, opts?: pulumi.InvokeOptions): GetRestApiResult {
    const promise: Promise<GetRestApiResult> = pulumi.runtime.invoke("aws:apigateway/getRestApi:getRestApi", {
        "name": args.name,
    }, opts);

    return utils.promiseResult(promise);
}

/**
 * A collection of arguments for invoking getRestApi.
 */
export interface GetRestApiArgs {
    /**
     * The name of the REST API to look up. If no REST API is found with this name, an error will be returned. 
     * If multiple REST APIs are found with this name, an error will be returned.
     */
    readonly name: string;
}

/**
 * A collection of values returned by getRestApi.
 */
export interface GetRestApiResult {
    readonly name: string;
    /**
     * Set to the ID of the API Gateway Resource on the found REST API where the route matches '/'.
     */
    readonly rootResourceId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
