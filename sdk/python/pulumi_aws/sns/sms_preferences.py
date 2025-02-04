# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class SmsPreferences(pulumi.CustomResource):
    default_sender_id: pulumi.Output[str]
    """
    A string, such as your business brand, that is displayed as the sender on the receiving device.
    """
    default_sms_type: pulumi.Output[str]
    """
    The type of SMS message that you will send by default. Possible values are: Promotional, Transactional
    """
    delivery_status_iam_role_arn: pulumi.Output[str]
    """
    The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs.
    """
    delivery_status_success_sampling_rate: pulumi.Output[str]
    """
    The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value must be between 0 and 100.
    """
    monthly_spend_limit: pulumi.Output[str]
    """
    The maximum amount in USD that you are willing to spend each month to send SMS messages.
    """
    usage_report_s3_bucket: pulumi.Output[str]
    """
    The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS.
    """
    def __init__(__self__, resource_name, opts=None, default_sender_id=None, default_sms_type=None, delivery_status_iam_role_arn=None, delivery_status_success_sampling_rate=None, monthly_spend_limit=None, usage_report_s3_bucket=None, __name__=None, __opts__=None):
        """
        Provides a way to set SNS SMS preferences.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] default_sender_id: A string, such as your business brand, that is displayed as the sender on the receiving device.
        :param pulumi.Input[str] default_sms_type: The type of SMS message that you will send by default. Possible values are: Promotional, Transactional
        :param pulumi.Input[str] delivery_status_iam_role_arn: The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs.
        :param pulumi.Input[str] delivery_status_success_sampling_rate: The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value must be between 0 and 100.
        :param pulumi.Input[str] monthly_spend_limit: The maximum amount in USD that you are willing to spend each month to send SMS messages.
        :param pulumi.Input[str] usage_report_s3_bucket: The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/sns_sms_preferences.html.markdown.
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

        __props__['default_sender_id'] = default_sender_id

        __props__['default_sms_type'] = default_sms_type

        __props__['delivery_status_iam_role_arn'] = delivery_status_iam_role_arn

        __props__['delivery_status_success_sampling_rate'] = delivery_status_success_sampling_rate

        __props__['monthly_spend_limit'] = monthly_spend_limit

        __props__['usage_report_s3_bucket'] = usage_report_s3_bucket

        super(SmsPreferences, __self__).__init__(
            'aws:sns/smsPreferences:SmsPreferences',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

