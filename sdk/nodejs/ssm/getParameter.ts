// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as utils from "../utils";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/ssm_parameter.html.markdown.
 */
export function getParameter(args: GetParameterArgs, opts?: pulumi.InvokeOptions): GetParameterResult {
    const promise: Promise<GetParameterResult> = pulumi.runtime.invoke("aws:ssm/getParameter:getParameter", {
        "name": args.name,
        "withDecryption": args.withDecryption,
    }, opts);

    return utils.promiseResult(promise);
}

/**
 * A collection of arguments for invoking getParameter.
 */
export interface GetParameterArgs {
    /**
     * The name of the parameter.
     */
    readonly name: string;
    /**
     * Whether to return decrypted `SecureString` value. Defaults to `true`.
     */
    readonly withDecryption?: boolean;
}

/**
 * A collection of values returned by getParameter.
 */
export interface GetParameterResult {
    readonly arn: string;
    readonly name: string;
    readonly type: string;
    readonly value: string;
    readonly version: number;
    readonly withDecryption?: boolean;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
