// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";
import * as utils from "./utils";

/**
 * Use this data source to get the Account ID of the [AWS Billing and Cost Management Service Account](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-getting-started.html#step-2) for the purpose of whitelisting in S3 bucket policy.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const main = pulumi.output(aws.getBillingServiceAccount({}));
 * const billingLogs = new aws.s3.Bucket("billing_logs", {
 *     acl: "private",
 *     policy: pulumi.interpolate`{
 *   "Id": "Policy",
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Action": [
 *         "s3:GetBucketAcl", "s3:GetBucketPolicy"
 *       ],
 *       "Effect": "Allow",
 *       "Resource": "arn:aws:s3:::my-billing-tf-test-bucket",
 *       "Principal": {
 *         "AWS": [
 *           "${main.arn}"
 *         ]
 *       }
 *     },
 *     {
 *       "Action": [
 *         "s3:PutObject"
 *       ],
 *       "Effect": "Allow",
 *       "Resource": "arn:aws:s3:::my-billing-tf-test-bucket/*",
 *       "Principal": {
 *         "AWS": [
 *           "${main.arn}"
 *         ]
 *       }
 *     }
 *   ]
 * }
 * `,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/billing_service_account.html.markdown.
 */
export function getBillingServiceAccount(opts?: pulumi.InvokeOptions): GetBillingServiceAccountResult {
    const promise: Promise<GetBillingServiceAccountResult> = pulumi.runtime.invoke("aws:index/getBillingServiceAccount:getBillingServiceAccount", {
    }, opts);

    return utils.promiseResult(promise);
}

/**
 * A collection of values returned by getBillingServiceAccount.
 */
export interface GetBillingServiceAccountResult {
    /**
     * The ARN of the AWS billing service account.
     */
    readonly arn: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
