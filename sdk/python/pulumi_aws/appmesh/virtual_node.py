# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class VirtualNode(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The ARN of the virtual node.
    """
    created_date: pulumi.Output[str]
    """
    The creation date of the virtual node.
    """
    last_updated_date: pulumi.Output[str]
    """
    The last update date of the virtual node.
    """
    mesh_name: pulumi.Output[str]
    """
    The name of the service mesh in which to create the virtual node.
    """
    name: pulumi.Output[str]
    """
    The name to use for the virtual node.
    """
    spec: pulumi.Output[dict]
    """
    The virtual node specification to apply.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, mesh_name=None, name=None, spec=None, tags=None, __name__=None, __opts__=None):
        """
        Create a VirtualNode resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] mesh_name: The name of the service mesh in which to create the virtual node.
        :param pulumi.Input[str] name: The name to use for the virtual node.
        :param pulumi.Input[dict] spec: The virtual node specification to apply.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/appmesh_virtual_node.html.markdown.
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

        if mesh_name is None:
            raise TypeError("Missing required property 'mesh_name'")
        __props__['mesh_name'] = mesh_name

        __props__['name'] = name

        if spec is None:
            raise TypeError("Missing required property 'spec'")
        __props__['spec'] = spec

        __props__['tags'] = tags

        __props__['arn'] = None
        __props__['created_date'] = None
        __props__['last_updated_date'] = None

        super(VirtualNode, __self__).__init__(
            'aws:appmesh/virtualNode:VirtualNode',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

