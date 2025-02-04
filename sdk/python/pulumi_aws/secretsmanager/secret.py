# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Secret(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    Amazon Resource Name (ARN) of the secret.
    """
    description: pulumi.Output[str]
    """
    A description of the secret.
    """
    kms_key_id: pulumi.Output[str]
    """
    Specifies the ARN or alias of the AWS KMS customer master key (CMK) to be used to encrypt the secret values in the versions stored in this secret. If you don't specify this value, then Secrets Manager defaults to using the AWS account's default CMK (the one named `aws/secretsmanager`). If the default KMS CMK with that name doesn't yet exist, then AWS Secrets Manager creates it for you automatically the first time.
    """
    name: pulumi.Output[str]
    """
    Specifies the friendly name of the new secret. The secret name can consist of uppercase letters, lowercase letters, digits, and any of the following characters: `/_+=.@-` Conflicts with `name_prefix`.
    """
    name_prefix: pulumi.Output[str]
    """
    Creates a unique name beginning with the specified prefix. Conflicts with `name`.
    """
    policy: pulumi.Output[str]
    recovery_window_in_days: pulumi.Output[float]
    """
    Specifies the number of days that AWS Secrets Manager waits before it can delete the secret. This value can be `0` to force deletion without recovery or range from `7` to `30` days. The default value is `30`.
    """
    rotation_enabled: pulumi.Output[bool]
    """
    Specifies whether automatic rotation is enabled for this secret.
    """
    rotation_lambda_arn: pulumi.Output[str]
    """
    Specifies the ARN of the Lambda function that can rotate the secret.
    """
    rotation_rules: pulumi.Output[dict]
    """
    A structure that defines the rotation configuration for this secret. Defined below.
    """
    tags: pulumi.Output[dict]
    """
    Specifies a key-value map of user-defined tags that are attached to the secret.
    """
    def __init__(__self__, resource_name, opts=None, description=None, kms_key_id=None, name=None, name_prefix=None, policy=None, recovery_window_in_days=None, rotation_lambda_arn=None, rotation_rules=None, tags=None, __name__=None, __opts__=None):
        """
        Provides a resource to manage AWS Secrets Manager secret metadata. To manage a secret value, see the [`aws_secretsmanager_secret_version` resource](https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html).
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: A description of the secret.
        :param pulumi.Input[str] kms_key_id: Specifies the ARN or alias of the AWS KMS customer master key (CMK) to be used to encrypt the secret values in the versions stored in this secret. If you don't specify this value, then Secrets Manager defaults to using the AWS account's default CMK (the one named `aws/secretsmanager`). If the default KMS CMK with that name doesn't yet exist, then AWS Secrets Manager creates it for you automatically the first time.
        :param pulumi.Input[str] name: Specifies the friendly name of the new secret. The secret name can consist of uppercase letters, lowercase letters, digits, and any of the following characters: `/_+=.@-` Conflicts with `name_prefix`.
        :param pulumi.Input[str] name_prefix: Creates a unique name beginning with the specified prefix. Conflicts with `name`.
        :param pulumi.Input[float] recovery_window_in_days: Specifies the number of days that AWS Secrets Manager waits before it can delete the secret. This value can be `0` to force deletion without recovery or range from `7` to `30` days. The default value is `30`.
        :param pulumi.Input[str] rotation_lambda_arn: Specifies the ARN of the Lambda function that can rotate the secret.
        :param pulumi.Input[dict] rotation_rules: A structure that defines the rotation configuration for this secret. Defined below.
        :param pulumi.Input[dict] tags: Specifies a key-value map of user-defined tags that are attached to the secret.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/secretsmanager_secret.html.markdown.
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

        __props__['kms_key_id'] = kms_key_id

        __props__['name'] = name

        __props__['name_prefix'] = name_prefix

        __props__['policy'] = policy

        __props__['recovery_window_in_days'] = recovery_window_in_days

        __props__['rotation_lambda_arn'] = rotation_lambda_arn

        __props__['rotation_rules'] = rotation_rules

        __props__['tags'] = tags

        __props__['arn'] = None
        __props__['rotation_enabled'] = None

        super(Secret, __self__).__init__(
            'aws:secretsmanager/secret:Secret',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

