# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetVpcPeeringConnectionResult:
    """
    A collection of values returned by getVpcPeeringConnection.
    """
    def __init__(__self__, accepter=None, cidr_block=None, filters=None, id=None, owner_id=None, peer_cidr_block=None, peer_owner_id=None, peer_region=None, peer_vpc_id=None, region=None, requester=None, status=None, tags=None, vpc_id=None):
        if accepter and not isinstance(accepter, dict):
            raise TypeError("Expected argument 'accepter' to be a dict")
        __self__.accepter = accepter
        """
        A configuration block that describes [VPC Peering Connection]
        (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options set for the accepter VPC.
        """
        if cidr_block and not isinstance(cidr_block, str):
            raise TypeError("Expected argument 'cidr_block' to be a str")
        __self__.cidr_block = cidr_block
        if filters and not isinstance(filters, list):
            raise TypeError("Expected argument 'filters' to be a list")
        __self__.filters = filters
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        if owner_id and not isinstance(owner_id, str):
            raise TypeError("Expected argument 'owner_id' to be a str")
        __self__.owner_id = owner_id
        if peer_cidr_block and not isinstance(peer_cidr_block, str):
            raise TypeError("Expected argument 'peer_cidr_block' to be a str")
        __self__.peer_cidr_block = peer_cidr_block
        if peer_owner_id and not isinstance(peer_owner_id, str):
            raise TypeError("Expected argument 'peer_owner_id' to be a str")
        __self__.peer_owner_id = peer_owner_id
        if peer_region and not isinstance(peer_region, str):
            raise TypeError("Expected argument 'peer_region' to be a str")
        __self__.peer_region = peer_region
        if peer_vpc_id and not isinstance(peer_vpc_id, str):
            raise TypeError("Expected argument 'peer_vpc_id' to be a str")
        __self__.peer_vpc_id = peer_vpc_id
        if region and not isinstance(region, str):
            raise TypeError("Expected argument 'region' to be a str")
        __self__.region = region
        if requester and not isinstance(requester, dict):
            raise TypeError("Expected argument 'requester' to be a dict")
        __self__.requester = requester
        """
        A configuration block that describes [VPC Peering Connection]
        (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options set for the requester VPC.
        """
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        __self__.status = status
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        if vpc_id and not isinstance(vpc_id, str):
            raise TypeError("Expected argument 'vpc_id' to be a str")
        __self__.vpc_id = vpc_id

async def get_vpc_peering_connection(cidr_block=None,filters=None,id=None,owner_id=None,peer_cidr_block=None,peer_owner_id=None,peer_region=None,peer_vpc_id=None,region=None,status=None,tags=None,vpc_id=None,opts=None):
    """
    The VPC Peering Connection data source provides details about
    a specific VPC peering connection.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/vpc_peering_connection.html.markdown.
    """
    __args__ = dict()

    __args__['cidrBlock'] = cidr_block
    __args__['filters'] = filters
    __args__['id'] = id
    __args__['ownerId'] = owner_id
    __args__['peerCidrBlock'] = peer_cidr_block
    __args__['peerOwnerId'] = peer_owner_id
    __args__['peerRegion'] = peer_region
    __args__['peerVpcId'] = peer_vpc_id
    __args__['region'] = region
    __args__['status'] = status
    __args__['tags'] = tags
    __args__['vpcId'] = vpc_id
    __ret__ = await pulumi.runtime.invoke('aws:ec2/getVpcPeeringConnection:getVpcPeeringConnection', __args__, opts=opts)

    return GetVpcPeeringConnectionResult(
        accepter=__ret__.get('accepter'),
        cidr_block=__ret__.get('cidrBlock'),
        filters=__ret__.get('filters'),
        id=__ret__.get('id'),
        owner_id=__ret__.get('ownerId'),
        peer_cidr_block=__ret__.get('peerCidrBlock'),
        peer_owner_id=__ret__.get('peerOwnerId'),
        peer_region=__ret__.get('peerRegion'),
        peer_vpc_id=__ret__.get('peerVpcId'),
        region=__ret__.get('region'),
        requester=__ret__.get('requester'),
        status=__ret__.get('status'),
        tags=__ret__.get('tags'),
        vpc_id=__ret__.get('vpcId'))
