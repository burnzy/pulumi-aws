// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as utils from "../utils";

/**
 * This data source can be used to fetch information about a specific
 * IAM user. By using this data source, you can reference IAM user
 * properties without having to hard code ARNs or unique IDs as input.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = pulumi.output(aws.iam.getUser({
 *     userName: "an_example_user_name",
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/iam_user.html.markdown.
 */
export function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): GetUserResult {
    const promise: Promise<GetUserResult> = pulumi.runtime.invoke("aws:iam/getUser:getUser", {
        "userName": args.userName,
    }, opts);

    return utils.promiseResult(promise);
}

/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserArgs {
    /**
     * The friendly IAM user name to match.
     */
    readonly userName: string;
}

/**
 * A collection of values returned by getUser.
 */
export interface GetUserResult {
    /**
     * The Amazon Resource Name (ARN) assigned by AWS for this user.
     */
    readonly arn: string;
    /**
     * Path in which this user was created.
     */
    readonly path: string;
    /**
     * The ARN of the policy that is used to set the permissions boundary for the user.
     */
    readonly permissionsBoundary: string;
    /**
     * The unique ID assigned by AWS for this user.
     */
    readonly userId: string;
    /**
     * The name associated to this User
     */
    readonly userName: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
