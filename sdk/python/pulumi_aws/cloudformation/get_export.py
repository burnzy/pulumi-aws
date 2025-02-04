# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetExportResult:
    """
    A collection of values returned by getExport.
    """
    def __init__(__self__, exporting_stack_id=None, name=None, value=None, id=None):
        if exporting_stack_id and not isinstance(exporting_stack_id, str):
            raise TypeError("Expected argument 'exporting_stack_id' to be a str")
        __self__.exporting_stack_id = exporting_stack_id
        """
        The exporting_stack_id (AWS ARNs) equivalent `ExportingStackId` from [list-exports](http://docs.aws.amazon.com/cli/latest/reference/cloudformation/list-exports.html) 
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if value and not isinstance(value, str):
            raise TypeError("Expected argument 'value' to be a str")
        __self__.value = value
        """
        The value from Cloudformation export identified by the export name found from [list-exports](http://docs.aws.amazon.com/cli/latest/reference/cloudformation/list-exports.html)
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_export(name=None,opts=None):
    """
    > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/cloudformation_export.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __ret__ = await pulumi.runtime.invoke('aws:cloudformation/getExport:getExport', __args__, opts=opts)

    return GetExportResult(
        exporting_stack_id=__ret__.get('exportingStackId'),
        name=__ret__.get('name'),
        value=__ret__.get('value'),
        id=__ret__.get('id'))
