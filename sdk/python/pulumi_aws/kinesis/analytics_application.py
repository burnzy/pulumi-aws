# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class AnalyticsApplication(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The ARN of the Kinesis Analytics Appliation.
    """
    cloudwatch_logging_options: pulumi.Output[dict]
    """
    The CloudWatch log stream options to monitor application errors.
    See CloudWatch Logging Options below for more details.
    """
    code: pulumi.Output[str]
    """
    SQL Code to transform input data, and generate output.
    """
    create_timestamp: pulumi.Output[str]
    """
    The Timestamp when the application version was created.
    """
    description: pulumi.Output[str]
    """
    Description of the application.
    """
    inputs: pulumi.Output[dict]
    """
    Input configuration of the application. See Inputs below for more details.
    """
    last_update_timestamp: pulumi.Output[str]
    """
    The Timestamp when the application was last updated.
    """
    name: pulumi.Output[str]
    """
    Name of the Kinesis Analytics Application.
    """
    outputs: pulumi.Output[list]
    """
    Output destination configuration of the application. See Outputs below for more details.
    """
    reference_data_sources: pulumi.Output[dict]
    """
    An S3 Reference Data Source for the application.
    See Reference Data Sources below for more details.
    """
    status: pulumi.Output[str]
    """
    The Status of the application.
    """
    tags: pulumi.Output[dict]
    """
    Key-value mapping of tags for the Kinesis Analytics Application.
    """
    version: pulumi.Output[float]
    """
    The Version of the application.
    """
    def __init__(__self__, resource_name, opts=None, cloudwatch_logging_options=None, code=None, description=None, inputs=None, name=None, outputs=None, reference_data_sources=None, tags=None, __name__=None, __opts__=None):
        """
        Provides a Kinesis Analytics Application resource. Kinesis Analytics is a managed service that
        allows processing and analyzing streaming data using standard SQL.
        
        For more details, see the [Amazon Kinesis Analytics Documentation][1].
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] cloudwatch_logging_options: The CloudWatch log stream options to monitor application errors.
               See CloudWatch Logging Options below for more details.
        :param pulumi.Input[str] code: SQL Code to transform input data, and generate output.
        :param pulumi.Input[str] description: Description of the application.
        :param pulumi.Input[dict] inputs: Input configuration of the application. See Inputs below for more details.
        :param pulumi.Input[str] name: Name of the Kinesis Analytics Application.
        :param pulumi.Input[list] outputs: Output destination configuration of the application. See Outputs below for more details.
        :param pulumi.Input[dict] reference_data_sources: An S3 Reference Data Source for the application.
               See Reference Data Sources below for more details.
        :param pulumi.Input[dict] tags: Key-value mapping of tags for the Kinesis Analytics Application.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/kinesis_analytics_application.html.markdown.
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

        __props__['cloudwatch_logging_options'] = cloudwatch_logging_options

        __props__['code'] = code

        __props__['description'] = description

        __props__['inputs'] = inputs

        __props__['name'] = name

        __props__['outputs'] = outputs

        __props__['reference_data_sources'] = reference_data_sources

        __props__['tags'] = tags

        __props__['arn'] = None
        __props__['create_timestamp'] = None
        __props__['last_update_timestamp'] = None
        __props__['status'] = None
        __props__['version'] = None

        super(AnalyticsApplication, __self__).__init__(
            'aws:kinesis/analyticsApplication:AnalyticsApplication',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

