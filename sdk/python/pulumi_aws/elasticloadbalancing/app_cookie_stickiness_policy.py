# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class AppCookieStickinessPolicy(pulumi.CustomResource):
    cookie_name: pulumi.Output[str]
    """
    The application cookie whose lifetime the ELB's cookie should follow.
    """
    lb_port: pulumi.Output[float]
    """
    The load balancer port to which the policy
    should be applied. This must be an active listener on the load
    balancer.
    """
    load_balancer: pulumi.Output[str]
    """
    The name of load balancer to which the policy
    should be attached.
    """
    name: pulumi.Output[str]
    """
    The name of the stickiness policy.
    """
    def __init__(__self__, resource_name, opts=None, cookie_name=None, lb_port=None, load_balancer=None, name=None, __name__=None, __opts__=None):
        """
        Provides an application cookie stickiness policy, which allows an ELB to wed its sticky cookie's expiration to a cookie generated by your application.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] cookie_name: The application cookie whose lifetime the ELB's cookie should follow.
        :param pulumi.Input[float] lb_port: The load balancer port to which the policy
               should be applied. This must be an active listener on the load
               balancer.
        :param pulumi.Input[str] load_balancer: The name of load balancer to which the policy
               should be attached.
        :param pulumi.Input[str] name: The name of the stickiness policy.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/app_cookie_stickiness_policy_legacy.html.markdown.
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

        if cookie_name is None:
            raise TypeError("Missing required property 'cookie_name'")
        __props__['cookie_name'] = cookie_name

        if lb_port is None:
            raise TypeError("Missing required property 'lb_port'")
        __props__['lb_port'] = lb_port

        if load_balancer is None:
            raise TypeError("Missing required property 'load_balancer'")
        __props__['load_balancer'] = load_balancer

        __props__['name'] = name

        super(AppCookieStickinessPolicy, __self__).__init__(
            'aws:elasticloadbalancing/appCookieStickinessPolicy:AppCookieStickinessPolicy',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

