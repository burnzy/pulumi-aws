// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * The S3 object data source allows access to the metadata and
 * _optionally_ (see below) content of an object stored inside S3 bucket.
 * 
 * > **Note:** The content of an object (`body` field) is available only for objects which have a human-readable `Content-Type` (`text/*` and `application/json`). This is to prevent printing unsafe characters and potentially downloading large amount of data which would be thrown away in favour of metadata.
 * 
 * ## Example Usage
 * 
 * The following example retrieves a text object (which must have a `Content-Type`
 * value starting with `text/`) and uses it as the `user_data` for an EC2 instance:
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const bootstrapScript = pulumi.output(aws.s3.getBucketObject({
 *     bucket: "ourcorp-deploy-config",
 *     key: "ec2-bootstrap-script.sh",
 * }));
 * const example = new aws.ec2.Instance("example", {
 *     ami: "ami-2757f631",
 *     instanceType: "t2.micro",
 *     userData: bootstrapScript.body,
 * });
 * ```
 * 
 * The following, more-complex example retrieves only the metadata for a zip
 * file stored in S3, which is then used to pass the most recent `version_id`
 * to AWS Lambda for use as a function implementation. More information about
 * Lambda functions is available in the documentation for
 * [`aws_lambda_function`](https://www.terraform.io/docs/providers/aws/r/lambda_function.html).
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const lambda = pulumi.output(aws.s3.getBucketObject({
 *     bucket: "ourcorp-lambda-functions",
 *     key: "hello-world.zip",
 * }));
 * const testLambda = new aws.lambda.Function("test_lambda", {
 *     handler: "exports.test",
 *     role: aws_iam_role_iam_for_lambda.arn, // (not shown)
 *     s3Bucket: lambda.bucket,
 *     s3Key: lambda.key,
 *     s3ObjectVersion: lambda.versionId,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/s3_bucket_object.html.markdown.
 */
export function getBucketObject(args: GetBucketObjectArgs, opts?: pulumi.InvokeOptions): Promise<GetBucketObjectResult> & GetBucketObjectResult {
    const promise: Promise<GetBucketObjectResult> = pulumi.runtime.invoke("aws:s3/getBucketObject:getBucketObject", {
        "bucket": args.bucket,
        "key": args.key,
        "range": args.range,
        "tags": args.tags,
        "versionId": args.versionId,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getBucketObject.
 */
export interface GetBucketObjectArgs {
    /**
     * The name of the bucket to read the object from
     */
    readonly bucket: string;
    /**
     * The full path to the object inside the bucket
     */
    readonly key: string;
    readonly range?: string;
    readonly tags?: {[key: string]: any};
    /**
     * Specific version ID of the object returned (defaults to latest version)
     */
    readonly versionId?: string;
}

/**
 * A collection of values returned by getBucketObject.
 */
export interface GetBucketObjectResult {
    /**
     * Object data (see **limitations above** to understand cases in which this field is actually available)
     */
    readonly body: string;
    readonly bucket: string;
    /**
     * Specifies caching behavior along the request/reply chain.
     */
    readonly cacheControl: string;
    /**
     * Specifies presentational information for the object.
     */
    readonly contentDisposition: string;
    /**
     * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
     */
    readonly contentEncoding: string;
    /**
     * The language the content is in.
     */
    readonly contentLanguage: string;
    /**
     * Size of the body in bytes.
     */
    readonly contentLength: number;
    /**
     * A standard MIME type describing the format of the object data.
     */
    readonly contentType: string;
    /**
     * [ETag](https://en.wikipedia.org/wiki/HTTP_ETag) generated for the object (an MD5 sum of the object content in case it's not encrypted)
     */
    readonly etag: string;
    /**
     * If the object expiration is configured (see [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html)), the field includes this header. It includes the expiry-date and rule-id key value pairs providing object expiration information. The value of the rule-id is URL encoded.
     */
    readonly expiration: string;
    /**
     * The date and time at which the object is no longer cacheable.
     */
    readonly expires: string;
    readonly key: string;
    /**
     * Last modified date of the object in RFC1123 format (e.g. `Mon, 02 Jan 2006 15:04:05 MST`)
     */
    readonly lastModified: string;
    /**
     * A map of metadata stored with the object in S3
     */
    readonly metadata: {[key: string]: any};
    readonly range?: string;
    /**
     * If the object is stored using server-side encryption (KMS or Amazon S3-managed encryption key), this field includes the chosen encryption and algorithm used.
     */
    readonly serverSideEncryption: string;
    /**
     * If present, specifies the ID of the Key Management Service (KMS) master encryption key that was used for the object.
     */
    readonly sseKmsKeyId: string;
    /**
     * [Storage class](http://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html) information of the object. Available for all objects except for `Standard` storage class objects.
     */
    readonly storageClass: string;
    /**
     * A mapping of tags assigned to the object.
     */
    readonly tags: {[key: string]: any};
    /**
     * The latest version ID of the object returned.
     */
    readonly versionId: string;
    /**
     * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
     */
    readonly websiteRedirectLocation: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
