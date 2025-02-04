# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetProductResult:
    """
    A collection of values returned by getProduct.
    """
    def __init__(__self__, filters=None, result=None, service_code=None, id=None):
        if filters and not isinstance(filters, list):
            raise TypeError("Expected argument 'filters' to be a list")
        __self__.filters = filters
        if result and not isinstance(result, str):
            raise TypeError("Expected argument 'result' to be a str")
        __self__.result = result
        """
        Set to the product returned from the API.
        """
        if service_code and not isinstance(service_code, str):
            raise TypeError("Expected argument 'service_code' to be a str")
        __self__.service_code = service_code
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_product(filters=None,service_code=None,opts=None):
    """
    Use this data source to get the pricing information of all products in AWS.
    This data source is only available in a us-east-1 or ap-south-1 provider.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/pricing_product.html.markdown.
    """
    __args__ = dict()

    __args__['filters'] = filters
    __args__['serviceCode'] = service_code
    __ret__ = await pulumi.runtime.invoke('aws:pricing/getProduct:getProduct', __args__, opts=opts)

    return GetProductResult(
        filters=__ret__.get('filters'),
        result=__ret__.get('result'),
        service_code=__ret__.get('serviceCode'),
        id=__ret__.get('id'))
