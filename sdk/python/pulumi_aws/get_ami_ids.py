# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class GetAmiIdsResult:
    """
    A collection of values returned by getAmiIds.
    """
    def __init__(__self__, executable_users=None, filters=None, ids=None, name_regex=None, owners=None, sort_ascending=None, id=None):
        if executable_users and not isinstance(executable_users, list):
            raise TypeError("Expected argument 'executable_users' to be a list")
        __self__.executable_users = executable_users
        if filters and not isinstance(filters, list):
            raise TypeError("Expected argument 'filters' to be a list")
        __self__.filters = filters
        if ids and not isinstance(ids, list):
            raise TypeError("Expected argument 'ids' to be a list")
        __self__.ids = ids
        if name_regex and not isinstance(name_regex, str):
            raise TypeError("Expected argument 'name_regex' to be a str")
        __self__.name_regex = name_regex
        if owners and not isinstance(owners, list):
            raise TypeError("Expected argument 'owners' to be a list")
        __self__.owners = owners
        if sort_ascending and not isinstance(sort_ascending, bool):
            raise TypeError("Expected argument 'sort_ascending' to be a bool")
        __self__.sort_ascending = sort_ascending
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_ami_ids(executable_users=None,filters=None,name_regex=None,owners=None,sort_ascending=None,opts=None):
    """
    Use this data source to get a list of AMI IDs matching the specified criteria.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/ami_ids.html.markdown.
    """
    __args__ = dict()

    __args__['executableUsers'] = executable_users
    __args__['filters'] = filters
    __args__['nameRegex'] = name_regex
    __args__['owners'] = owners
    __args__['sortAscending'] = sort_ascending
    __ret__ = await pulumi.runtime.invoke('aws:index/getAmiIds:getAmiIds', __args__, opts=opts)

    return GetAmiIdsResult(
        executable_users=__ret__.get('executableUsers'),
        filters=__ret__.get('filters'),
        ids=__ret__.get('ids'),
        name_regex=__ret__.get('nameRegex'),
        owners=__ret__.get('owners'),
        sort_ascending=__ret__.get('sortAscending'),
        id=__ret__.get('id'))
