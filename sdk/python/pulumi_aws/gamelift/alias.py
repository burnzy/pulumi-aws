# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Alias(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    Alias ARN.
    """
    description: pulumi.Output[str]
    """
    Description of the alias.
    """
    name: pulumi.Output[str]
    """
    Name of the alias.
    """
    routing_strategy: pulumi.Output[dict]
    """
    Specifies the fleet and/or routing type to use for the alias.
    """
    def __init__(__self__, resource_name, opts=None, description=None, name=None, routing_strategy=None, __name__=None, __opts__=None):
        """
        Provides a Gamelift Alias resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: Description of the alias.
        :param pulumi.Input[str] name: Name of the alias.
        :param pulumi.Input[dict] routing_strategy: Specifies the fleet and/or routing type to use for the alias.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/gamelift_alias.html.markdown.
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

        __props__['name'] = name

        if routing_strategy is None:
            raise TypeError("Missing required property 'routing_strategy'")
        __props__['routing_strategy'] = routing_strategy

        __props__['arn'] = None

        super(Alias, __self__).__init__(
            'aws:gamelift/alias:Alias',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

