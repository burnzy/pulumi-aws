// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {Region} from "../region";

let _config = new fabric.Config("aws:config");

/**
 * The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.
 */
export let accessKey: string | undefined = _config.get("accessKey");
export let allowedAccountIds: string[] | undefined = _config.getObject<string[] | undefined>("allowedAccountIds");
export let assumeRole: { externalId?: string, policy?: string, roleArn?: string, sessionName?: string }[] | undefined = _config.getObject<{ externalId?: string, policy?: string, roleArn?: string, sessionName?: string }[] | undefined>("assumeRole");
/**
 * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to
 * dynamodb-local.
 */
export let dynamodbEndpoint: string | undefined = _config.get("dynamodbEndpoint");
export let endpoints: { cloudformation?: string, cloudwatch?: string, cloudwatchevents?: string, cloudwatchlogs?: string, devicefarm?: string, dynamodb?: string, ec2?: string, elb?: string, iam?: string, kinesis?: string, kms?: string, rds?: string, s3?: string, sns?: string, sqs?: string }[] | undefined = _config.getObject<{ cloudformation?: string, cloudwatch?: string, cloudwatchevents?: string, cloudwatchlogs?: string, devicefarm?: string, dynamodb?: string, ec2?: string, elb?: string, iam?: string, kinesis?: string, kms?: string, rds?: string, s3?: string, sns?: string, sqs?: string }[] | undefined>("endpoints");
export let forbiddenAccountIds: string[] | undefined = _config.getObject<string[] | undefined>("forbiddenAccountIds");
/**
 * Explicitly allow the provider to perform "insecure" SSL requests. If omitted,default value is `false`
 */
export let insecure: boolean | undefined = _config.getObject<boolean | undefined>("insecure");
/**
 * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to
 * kinesalite.
 */
export let kinesisEndpoint: string | undefined = _config.get("kinesisEndpoint");
/**
 * The maximum number of times an AWS API request is being executed. If the API request still fails, an error is thrown.
 */
export let maxRetries: number | undefined = _config.getObject<number | undefined>("maxRetries");
/**
 * The profile for API operations. If not set, the default profile created with `aws configure` will be used.
 */
export let profile: string | undefined = _config.get("profile");
/**
 * The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc.
 */
export let region: Region = <any>_config.require("region");
/**
 * Set this to true to force the request to use path-style addressing, i.e., http://s3.amazonaws.com/BUCKET/KEY. By
 * default, the S3 client will use virtual hosted bucket addressing when possible (http://BUCKET.s3.amazonaws.com/KEY).
 * Specific to the Amazon S3 service.
 */
export let s3ForcePathStyle: boolean | undefined = _config.getObject<boolean | undefined>("s3ForcePathStyle");
/**
 * The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.
 */
export let secretKey: string | undefined = _config.get("secretKey");
/**
 * The path to the shared credentials file. If not set this defaults to ~/.aws/credentials.
 */
export let sharedCredentialsFile: string | undefined = _config.get("sharedCredentialsFile");
/**
 * Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS
 * available/implemented.
 */
export let skipCredentialsValidation: boolean | undefined = _config.getObject<boolean | undefined>("skipCredentialsValidation");
/**
 * Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.
 */
export let skipGetEc2Platforms: boolean | undefined = _config.getObject<boolean | undefined>("skipGetEc2Platforms");
export let skipMetadataApiCheck: boolean | undefined = _config.getObject<boolean | undefined>("skipMetadataApiCheck");
/**
 * Skip static validation of region name. Used by users of alternative AWS-like APIs or users w/ access to regions that are
 * not public (yet).
 */
export let skipRegionValidation: boolean | undefined = _config.getObject<boolean | undefined>("skipRegionValidation");
/**
 * Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.
 */
export let skipRequestingAccountId: boolean | undefined = _config.getObject<boolean | undefined>("skipRequestingAccountId");
/**
 * session token. A session token is only required if you are using temporary security credentials.
 */
export let token: string | undefined = _config.get("token");

