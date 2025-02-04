# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class MountTarget(pulumi.CustomResource):
    dns_name: pulumi.Output[str]
    """
    The DNS name for the given subnet/AZ per [documented convention](http://docs.aws.amazon.com/efs/latest/ug/mounting-fs-mount-cmd-dns-name.html).
    """
    file_system_arn: pulumi.Output[str]
    """
    Amazon Resource Name of the file system.
    """
    file_system_id: pulumi.Output[str]
    """
    The ID of the file system for which the mount target is intended.
    """
    ip_address: pulumi.Output[str]
    """
    The address (within the address range of the specified subnet) at
    which the file system may be mounted via the mount target.
    """
    network_interface_id: pulumi.Output[str]
    """
    The ID of the network interface that Amazon EFS created when it created the mount target.
    """
    security_groups: pulumi.Output[list]
    """
    A list of up to 5 VPC security group IDs (that must
    be for the same VPC as subnet specified) in effect for the mount target.
    """
    subnet_id: pulumi.Output[str]
    """
    The ID of the subnet to add the mount target in.
    """
    def __init__(__self__, resource_name, opts=None, file_system_id=None, ip_address=None, security_groups=None, subnet_id=None, __name__=None, __opts__=None):
        """
        Provides an Elastic File System (EFS) mount target.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] file_system_id: The ID of the file system for which the mount target is intended.
        :param pulumi.Input[str] ip_address: The address (within the address range of the specified subnet) at
               which the file system may be mounted via the mount target.
        :param pulumi.Input[list] security_groups: A list of up to 5 VPC security group IDs (that must
               be for the same VPC as subnet specified) in effect for the mount target.
        :param pulumi.Input[str] subnet_id: The ID of the subnet to add the mount target in.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/efs_mount_target.html.markdown.
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

        if file_system_id is None:
            raise TypeError("Missing required property 'file_system_id'")
        __props__['file_system_id'] = file_system_id

        __props__['ip_address'] = ip_address

        __props__['security_groups'] = security_groups

        if subnet_id is None:
            raise TypeError("Missing required property 'subnet_id'")
        __props__['subnet_id'] = subnet_id

        __props__['dns_name'] = None
        __props__['file_system_arn'] = None
        __props__['network_interface_id'] = None

        super(MountTarget, __self__).__init__(
            'aws:efs/mountTarget:MountTarget',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

