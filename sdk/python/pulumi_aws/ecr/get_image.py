# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetImageResult:
    """
    A collection of values returned by getImage.
    """
    def __init__(__self__, image_digest=None, image_pushed_at=None, image_size_in_bytes=None, image_tag=None, image_tags=None, registry_id=None, repository_name=None, id=None):
        if image_digest and not isinstance(image_digest, str):
            raise TypeError("Expected argument 'image_digest' to be a str")
        __self__.image_digest = image_digest
        if image_pushed_at and not isinstance(image_pushed_at, float):
            raise TypeError("Expected argument 'image_pushed_at' to be a float")
        __self__.image_pushed_at = image_pushed_at
        """
        The date and time, expressed as a unix timestamp, at which the current image was pushed to the repository.
        """
        if image_size_in_bytes and not isinstance(image_size_in_bytes, float):
            raise TypeError("Expected argument 'image_size_in_bytes' to be a float")
        __self__.image_size_in_bytes = image_size_in_bytes
        """
        The size, in bytes, of the image in the repository.
        """
        if image_tag and not isinstance(image_tag, str):
            raise TypeError("Expected argument 'image_tag' to be a str")
        __self__.image_tag = image_tag
        if image_tags and not isinstance(image_tags, list):
            raise TypeError("Expected argument 'image_tags' to be a list")
        __self__.image_tags = image_tags
        """
        The list of tags associated with this image.
        """
        if registry_id and not isinstance(registry_id, str):
            raise TypeError("Expected argument 'registry_id' to be a str")
        __self__.registry_id = registry_id
        if repository_name and not isinstance(repository_name, str):
            raise TypeError("Expected argument 'repository_name' to be a str")
        __self__.repository_name = repository_name
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_image(image_digest=None,image_tag=None,registry_id=None,repository_name=None,opts=None):
    """
    The ECR Image data source allows the details of an image with a particular tag or digest to be retrieved.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/ecr_image.html.markdown.
    """
    __args__ = dict()

    __args__['imageDigest'] = image_digest
    __args__['imageTag'] = image_tag
    __args__['registryId'] = registry_id
    __args__['repositoryName'] = repository_name
    __ret__ = await pulumi.runtime.invoke('aws:ecr/getImage:getImage', __args__, opts=opts)

    return GetImageResult(
        image_digest=__ret__.get('imageDigest'),
        image_pushed_at=__ret__.get('imagePushedAt'),
        image_size_in_bytes=__ret__.get('imageSizeInBytes'),
        image_tag=__ret__.get('imageTag'),
        image_tags=__ret__.get('imageTags'),
        registry_id=__ret__.get('registryId'),
        repository_name=__ret__.get('repositoryName'),
        id=__ret__.get('id'))
