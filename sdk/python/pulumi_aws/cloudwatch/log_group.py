# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class LogGroup(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) specifying the log group.
    """
    kms_key_id: pulumi.Output[str]
    """
    The ARN of the KMS Key to use when encrypting log data. Please note, after the AWS KMS CMK is disassociated from the log group,
    AWS CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and AWS CloudWatch Logs requires
    permissions for the CMK whenever the encrypted data is requested.
    """
    name: pulumi.Output[str]
    name_prefix: pulumi.Output[str]
    """
    Creates a unique name beginning with the specified prefix. Conflicts with `name`.
    """
    retention_in_days: pulumi.Output[float]
    """
    Specifies the number of days
    you want to retain log events in the specified log group.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, kms_key_id=None, name=None, name_prefix=None, retention_in_days=None, tags=None, __name__=None, __opts__=None):
        """
        Provides a CloudWatch Log Group resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] kms_key_id: The ARN of the KMS Key to use when encrypting log data. Please note, after the AWS KMS CMK is disassociated from the log group,
               AWS CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and AWS CloudWatch Logs requires
               permissions for the CMK whenever the encrypted data is requested.
        :param pulumi.Input[str] name_prefix: Creates a unique name beginning with the specified prefix. Conflicts with `name`.
        :param pulumi.Input[float] retention_in_days: Specifies the number of days
               you want to retain log events in the specified log group.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/cloudwatch_log_group.html.markdown.
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

        __props__['kms_key_id'] = kms_key_id

        __props__['name'] = name

        __props__['name_prefix'] = name_prefix

        __props__['retention_in_days'] = retention_in_days

        __props__['tags'] = tags

        __props__['arn'] = None

        super(LogGroup, __self__).__init__(
            'aws:cloudwatch/logGroup:LogGroup',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

