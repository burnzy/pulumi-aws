// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides a CloudTrail resource.
 */
export class Trail extends fabric.Resource {
    /**
     * The Amazon Resource Name of the trail.
     */
    public /*out*/ readonly arn: fabric.Computed<string>;
    /**
     * Specifies a log group name using an Amazon Resource Name (ARN),
     * that represents the log group to which CloudTrail logs will be delivered.
     */
    public readonly cloudWatchLogsGroupArn?: fabric.Computed<string>;
    /**
     * Specifies the role for the CloudWatch Logs
     * endpoint to assume to write to a user’s log group.
     */
    public readonly cloudWatchLogsRoleArn?: fabric.Computed<string>;
    /**
     * Specifies whether log file integrity validation is enabled.
     * Defaults to `false`.
     */
    public readonly enableLogFileValidation?: fabric.Computed<boolean>;
    /**
     * Enables logging for the trail. Defaults to `true`.
     * Setting this to `false` will pause logging.
     */
    public readonly enableLogging?: fabric.Computed<boolean>;
    /**
     * The region in which the trail was created.
     */
    public /*out*/ readonly homeRegion: fabric.Computed<string>;
    /**
     * Specifies whether the trail is publishing events
     * from global services such as IAM to the log files. Defaults to `true`.
     */
    public readonly includeGlobalServiceEvents?: fabric.Computed<boolean>;
    /**
     * Specifies whether the trail is created in the current
     * region or in all regions. Defaults to `false`.
     */
    public readonly isMultiRegionTrail?: fabric.Computed<boolean>;
    /**
     * Specifies the KMS key ARN to use to encrypt the logs delivered by CloudTrail.
     */
    public readonly kmsKeyId?: fabric.Computed<string>;
    /**
     * Specifies the name of the trail.
     */
    public readonly name: fabric.Computed<string>;
    /**
     * Specifies the name of the S3 bucket designated for publishing log files.
     */
    public readonly s3BucketName: fabric.Computed<string>;
    /**
     * Specifies the S3 key prefix that precedes
     * the name of the bucket you have designated for log file delivery.
     */
    public readonly s3KeyPrefix?: fabric.Computed<string>;
    /**
     * Specifies the name of the Amazon SNS topic
     * defined for notification of log file delivery.
     */
    public readonly snsTopicName?: fabric.Computed<string>;
    /**
     * A mapping of tags to assign to the trail
     */
    public readonly tags?: fabric.Computed<{[key: string]: any}>;

    /**
     * Create a Trail resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Trail instance
     * @param args A collection of arguments for creating this Trail intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: TrailArgs, dependsOn?: fabric.Resource[]) {
        if (args.s3BucketName === undefined) {
            throw new Error("Missing required property 's3BucketName'");
        }
        super("aws:cloudtrail/trail:Trail", urnName, {
            "cloudWatchLogsGroupArn": args.cloudWatchLogsGroupArn,
            "cloudWatchLogsRoleArn": args.cloudWatchLogsRoleArn,
            "enableLogFileValidation": args.enableLogFileValidation,
            "enableLogging": args.enableLogging,
            "includeGlobalServiceEvents": args.includeGlobalServiceEvents,
            "isMultiRegionTrail": args.isMultiRegionTrail,
            "kmsKeyId": args.kmsKeyId,
            "name": args.name,
            "s3BucketName": args.s3BucketName,
            "s3KeyPrefix": args.s3KeyPrefix,
            "snsTopicName": args.snsTopicName,
            "tags": args.tags,
            "arn": undefined,
            "homeRegion": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Trail resource.
 */
export interface TrailArgs {
    /**
     * Specifies a log group name using an Amazon Resource Name (ARN),
     * that represents the log group to which CloudTrail logs will be delivered.
     */
    readonly cloudWatchLogsGroupArn?: fabric.ComputedValue<string>;
    /**
     * Specifies the role for the CloudWatch Logs
     * endpoint to assume to write to a user’s log group.
     */
    readonly cloudWatchLogsRoleArn?: fabric.ComputedValue<string>;
    /**
     * Specifies whether log file integrity validation is enabled.
     * Defaults to `false`.
     */
    readonly enableLogFileValidation?: fabric.ComputedValue<boolean>;
    /**
     * Enables logging for the trail. Defaults to `true`.
     * Setting this to `false` will pause logging.
     */
    readonly enableLogging?: fabric.ComputedValue<boolean>;
    /**
     * Specifies whether the trail is publishing events
     * from global services such as IAM to the log files. Defaults to `true`.
     */
    readonly includeGlobalServiceEvents?: fabric.ComputedValue<boolean>;
    /**
     * Specifies whether the trail is created in the current
     * region or in all regions. Defaults to `false`.
     */
    readonly isMultiRegionTrail?: fabric.ComputedValue<boolean>;
    /**
     * Specifies the KMS key ARN to use to encrypt the logs delivered by CloudTrail.
     */
    readonly kmsKeyId?: fabric.ComputedValue<string>;
    /**
     * Specifies the name of the trail.
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * Specifies the name of the S3 bucket designated for publishing log files.
     */
    readonly s3BucketName: fabric.ComputedValue<string>;
    /**
     * Specifies the S3 key prefix that precedes
     * the name of the bucket you have designated for log file delivery.
     */
    readonly s3KeyPrefix?: fabric.ComputedValue<string>;
    /**
     * Specifies the name of the Amazon SNS topic
     * defined for notification of log file delivery.
     */
    readonly snsTopicName?: fabric.ComputedValue<string>;
    /**
     * A mapping of tags to assign to the trail
     */
    readonly tags?: fabric.ComputedValue<{[key: string]: any}>;
}

