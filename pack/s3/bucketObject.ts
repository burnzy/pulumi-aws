// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {Bucket} from "./bucket";

/**
 * Provides a S3 bucket object resource.
 */
export class BucketObject extends fabric.Resource {
    /**
     * The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Defaults to "private".
     */
    public readonly acl?: fabric.Computed<string>;
    /**
     * The name of the bucket to put the file in.
     */
    public readonly bucket: fabric.Computed<Bucket>;
    /**
     * Specifies caching behavior along the request/reply chain Read [w3c cache_control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) for further details.
     */
    public readonly cacheControl?: fabric.Computed<string>;
    /**
     * The literal content being uploaded to the bucket.
     */
    public readonly content?: fabric.Computed<string>;
    /**
     * Specifies presentational information for the object. Read [wc3 content_disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) for further information.
     */
    public readonly contentDisposition?: fabric.Computed<string>;
    /**
     * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [w3c content encoding](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) for further information.
     */
    public readonly contentEncoding?: fabric.Computed<string>;
    /**
     * The language the content is in e.g. en-US or en-GB.
     */
    public readonly contentLanguage?: fabric.Computed<string>;
    /**
     * A standard MIME type describing the format of the object data, e.g. application/octet-stream. All Valid MIME Types are valid for this input.
     */
    public readonly contentType: fabric.Computed<string>;
    /**
     * Used to trigger updates. The only meaningful value is `${md5(file("path/to/file"))}`.
     * This attribute is not compatible with `kms_key_id`.
     */
    public readonly etag: fabric.Computed<string>;
    /**
     * The name of the object once it is in the bucket.
     */
    public readonly key: fabric.Computed<string>;
    /**
     * Specifies the AWS KMS Key ARN to use for object encryption.
     * This value is a fully qualified **ARN** of the KMS Key. If using `aws_kms_key`,
     * use the exported `arn` attribute:
     * `kms_key_id = "${aws_kms_key.foo.arn}"`
     */
    public readonly kmsKeyId?: fabric.Computed<string>;
    /**
     * Specifies server-side encryption of the object in S3. Valid values are "`AES256`" and "`aws:kms`".
     */
    public readonly serverSideEncryption: fabric.Computed<string>;
    /**
     * The path to the source file being uploaded to the bucket.
     */
    public readonly source?: fabric.Computed<fabric.asset.Asset>;
    /**
     * Specifies the desired [Storage Class](http://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html)
     * for the object. Can be either "`STANDARD`", "`REDUCED_REDUNDANCY`", or "`STANDARD_IA`". Defaults to "`STANDARD`".
     */
    public readonly storageClass: fabric.Computed<string>;
    /**
     * A mapping of tags to assign to the object.
     */
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    /**
     * A unique version ID value for the object, if bucket versioning
     * is enabled.
     */
    public /*out*/ readonly versionId: fabric.Computed<string>;
    /**
     * Specifies a target URL for [website redirect](http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html).
     */
    public readonly websiteRedirect?: fabric.Computed<string>;

    /**
     * Create a BucketObject resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this BucketObject instance
     * @param args A collection of arguments for creating this BucketObject intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: BucketObjectArgs, dependsOn?: fabric.Resource[]) {
        if (args.bucket === undefined) {
            throw new Error("Missing required property 'bucket'");
        }
        super("aws:s3/bucketObject:BucketObject", urnName, {
            "acl": args.acl,
            "bucket": args.bucket,
            "cacheControl": args.cacheControl,
            "content": args.content,
            "contentDisposition": args.contentDisposition,
            "contentEncoding": args.contentEncoding,
            "contentLanguage": args.contentLanguage,
            "contentType": args.contentType,
            "etag": args.etag,
            "key": args.key,
            "kmsKeyId": args.kmsKeyId,
            "serverSideEncryption": args.serverSideEncryption,
            "source": args.source,
            "storageClass": args.storageClass,
            "tags": args.tags,
            "websiteRedirect": args.websiteRedirect,
            "versionId": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a BucketObject resource.
 */
export interface BucketObjectArgs {
    /**
     * The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Defaults to "private".
     */
    readonly acl?: fabric.ComputedValue<string>;
    /**
     * The name of the bucket to put the file in.
     */
    readonly bucket: fabric.ComputedValue<Bucket>;
    /**
     * Specifies caching behavior along the request/reply chain Read [w3c cache_control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) for further details.
     */
    readonly cacheControl?: fabric.ComputedValue<string>;
    /**
     * The literal content being uploaded to the bucket.
     */
    readonly content?: fabric.ComputedValue<string>;
    /**
     * Specifies presentational information for the object. Read [wc3 content_disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) for further information.
     */
    readonly contentDisposition?: fabric.ComputedValue<string>;
    /**
     * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [w3c content encoding](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) for further information.
     */
    readonly contentEncoding?: fabric.ComputedValue<string>;
    /**
     * The language the content is in e.g. en-US or en-GB.
     */
    readonly contentLanguage?: fabric.ComputedValue<string>;
    /**
     * A standard MIME type describing the format of the object data, e.g. application/octet-stream. All Valid MIME Types are valid for this input.
     */
    readonly contentType?: fabric.ComputedValue<string>;
    /**
     * Used to trigger updates. The only meaningful value is `${md5(file("path/to/file"))}`.
     * This attribute is not compatible with `kms_key_id`.
     */
    readonly etag?: fabric.ComputedValue<string>;
    /**
     * The name of the object once it is in the bucket.
     */
    readonly key?: fabric.ComputedValue<string>;
    /**
     * Specifies the AWS KMS Key ARN to use for object encryption.
     * This value is a fully qualified **ARN** of the KMS Key. If using `aws_kms_key`,
     * use the exported `arn` attribute:
     * `kms_key_id = "${aws_kms_key.foo.arn}"`
     */
    readonly kmsKeyId?: fabric.ComputedValue<string>;
    /**
     * Specifies server-side encryption of the object in S3. Valid values are "`AES256`" and "`aws:kms`".
     */
    readonly serverSideEncryption?: fabric.ComputedValue<string>;
    /**
     * The path to the source file being uploaded to the bucket.
     */
    readonly source?: fabric.asset.Asset;
    /**
     * Specifies the desired [Storage Class](http://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html)
     * for the object. Can be either "`STANDARD`", "`REDUCED_REDUNDANCY`", or "`STANDARD_IA`". Defaults to "`STANDARD`".
     */
    readonly storageClass?: fabric.ComputedValue<string>;
    /**
     * A mapping of tags to assign to the object.
     */
    readonly tags?: fabric.ComputedValue<{[key: string]: any}>;
    /**
     * Specifies a target URL for [website redirect](http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html).
     */
    readonly websiteRedirect?: fabric.ComputedValue<string>;
}

