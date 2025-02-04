# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Trigger(pulumi.CustomResource):
    configuration_id: pulumi.Output[str]
    repository_name: pulumi.Output[str]
    """
    The name for the repository. This needs to be less than 100 characters.
    """
    triggers: pulumi.Output[list]
    def __init__(__self__, resource_name, opts=None, repository_name=None, triggers=None, __name__=None, __opts__=None):
        """
        Provides a CodeCommit Trigger Resource.
        
        > **NOTE on CodeCommit**: The CodeCommit is not yet rolled out
        in all regions - available regions are listed
        [the AWS Docs](https://docs.aws.amazon.com/general/latest/gr/rande.html#codecommit_region).
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] repository_name: The name for the repository. This needs to be less than 100 characters.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/codecommit_trigger.html.markdown.
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

        if repository_name is None:
            raise TypeError("Missing required property 'repository_name'")
        __props__['repository_name'] = repository_name

        if triggers is None:
            raise TypeError("Missing required property 'triggers'")
        __props__['triggers'] = triggers

        __props__['configuration_id'] = None

        super(Trigger, __self__).__init__(
            'aws:codecommit/trigger:Trigger',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

