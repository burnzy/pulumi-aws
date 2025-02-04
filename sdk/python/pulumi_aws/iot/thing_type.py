# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class ThingType(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The ARN of the created AWS IoT Thing Type.
    """
    deprecated: pulumi.Output[bool]
    """
    Whether the thing type is deprecated. If true, no new things could be associated with this type.
    """
    name: pulumi.Output[str]
    """
    The name of the thing type.
    """
    properties: pulumi.Output[dict]
    def __init__(__self__, resource_name, opts=None, deprecated=None, name=None, properties=None, __name__=None, __opts__=None):
        """
        Creates and manages an AWS IoT Thing Type.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] deprecated: Whether the thing type is deprecated. If true, no new things could be associated with this type.
        :param pulumi.Input[str] name: The name of the thing type.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/iot_thing_type.html.markdown.
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

        __props__['deprecated'] = deprecated

        __props__['name'] = name

        __props__['properties'] = properties

        __props__['arn'] = None

        super(ThingType, __self__).__init__(
            'aws:iot/thingType:ThingType',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

