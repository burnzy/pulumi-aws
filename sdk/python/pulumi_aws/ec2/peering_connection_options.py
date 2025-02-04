# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class PeeringConnectionOptions(pulumi.CustomResource):
    accepter: pulumi.Output[dict]
    """
    An optional configuration block that allows for [VPC Peering Connection]
    (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that accepts
    the peering connection (a maximum of one).
    """
    requester: pulumi.Output[dict]
    """
    A optional configuration block that allows for [VPC Peering Connection]
    (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that requests
    the peering connection (a maximum of one).
    """
    vpc_peering_connection_id: pulumi.Output[str]
    """
    The ID of the requester VPC peering connection.
    """
    def __init__(__self__, resource_name, opts=None, accepter=None, requester=None, vpc_peering_connection_id=None, __name__=None, __opts__=None):
        """
        Create a PeeringConnectionOptions resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] accepter: An optional configuration block that allows for [VPC Peering Connection]
               (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that accepts
               the peering connection (a maximum of one).
        :param pulumi.Input[dict] requester: A optional configuration block that allows for [VPC Peering Connection]
               (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that requests
               the peering connection (a maximum of one).
        :param pulumi.Input[str] vpc_peering_connection_id: The ID of the requester VPC peering connection.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/vpc_peering_connection_options.html.markdown.
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

        __props__['accepter'] = accepter

        __props__['requester'] = requester

        if vpc_peering_connection_id is None:
            raise TypeError("Missing required property 'vpc_peering_connection_id'")
        __props__['vpc_peering_connection_id'] = vpc_peering_connection_id

        super(PeeringConnectionOptions, __self__).__init__(
            'aws:ec2/peeringConnectionOptions:PeeringConnectionOptions',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

