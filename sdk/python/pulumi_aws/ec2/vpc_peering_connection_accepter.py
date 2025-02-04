# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class VpcPeeringConnectionAccepter(pulumi.CustomResource):
    accept_status: pulumi.Output[str]
    """
    The status of the VPC Peering Connection request.
    """
    accepter: pulumi.Output[dict]
    """
    A configuration block that describes [VPC Peering Connection]
    (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options set for the accepter VPC.
    """
    auto_accept: pulumi.Output[bool]
    """
    Whether or not to accept the peering request. Defaults to `false`.
    """
    peer_owner_id: pulumi.Output[str]
    """
    The AWS account ID of the owner of the requester VPC.
    """
    peer_region: pulumi.Output[str]
    """
    The region of the accepter VPC.
    """
    peer_vpc_id: pulumi.Output[str]
    """
    The ID of the requester VPC.
    """
    requester: pulumi.Output[dict]
    """
    A configuration block that describes [VPC Peering Connection]
    (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options set for the requester VPC.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    vpc_id: pulumi.Output[str]
    """
    The ID of the accepter VPC.
    """
    vpc_peering_connection_id: pulumi.Output[str]
    """
    The VPC Peering Connection ID to manage.
    """
    def __init__(__self__, resource_name, opts=None, accepter=None, auto_accept=None, requester=None, tags=None, vpc_peering_connection_id=None, __name__=None, __opts__=None):
        """
        Provides a resource to manage the accepter's side of a VPC Peering Connection.
        
        When a cross-account (requester's AWS account differs from the accepter's AWS account) or an inter-region
        VPC Peering Connection is created, a VPC Peering Connection resource is automatically created in the
        accepter's account.
        The requester can use the `aws_vpc_peering_connection` resource to manage its side of the connection
        and the accepter can use the `aws_vpc_peering_connection_accepter` resource to "adopt" its side of the
        connection into management.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] accepter: A configuration block that describes [VPC Peering Connection]
               (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options set for the accepter VPC.
        :param pulumi.Input[bool] auto_accept: Whether or not to accept the peering request. Defaults to `false`.
        :param pulumi.Input[dict] requester: A configuration block that describes [VPC Peering Connection]
               (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options set for the requester VPC.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] vpc_peering_connection_id: The VPC Peering Connection ID to manage.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/vpc_peering_connection_accepter.html.markdown.
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

        __props__['auto_accept'] = auto_accept

        __props__['requester'] = requester

        __props__['tags'] = tags

        if vpc_peering_connection_id is None:
            raise TypeError("Missing required property 'vpc_peering_connection_id'")
        __props__['vpc_peering_connection_id'] = vpc_peering_connection_id

        __props__['accept_status'] = None
        __props__['peer_owner_id'] = None
        __props__['peer_region'] = None
        __props__['peer_vpc_id'] = None
        __props__['vpc_id'] = None

        super(VpcPeeringConnectionAccepter, __self__).__init__(
            'aws:ec2/vpcPeeringConnectionAccepter:VpcPeeringConnectionAccepter',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

