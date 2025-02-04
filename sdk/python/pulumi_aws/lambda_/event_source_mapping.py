# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class EventSourceMapping(pulumi.CustomResource):
    batch_size: pulumi.Output[float]
    """
    The largest number of records that Lambda will retrieve from your event source at the time of invocation. Defaults to `100` for DynamoDB and Kinesis, `10` for SQS.
    """
    enabled: pulumi.Output[bool]
    """
    Determines if the mapping will be enabled on creation. Defaults to `true`.
    """
    event_source_arn: pulumi.Output[str]
    """
    The event source ARN - can either be a Kinesis or DynamoDB stream.
    """
    function_arn: pulumi.Output[str]
    """
    The the ARN of the Lambda function the event source mapping is sending events to. (Note: this is a computed value that differs from `function_name` above.)
    """
    function_name: pulumi.Output[str]
    """
    The name or the ARN of the Lambda function that will be subscribing to events.
    """
    last_modified: pulumi.Output[str]
    """
    The date this resource was last modified.
    """
    last_processing_result: pulumi.Output[str]
    """
    The result of the last AWS Lambda invocation of your Lambda function.
    """
    starting_position: pulumi.Output[str]
    """
    The position in the stream where AWS Lambda should start reading. Must be one of `AT_TIMESTAMP` (Kinesis only), `LATEST` or `TRIM_HORIZON` if getting events from Kinesis or DynamoDB. Must not be provided if getting events from SQS. More information about these positions can be found in the [AWS DynamoDB Streams API Reference](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetShardIterator.html) and [AWS Kinesis API Reference](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType).
    """
    starting_position_timestamp: pulumi.Output[str]
    """
    A timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) of the data record which to start reading when using `starting_position` set to `AT_TIMESTAMP`. If a record with this exact timestamp does not exist, the next later record is chosen. If the timestamp is older than the current trim horizon, the oldest available record is chosen.
    """
    state: pulumi.Output[str]
    """
    The state of the event source mapping.
    """
    state_transition_reason: pulumi.Output[str]
    """
    The reason the event source mapping is in its current state.
    """
    uuid: pulumi.Output[str]
    """
    The UUID of the created event source mapping.
    """
    def __init__(__self__, resource_name, opts=None, batch_size=None, enabled=None, event_source_arn=None, function_name=None, starting_position=None, starting_position_timestamp=None, __name__=None, __opts__=None):
        """
        Provides a Lambda event source mapping. This allows Lambda functions to get events from Kinesis, DynamoDB and SQS.
        
        For information about Lambda and how to use it, see [What is AWS Lambda?][1].
        For information about event source mappings, see [CreateEventSourceMapping][2] in the API docs.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[float] batch_size: The largest number of records that Lambda will retrieve from your event source at the time of invocation. Defaults to `100` for DynamoDB and Kinesis, `10` for SQS.
        :param pulumi.Input[bool] enabled: Determines if the mapping will be enabled on creation. Defaults to `true`.
        :param pulumi.Input[str] event_source_arn: The event source ARN - can either be a Kinesis or DynamoDB stream.
        :param pulumi.Input[str] function_name: The name or the ARN of the Lambda function that will be subscribing to events.
        :param pulumi.Input[str] starting_position: The position in the stream where AWS Lambda should start reading. Must be one of `AT_TIMESTAMP` (Kinesis only), `LATEST` or `TRIM_HORIZON` if getting events from Kinesis or DynamoDB. Must not be provided if getting events from SQS. More information about these positions can be found in the [AWS DynamoDB Streams API Reference](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetShardIterator.html) and [AWS Kinesis API Reference](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType).
        :param pulumi.Input[str] starting_position_timestamp: A timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) of the data record which to start reading when using `starting_position` set to `AT_TIMESTAMP`. If a record with this exact timestamp does not exist, the next later record is chosen. If the timestamp is older than the current trim horizon, the oldest available record is chosen.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/lambda_event_source_mapping.html.markdown.
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

        __props__['batch_size'] = batch_size

        __props__['enabled'] = enabled

        if event_source_arn is None:
            raise TypeError("Missing required property 'event_source_arn'")
        __props__['event_source_arn'] = event_source_arn

        if function_name is None:
            raise TypeError("Missing required property 'function_name'")
        __props__['function_name'] = function_name

        __props__['starting_position'] = starting_position

        __props__['starting_position_timestamp'] = starting_position_timestamp

        __props__['function_arn'] = None
        __props__['last_modified'] = None
        __props__['last_processing_result'] = None
        __props__['state'] = None
        __props__['state_transition_reason'] = None
        __props__['uuid'] = None

        super(EventSourceMapping, __self__).__init__(
            'aws:lambda/eventSourceMapping:EventSourceMapping',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

