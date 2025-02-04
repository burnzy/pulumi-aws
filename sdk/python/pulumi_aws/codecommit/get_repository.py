# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetRepositoryResult:
    """
    A collection of values returned by getRepository.
    """
    def __init__(__self__, arn=None, clone_url_http=None, clone_url_ssh=None, repository_id=None, repository_name=None, id=None):
        if arn and not isinstance(arn, str):
            raise TypeError("Expected argument 'arn' to be a str")
        __self__.arn = arn
        """
        The ARN of the repository
        """
        if clone_url_http and not isinstance(clone_url_http, str):
            raise TypeError("Expected argument 'clone_url_http' to be a str")
        __self__.clone_url_http = clone_url_http
        """
        The URL to use for cloning the repository over HTTPS.
        """
        if clone_url_ssh and not isinstance(clone_url_ssh, str):
            raise TypeError("Expected argument 'clone_url_ssh' to be a str")
        __self__.clone_url_ssh = clone_url_ssh
        """
        The URL to use for cloning the repository over SSH.
        """
        if repository_id and not isinstance(repository_id, str):
            raise TypeError("Expected argument 'repository_id' to be a str")
        __self__.repository_id = repository_id
        """
        The ID of the repository
        """
        if repository_name and not isinstance(repository_name, str):
            raise TypeError("Expected argument 'repository_name' to be a str")
        __self__.repository_name = repository_name
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_repository(repository_name=None,opts=None):
    """
    The CodeCommit Repository data source allows the ARN, Repository ID, Repository URL for HTTP and Repository URL for SSH to be retrieved for an CodeCommit repository.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/codecommit_repository.html.markdown.
    """
    __args__ = dict()

    __args__['repositoryName'] = repository_name
    __ret__ = await pulumi.runtime.invoke('aws:codecommit/getRepository:getRepository', __args__, opts=opts)

    return GetRepositoryResult(
        arn=__ret__.get('arn'),
        clone_url_http=__ret__.get('cloneUrlHttp'),
        clone_url_ssh=__ret__.get('cloneUrlSsh'),
        repository_id=__ret__.get('repositoryId'),
        repository_name=__ret__.get('repositoryName'),
        id=__ret__.get('id'))
