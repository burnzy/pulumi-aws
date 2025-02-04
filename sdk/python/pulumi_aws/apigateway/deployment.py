# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Deployment(pulumi.CustomResource):
    created_date: pulumi.Output[str]
    """
    The creation date of the deployment
    """
    description: pulumi.Output[str]
    """
    The description of the deployment
    """
    execution_arn: pulumi.Output[str]
    """
    The execution ARN to be used in [`lambda_permission`](https://www.terraform.io/docs/providers/aws/r/lambda_permission.html)'s `source_arn`
    when allowing API Gateway to invoke a Lambda function,
    e.g. `arn:aws:execute-api:eu-west-2:123456789012:z4675bid1j/prod`
    """
    invoke_url: pulumi.Output[str]
    """
    The URL to invoke the API pointing to the stage,
    e.g. `https://z4675bid1j.execute-api.eu-west-2.amazonaws.com/prod`
    """
    rest_api: pulumi.Output[str]
    """
    The ID of the associated REST API
    """
    stage_description: pulumi.Output[str]
    """
    The description of the stage
    """
    stage_name: pulumi.Output[str]
    """
    The name of the stage. If the specified stage already exists, it will be updated to point to the new deployment. If the stage does not exist, a new one will be created and point to this deployment.
    """
    variables: pulumi.Output[dict]
    """
    A map that defines variables for the stage
    """
    def __init__(__self__, resource_name, opts=None, description=None, rest_api=None, stage_description=None, stage_name=None, variables=None, __name__=None, __opts__=None):
        """
        Provides an API Gateway Deployment.
        
        > **Note:** Depends on having `aws_api_gateway_integration` inside your rest api (which in turn depends on `aws_api_gateway_method`). To avoid race conditions
        you might need to add an explicit `depends_on = ["aws_api_gateway_integration.name"]`.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: The description of the deployment
        :param pulumi.Input[str] rest_api: The ID of the associated REST API
        :param pulumi.Input[str] stage_description: The description of the stage
        :param pulumi.Input[str] stage_name: The name of the stage. If the specified stage already exists, it will be updated to point to the new deployment. If the stage does not exist, a new one will be created and point to this deployment.
        :param pulumi.Input[dict] variables: A map that defines variables for the stage

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/api_gateway_deployment.html.markdown.
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

        __props__['description'] = description

        if rest_api is None:
            raise TypeError("Missing required property 'rest_api'")
        __props__['rest_api'] = rest_api

        __props__['stage_description'] = stage_description

        __props__['stage_name'] = stage_name

        __props__['variables'] = variables

        __props__['created_date'] = None
        __props__['execution_arn'] = None
        __props__['invoke_url'] = None

        super(Deployment, __self__).__init__(
            'aws:apigateway/deployment:Deployment',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

