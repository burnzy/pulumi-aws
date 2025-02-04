# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Snapshot(pulumi.CustomResource):
    data_encryption_key_id: pulumi.Output[str]
    """
    The data encryption key identifier for the snapshot.
    """
    description: pulumi.Output[str]
    """
    A description of what the snapshot is.
    """
    encrypted: pulumi.Output[bool]
    """
    Whether the snapshot is encrypted.
    """
    kms_key_id: pulumi.Output[str]
    """
    The ARN for the KMS encryption key.
    """
    owner_alias: pulumi.Output[str]
    """
    Value from an Amazon-maintained list (`amazon`, `aws-marketplace`, `microsoft`) of snapshot owners.
    """
    owner_id: pulumi.Output[str]
    """
    The AWS account ID of the EBS snapshot owner.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the snapshot
    """
    volume_id: pulumi.Output[str]
    """
    The Volume ID of which to make a snapshot.
    """
    volume_size: pulumi.Output[float]
    """
    The size of the drive in GiBs.
    """
    def __init__(__self__, resource_name, opts=None, description=None, tags=None, volume_id=None, __name__=None, __opts__=None):
        """
        Creates a Snapshot of an EBS Volume.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: A description of what the snapshot is.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the snapshot
        :param pulumi.Input[str] volume_id: The Volume ID of which to make a snapshot.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/ebs_snapshot.html.markdown.
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

        __props__['description'] = description

        __props__['tags'] = tags

        if volume_id is None:
            raise TypeError("Missing required property 'volume_id'")
        __props__['volume_id'] = volume_id

        __props__['data_encryption_key_id'] = None
        __props__['encrypted'] = None
        __props__['kms_key_id'] = None
        __props__['owner_alias'] = None
        __props__['owner_id'] = None
        __props__['volume_size'] = None

        super(Snapshot, __self__).__init__(
            'aws:ebs/snapshot:Snapshot',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

