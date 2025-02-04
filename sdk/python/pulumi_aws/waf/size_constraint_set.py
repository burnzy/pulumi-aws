# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class SizeConstraintSet(pulumi.CustomResource):
    name: pulumi.Output[str]
    """
    The name or description of the Size Constraint Set.
    """
    size_constraints: pulumi.Output[list]
    """
    Specifies the parts of web requests that you want to inspect the size of.
    """
    def __init__(__self__, resource_name, opts=None, name=None, size_constraints=None, __name__=None, __opts__=None):
        """
        Provides a WAF Size Constraint Set Resource
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: The name or description of the Size Constraint Set.
        :param pulumi.Input[list] size_constraints: Specifies the parts of web requests that you want to inspect the size of.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/waf_size_constraint_set.html.markdown.
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

        __props__['size_constraints'] = size_constraints

        super(SizeConstraintSet, __self__).__init__(
            'aws:waf/sizeConstraintSet:SizeConstraintSet',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

