# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class SecurityGroup(pulumi.CustomResource):
    description: pulumi.Output[str]
    name: pulumi.Output[str]
    """
    Name for the cache security group. This value is stored as a lowercase string.
    """
    security_group_names: pulumi.Output[list]
    """
    List of EC2 security group names to be
    authorized for ingress to the cache security group
    """
    def __init__(__self__, resource_name, opts=None, description=None, name=None, security_group_names=None, __name__=None, __opts__=None):
        """
        Provides an ElastiCache Security Group to control access to one or more cache
        clusters.
        
        > **NOTE:** ElastiCache Security Groups are for use only when working with an
        ElastiCache cluster **outside** of a VPC. If you are using a VPC, see the
        ElastiCache Subnet Group resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: Name for the cache security group. This value is stored as a lowercase string.
        :param pulumi.Input[list] security_group_names: List of EC2 security group names to be
               authorized for ingress to the cache security group

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/elasticache_security_group.html.markdown.
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

        if description is None:
            description = 'Managed by Pulumi'
        __props__['description'] = description

        __props__['name'] = name

        if security_group_names is None:
            raise TypeError("Missing required property 'security_group_names'")
        __props__['security_group_names'] = security_group_names

        super(SecurityGroup, __self__).__init__(
            'aws:elasticache/securityGroup:SecurityGroup',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

