// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as utils from "../utils";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/kms_secret.html.markdown.
 */
export function getSecret(args: GetSecretArgs, opts?: pulumi.InvokeOptions): GetSecretResult {
    const promise: Promise<GetSecretResult> = pulumi.runtime.invoke("aws:kms/getSecret:getSecret", {
        "secrets": args.secrets,
    }, opts);

    return utils.promiseResult(promise);
}

/**
 * A collection of arguments for invoking getSecret.
 */
export interface GetSecretArgs {
    readonly secrets: { context?: {[key: string]: string}, grantTokens?: string[], name: string, payload: string }[];
}

/**
 * A collection of values returned by getSecret.
 */
export interface GetSecretResult {
    readonly secrets: { context?: {[key: string]: string}, grantTokens?: string[], name: string, payload: string }[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
