# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class NotebookInstance(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) assigned by AWS to this notebook instance.
    """
    instance_type: pulumi.Output[str]
    """
    The name of ML compute instance type.
    """
    kms_key_id: pulumi.Output[str]
    """
    The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
    """
    lifecycle_config_name: pulumi.Output[str]
    """
    The name of a lifecycle configuration to associate with the notebook instance.
    """
    name: pulumi.Output[str]
    """
    The name of the notebook instance (must be unique).
    """
    role_arn: pulumi.Output[str]
    """
    The ARN of the IAM role to be used by the notebook instance which allows SageMaker to call other services on your behalf.
    """
    security_groups: pulumi.Output[list]
    """
    The associated security groups.
    """
    subnet_id: pulumi.Output[str]
    """
    The VPC subnet ID.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, instance_type=None, kms_key_id=None, lifecycle_config_name=None, name=None, role_arn=None, security_groups=None, subnet_id=None, tags=None, __name__=None, __opts__=None):
        """
        Provides a Sagemaker Notebook Instance resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] instance_type: The name of ML compute instance type.
        :param pulumi.Input[str] kms_key_id: The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
        :param pulumi.Input[str] lifecycle_config_name: The name of a lifecycle configuration to associate with the notebook instance.
        :param pulumi.Input[str] name: The name of the notebook instance (must be unique).
        :param pulumi.Input[str] role_arn: The ARN of the IAM role to be used by the notebook instance which allows SageMaker to call other services on your behalf.
        :param pulumi.Input[list] security_groups: The associated security groups.
        :param pulumi.Input[str] subnet_id: The VPC subnet ID.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/sagemaker_notebook_instance.html.markdown.
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

        if instance_type is None:
            raise TypeError("Missing required property 'instance_type'")
        __props__['instance_type'] = instance_type

        __props__['kms_key_id'] = kms_key_id

        __props__['lifecycle_config_name'] = lifecycle_config_name

        __props__['name'] = name

        if role_arn is None:
            raise TypeError("Missing required property 'role_arn'")
        __props__['role_arn'] = role_arn

        __props__['security_groups'] = security_groups

        __props__['subnet_id'] = subnet_id

        __props__['tags'] = tags

        __props__['arn'] = None

        super(NotebookInstance, __self__).__init__(
            'aws:sagemaker/notebookInstance:NotebookInstance',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

