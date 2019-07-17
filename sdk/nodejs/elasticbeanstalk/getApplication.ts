// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as utils from "../utils";

/**
 * Retrieve information about an Elastic Beanstalk Application.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = pulumi.output(aws.elasticbeanstalk.getApplication({
 *     name: "example",
 * }));
 * 
 * export const arn = example.arn;
 * export const description = example.description;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/elastic_beanstalk_application.html.markdown.
 */
export function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): GetApplicationResult {
    const promise: Promise<GetApplicationResult> = pulumi.runtime.invoke("aws:elasticbeanstalk/getApplication:getApplication", {
        "name": args.name,
    }, opts);

    return utils.promiseResult(promise);
}

/**
 * A collection of arguments for invoking getApplication.
 */
export interface GetApplicationArgs {
    /**
     * The name of the application
     */
    readonly name: string;
}

/**
 * A collection of values returned by getApplication.
 */
export interface GetApplicationResult {
    readonly appversionLifecycle: { deleteSourceFromS3: boolean, maxAgeInDays: number, maxCount: number, serviceRole: string };
    /**
     * The Amazon Resource Name (ARN) of the application.
     */
    readonly arn: string;
    /**
     * Short description of the application
     */
    readonly description: string;
    readonly name: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
