# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Protection(pulumi.CustomResource):
    name: pulumi.Output[str]
    """
    A friendly name for the Protection you are creating.
    """
    resource_arn: pulumi.Output[str]
    """
    The ARN (Amazon Resource Name) of the resource to be protected.
    """
    def __init__(__self__, resource_name, opts=None, name=None, resource_arn=None, __name__=None, __opts__=None):
        """
        Enables AWS Shield Advanced for a specific AWS resource.
        The resource can be an Amazon CloudFront distribution, Elastic Load Balancing load balancer, AWS Global Accelerator accelerator, Elastic IP Address, or an Amazon Route 53 hosted zone.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: A friendly name for the Protection you are creating.
        :param pulumi.Input[str] resource_arn: The ARN (Amazon Resource Name) of the resource to be protected.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/shield_protection.html.markdown.
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

        __props__['name'] = name

        if resource_arn is None:
            raise TypeError("Missing required property 'resource_arn'")
        __props__['resource_arn'] = resource_arn

        super(Protection, __self__).__init__(
            'aws:shield/protection:Protection',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

