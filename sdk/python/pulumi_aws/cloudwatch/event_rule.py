# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class EventRule(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) of the rule.
    """
    description: pulumi.Output[str]
    """
    The description of the rule.
    """
    event_pattern: pulumi.Output[str]
    """
    Event pattern
    described a JSON object.
    See full documentation of [CloudWatch Events and Event Patterns](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CloudWatchEventsandEventPatterns.html) for details.
    """
    is_enabled: pulumi.Output[bool]
    """
    Whether the rule should be enabled (defaults to `true`).
    """
    name: pulumi.Output[str]
    name_prefix: pulumi.Output[str]
    """
    The rule's name. Conflicts with `name`.
    """
    role_arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) associated with the role that is used for target invocation.
    """
    schedule_expression: pulumi.Output[str]
    """
    The scheduling expression.
    For example, `cron(0 20 * * ? *)` or `rate(5 minutes)`.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, description=None, event_pattern=None, is_enabled=None, name=None, name_prefix=None, role_arn=None, schedule_expression=None, tags=None, __name__=None, __opts__=None):
        """
        Provides a CloudWatch Event Rule resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: The description of the rule.
        :param pulumi.Input[str] event_pattern: Event pattern
               described a JSON object.
               See full documentation of [CloudWatch Events and Event Patterns](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CloudWatchEventsandEventPatterns.html) for details.
        :param pulumi.Input[bool] is_enabled: Whether the rule should be enabled (defaults to `true`).
        :param pulumi.Input[str] name_prefix: The rule's name. Conflicts with `name`.
        :param pulumi.Input[str] role_arn: The Amazon Resource Name (ARN) associated with the role that is used for target invocation.
        :param pulumi.Input[str] schedule_expression: The scheduling expression.
               For example, `cron(0 20 * * ? *)` or `rate(5 minutes)`.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/cloudwatch_event_rule.html.markdown.
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

        __props__['event_pattern'] = event_pattern

        __props__['is_enabled'] = is_enabled

        __props__['name'] = name

        __props__['name_prefix'] = name_prefix

        __props__['role_arn'] = role_arn

        __props__['schedule_expression'] = schedule_expression

        __props__['tags'] = tags

        __props__['arn'] = None

        super(EventRule, __self__).__init__(
            'aws:cloudwatch/eventRule:EventRule',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

