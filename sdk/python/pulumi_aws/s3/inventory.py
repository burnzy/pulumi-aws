# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Inventory(pulumi.CustomResource):
    bucket: pulumi.Output[str]
    """
    The S3 bucket configuration where inventory results are published (documented below).
    """
    destination: pulumi.Output[dict]
    """
    Destination bucket where inventory list files are written (documented below).
    """
    enabled: pulumi.Output[bool]
    """
    Specifies whether the inventory is enabled or disabled.
    """
    filter: pulumi.Output[dict]
    """
    Object filtering that accepts a prefix (documented below).
    """
    included_object_versions: pulumi.Output[str]
    """
    Object filtering that accepts a prefix (documented below). Can be `All` or `Current`.
    """
    name: pulumi.Output[str]
    """
    Unique identifier of the inventory configuration for the bucket.
    """
    optional_fields: pulumi.Output[list]
    """
    Contains the optional fields that are included in the inventory results.
    """
    schedule: pulumi.Output[dict]
    """
    Contains the frequency for generating inventory results (documented below).
    """
    def __init__(__self__, resource_name, opts=None, bucket=None, destination=None, enabled=None, filter=None, included_object_versions=None, name=None, optional_fields=None, schedule=None, __name__=None, __opts__=None):
        """
        Provides a S3 bucket [inventory configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html) resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] bucket: The S3 bucket configuration where inventory results are published (documented below).
        :param pulumi.Input[dict] destination: Destination bucket where inventory list files are written (documented below).
        :param pulumi.Input[bool] enabled: Specifies whether the inventory is enabled or disabled.
        :param pulumi.Input[dict] filter: Object filtering that accepts a prefix (documented below).
        :param pulumi.Input[str] included_object_versions: Object filtering that accepts a prefix (documented below). Can be `All` or `Current`.
        :param pulumi.Input[str] name: Unique identifier of the inventory configuration for the bucket.
        :param pulumi.Input[list] optional_fields: Contains the optional fields that are included in the inventory results.
        :param pulumi.Input[dict] schedule: Contains the frequency for generating inventory results (documented below).

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/s3_bucket_inventory.html.markdown.
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

        if bucket is None:
            raise TypeError("Missing required property 'bucket'")
        __props__['bucket'] = bucket

        if destination is None:
            raise TypeError("Missing required property 'destination'")
        __props__['destination'] = destination

        __props__['enabled'] = enabled

        __props__['filter'] = filter

        if included_object_versions is None:
            raise TypeError("Missing required property 'included_object_versions'")
        __props__['included_object_versions'] = included_object_versions

        __props__['name'] = name

        __props__['optional_fields'] = optional_fields

        if schedule is None:
            raise TypeError("Missing required property 'schedule'")
        __props__['schedule'] = schedule

        super(Inventory, __self__).__init__(
            'aws:s3/inventory:Inventory',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

