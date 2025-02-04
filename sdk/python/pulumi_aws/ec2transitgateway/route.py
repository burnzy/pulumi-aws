# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Route(pulumi.CustomResource):
    blackhole: pulumi.Output[bool]
    """
    Indicates whether to drop traffic that matches this route (default to `false`).
    """
    destination_cidr_block: pulumi.Output[str]
    """
    IPv4 CIDR range used for destination matches. Routing decisions are based on the most specific match.
    """
    transit_gateway_attachment_id: pulumi.Output[str]
    """
    Identifier of EC2 Transit Gateway Attachment (required if `blackhole` is set to false).
    """
    transit_gateway_route_table_id: pulumi.Output[str]
    """
    Identifier of EC2 Transit Gateway Route Table.
    """
    def __init__(__self__, resource_name, opts=None, blackhole=None, destination_cidr_block=None, transit_gateway_attachment_id=None, transit_gateway_route_table_id=None, __name__=None, __opts__=None):
        """
        Manages an EC2 Transit Gateway Route.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] blackhole: Indicates whether to drop traffic that matches this route (default to `false`).
        :param pulumi.Input[str] destination_cidr_block: IPv4 CIDR range used for destination matches. Routing decisions are based on the most specific match.
        :param pulumi.Input[str] transit_gateway_attachment_id: Identifier of EC2 Transit Gateway Attachment (required if `blackhole` is set to false).
        :param pulumi.Input[str] transit_gateway_route_table_id: Identifier of EC2 Transit Gateway Route Table.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/ec2_transit_gateway_route.html.markdown.
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

        __props__['blackhole'] = blackhole

        if destination_cidr_block is None:
            raise TypeError("Missing required property 'destination_cidr_block'")
        __props__['destination_cidr_block'] = destination_cidr_block

        __props__['transit_gateway_attachment_id'] = transit_gateway_attachment_id

        if transit_gateway_route_table_id is None:
            raise TypeError("Missing required property 'transit_gateway_route_table_id'")
        __props__['transit_gateway_route_table_id'] = transit_gateway_route_table_id

        super(Route, __self__).__init__(
            'aws:ec2transitgateway/route:Route',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

