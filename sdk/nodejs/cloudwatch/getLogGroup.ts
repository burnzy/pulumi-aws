// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as utils from "../utils";

/**
 * Use this data source to get information about an AWS Cloudwatch Log Group
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = pulumi.output(aws.cloudwatch.getLogGroup({
 *     name: "MyImportantLogs",
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/cloudwatch_log_group.html.markdown.
 */
export function getLogGroup(args: GetLogGroupArgs, opts?: pulumi.InvokeOptions): GetLogGroupResult {
    const promise: Promise<GetLogGroupResult> = pulumi.runtime.invoke("aws:cloudwatch/getLogGroup:getLogGroup", {
        "name": args.name,
    }, opts);

    return utils.promiseResult(promise);
}

/**
 * A collection of arguments for invoking getLogGroup.
 */
export interface GetLogGroupArgs {
    /**
     * The name of the Cloudwatch log group
     */
    readonly name: string;
}

/**
 * A collection of values returned by getLogGroup.
 */
export interface GetLogGroupResult {
    /**
     * The ARN of the Cloudwatch log group
     */
    readonly arn: string;
    /**
     * The creation time of the log group, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    readonly creationTime: number;
    readonly name: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
