# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Bucket(pulumi.CustomResource):
    acceleration_status: pulumi.Output[str]
    """
    Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`.
    """
    acl: pulumi.Output[str]
    """
    The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Defaults to "private".
    """
    arn: pulumi.Output[str]
    """
    The ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.
    """
    bucket: pulumi.Output[str]
    """
    The ARN of the S3 bucket where you want Amazon S3 to store replicas of the object identified by the rule.
    """
    bucket_domain_name: pulumi.Output[str]
    """
    The bucket domain name. Will be of format `bucketname.s3.amazonaws.com`.
    """
    bucket_prefix: pulumi.Output[str]
    """
    Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`.
    """
    bucket_regional_domain_name: pulumi.Output[str]
    """
    The bucket region-specific domain name. The bucket domain name including the region name, please refer [here](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for format. Note: The AWS CloudFront allows specifying S3 region-specific endpoint when creating S3 origin, it will prevent [redirect issues](https://forums.aws.amazon.com/thread.jspa?threadID=216814) from CloudFront to S3 Origin URL.
    """
    cors_rules: pulumi.Output[list]
    """
    A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).
    """
    force_destroy: pulumi.Output[bool]
    """
    A boolean that indicates all objects should be deleted from the bucket so that the bucket can be destroyed without error. These objects are *not* recoverable.
    """
    hosted_zone_id: pulumi.Output[str]
    """
    The [Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.
    """
    lifecycle_rules: pulumi.Output[list]
    """
    A configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) (documented below).
    """
    loggings: pulumi.Output[list]
    """
    A settings of [bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) (documented below).
    """
    object_lock_configuration: pulumi.Output[dict]
    """
    A configuration of [S3 object locking](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) (documented below)
    """
    policy: pulumi.Output[str]
    region: pulumi.Output[str]
    """
    If specified, the AWS region this bucket should reside in. Otherwise, the region used by the callee.
    """
    replication_configuration: pulumi.Output[dict]
    """
    A configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html) (documented below).
    """
    request_payer: pulumi.Output[str]
    """
    Specifies who should bear the cost of Amazon S3 data transfer.
    Can be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur
    the costs of any data transfer. See [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html)
    developer guide for more information.
    """
    server_side_encryption_configuration: pulumi.Output[dict]
    """
    A configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) (documented below)
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags that identifies subset of objects to which the rule applies.
    The rule applies only to objects having all the tags in its tagset.
    """
    versioning: pulumi.Output[dict]
    """
    A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)
    """
    website: pulumi.Output[dict]
    """
    A website object (documented below).
    """
    website_domain: pulumi.Output[str]
    """
    The domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records.
    """
    website_endpoint: pulumi.Output[str]
    """
    The website endpoint, if the bucket is configured with a website. If not, this will be an empty string.
    """
    def __init__(__self__, resource_name, opts=None, acceleration_status=None, acl=None, arn=None, bucket=None, bucket_prefix=None, cors_rules=None, force_destroy=None, hosted_zone_id=None, lifecycle_rules=None, loggings=None, object_lock_configuration=None, policy=None, region=None, replication_configuration=None, request_payer=None, server_side_encryption_configuration=None, tags=None, versioning=None, website=None, website_domain=None, website_endpoint=None, __name__=None, __opts__=None):
        """
        Provides a S3 bucket resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] acceleration_status: Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`.
        :param pulumi.Input[str] acl: The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Defaults to "private".
        :param pulumi.Input[str] arn: The ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.
        :param pulumi.Input[str] bucket: The ARN of the S3 bucket where you want Amazon S3 to store replicas of the object identified by the rule.
        :param pulumi.Input[str] bucket_prefix: Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`.
        :param pulumi.Input[list] cors_rules: A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).
        :param pulumi.Input[bool] force_destroy: A boolean that indicates all objects should be deleted from the bucket so that the bucket can be destroyed without error. These objects are *not* recoverable.
        :param pulumi.Input[str] hosted_zone_id: The [Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.
        :param pulumi.Input[list] lifecycle_rules: A configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) (documented below).
        :param pulumi.Input[list] loggings: A settings of [bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) (documented below).
        :param pulumi.Input[dict] object_lock_configuration: A configuration of [S3 object locking](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) (documented below)
        :param pulumi.Input[str] region: If specified, the AWS region this bucket should reside in. Otherwise, the region used by the callee.
        :param pulumi.Input[dict] replication_configuration: A configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html) (documented below).
        :param pulumi.Input[str] request_payer: Specifies who should bear the cost of Amazon S3 data transfer.
               Can be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur
               the costs of any data transfer. See [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html)
               developer guide for more information.
        :param pulumi.Input[dict] server_side_encryption_configuration: A configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) (documented below)
        :param pulumi.Input[dict] tags: A mapping of tags that identifies subset of objects to which the rule applies.
               The rule applies only to objects having all the tags in its tagset.
        :param pulumi.Input[dict] versioning: A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)
        :param pulumi.Input[dict] website: A website object (documented below).
        :param pulumi.Input[str] website_domain: The domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records.
        :param pulumi.Input[str] website_endpoint: The website endpoint, if the bucket is configured with a website. If not, this will be an empty string.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/s3_bucket.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['acceleration_status'] = acceleration_status

        __props__['acl'] = acl

        __props__['arn'] = arn

        __props__['bucket'] = bucket

        __props__['bucket_prefix'] = bucket_prefix

        __props__['cors_rules'] = cors_rules

        __props__['force_destroy'] = force_destroy

        __props__['hosted_zone_id'] = hosted_zone_id

        __props__['lifecycle_rules'] = lifecycle_rules

        __props__['loggings'] = loggings

        __props__['object_lock_configuration'] = object_lock_configuration

        __props__['policy'] = policy

        __props__['region'] = region

        __props__['replication_configuration'] = replication_configuration

        __props__['request_payer'] = request_payer

        __props__['server_side_encryption_configuration'] = server_side_encryption_configuration

        __props__['tags'] = tags

        __props__['versioning'] = versioning

        __props__['website'] = website

        __props__['website_domain'] = website_domain

        __props__['website_endpoint'] = website_endpoint

        __props__['bucket_domain_name'] = None
        __props__['bucket_regional_domain_name'] = None

        super(Bucket, __self__).__init__(
            'aws:s3/bucket:Bucket',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

