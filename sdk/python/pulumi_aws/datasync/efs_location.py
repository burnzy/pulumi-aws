# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class EfsLocation(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    Amazon Resource Name (ARN) of the DataSync Location.
    """
    ec2_config: pulumi.Output[dict]
    """
    Configuration block containing EC2 configurations for connecting to the EFS File System.
    """
    efs_file_system_arn: pulumi.Output[str]
    """
    Amazon Resource Name (ARN) of EFS File System.
    """
    subdirectory: pulumi.Output[str]
    """
    Subdirectory to perform actions as source or destination. Default `/`.
    """
    tags: pulumi.Output[dict]
    """
    Key-value pairs of resource tags to assign to the DataSync Location.
    """
    uri: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, ec2_config=None, efs_file_system_arn=None, subdirectory=None, tags=None, __name__=None, __opts__=None):
        """
        Manages an AWS DataSync EFS Location.
        
        > **NOTE:** The EFS File System must have a mounted EFS Mount Target before creating this resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] ec2_config: Configuration block containing EC2 configurations for connecting to the EFS File System.
        :param pulumi.Input[str] efs_file_system_arn: Amazon Resource Name (ARN) of EFS File System.
        :param pulumi.Input[str] subdirectory: Subdirectory to perform actions as source or destination. Default `/`.
        :param pulumi.Input[dict] tags: Key-value pairs of resource tags to assign to the DataSync Location.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/datasync_location_efs.html.markdown.
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

        if ec2_config is None:
            raise TypeError("Missing required property 'ec2_config'")
        __props__['ec2_config'] = ec2_config

        if efs_file_system_arn is None:
            raise TypeError("Missing required property 'efs_file_system_arn'")
        __props__['efs_file_system_arn'] = efs_file_system_arn

        __props__['subdirectory'] = subdirectory

        __props__['tags'] = tags

        __props__['arn'] = None
        __props__['uri'] = None

        super(EfsLocation, __self__).__init__(
            'aws:datasync/efsLocation:EfsLocation',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

