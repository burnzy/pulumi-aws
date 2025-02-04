# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Certificate(pulumi.CustomResource):
    certificate_arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) for the certificate.
    """
    certificate_id: pulumi.Output[str]
    """
    The certificate identifier.
    """
    certificate_pem: pulumi.Output[str]
    """
    The contents of the .pem X.509 certificate file for the certificate. Either `certificate_pem` or `certificate_wallet` must be set.
    """
    certificate_wallet: pulumi.Output[str]
    """
    The contents of the Oracle Wallet certificate for use with SSL. Either `certificate_pem` or `certificate_wallet` must be set.
    """
    def __init__(__self__, resource_name, opts=None, certificate_id=None, certificate_pem=None, certificate_wallet=None, __name__=None, __opts__=None):
        """
        Provides a DMS (Data Migration Service) certificate resource. DMS certificates can be created, deleted, and imported.
        
        > **Note:** All arguments including the PEM encoded certificate will be stored in the raw state as plain-text.
        [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] certificate_id: The certificate identifier.
        :param pulumi.Input[str] certificate_pem: The contents of the .pem X.509 certificate file for the certificate. Either `certificate_pem` or `certificate_wallet` must be set.
        :param pulumi.Input[str] certificate_wallet: The contents of the Oracle Wallet certificate for use with SSL. Either `certificate_pem` or `certificate_wallet` must be set.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/dms_certificate.html.markdown.
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

        if certificate_id is None:
            raise TypeError("Missing required property 'certificate_id'")
        __props__['certificate_id'] = certificate_id

        __props__['certificate_pem'] = certificate_pem

        __props__['certificate_wallet'] = certificate_wallet

        __props__['certificate_arn'] = None

        super(Certificate, __self__).__init__(
            'aws:dms/certificate:Certificate',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

