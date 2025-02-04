# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetInvocationResult:
    """
    A collection of values returned by getInvocation.
    """
    def __init__(__self__, function_name=None, input=None, qualifier=None, result=None, result_map=None, id=None):
        if function_name and not isinstance(function_name, str):
            raise TypeError("Expected argument 'function_name' to be a str")
        __self__.function_name = function_name
        if input and not isinstance(input, str):
            raise TypeError("Expected argument 'input' to be a str")
        __self__.input = input
        if qualifier and not isinstance(qualifier, str):
            raise TypeError("Expected argument 'qualifier' to be a str")
        __self__.qualifier = qualifier
        if result and not isinstance(result, str):
            raise TypeError("Expected argument 'result' to be a str")
        __self__.result = result
        """
        String result of the lambda function invocation.
        """
        if result_map and not isinstance(result_map, dict):
            raise TypeError("Expected argument 'result_map' to be a dict")
        __self__.result_map = result_map
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_invocation(function_name=None,input=None,qualifier=None,opts=None):
    """
    Use this data source to invoke custom lambda functions as data source.
    The lambda function is invoked with [RequestResponse](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_RequestSyntax)
    invocation type.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/lambda_invocation.html.markdown.
    """
    __args__ = dict()

    __args__['functionName'] = function_name
    __args__['input'] = input
    __args__['qualifier'] = qualifier
    __ret__ = await pulumi.runtime.invoke('aws:lambda/getInvocation:getInvocation', __args__, opts=opts)

    return GetInvocationResult(
        function_name=__ret__.get('functionName'),
        input=__ret__.get('input'),
        qualifier=__ret__.get('qualifier'),
        result=__ret__.get('result'),
        result_map=__ret__.get('resultMap'),
        id=__ret__.get('id'))
