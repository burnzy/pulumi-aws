# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetContainerDefinitionResult:
    """
    A collection of values returned by getContainerDefinition.
    """
    def __init__(__self__, container_name=None, cpu=None, disable_networking=None, docker_labels=None, environment=None, image=None, image_digest=None, memory=None, memory_reservation=None, task_definition=None, id=None):
        if container_name and not isinstance(container_name, str):
            raise TypeError("Expected argument 'container_name' to be a str")
        __self__.container_name = container_name
        if cpu and not isinstance(cpu, float):
            raise TypeError("Expected argument 'cpu' to be a float")
        __self__.cpu = cpu
        """
        The CPU limit for this container definition
        """
        if disable_networking and not isinstance(disable_networking, bool):
            raise TypeError("Expected argument 'disable_networking' to be a bool")
        __self__.disable_networking = disable_networking
        """
        Indicator if networking is disabled
        """
        if docker_labels and not isinstance(docker_labels, dict):
            raise TypeError("Expected argument 'docker_labels' to be a dict")
        __self__.docker_labels = docker_labels
        """
        Set docker labels
        """
        if environment and not isinstance(environment, dict):
            raise TypeError("Expected argument 'environment' to be a dict")
        __self__.environment = environment
        """
        The environment in use
        """
        if image and not isinstance(image, str):
            raise TypeError("Expected argument 'image' to be a str")
        __self__.image = image
        """
        The docker image in use, including the digest
        """
        if image_digest and not isinstance(image_digest, str):
            raise TypeError("Expected argument 'image_digest' to be a str")
        __self__.image_digest = image_digest
        """
        The digest of the docker image in use
        """
        if memory and not isinstance(memory, float):
            raise TypeError("Expected argument 'memory' to be a float")
        __self__.memory = memory
        """
        The memory limit for this container definition
        """
        if memory_reservation and not isinstance(memory_reservation, float):
            raise TypeError("Expected argument 'memory_reservation' to be a float")
        __self__.memory_reservation = memory_reservation
        """
        The soft limit (in MiB) of memory to reserve for the container. When system memory is under contention, Docker attempts to keep the container memory to this soft limit
        """
        if task_definition and not isinstance(task_definition, str):
            raise TypeError("Expected argument 'task_definition' to be a str")
        __self__.task_definition = task_definition
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_container_definition(container_name=None,task_definition=None,opts=None):
    """
    The ECS container definition data source allows access to details of
    a specific container within an AWS ECS service.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/ecs_container_definition.html.markdown.
    """
    __args__ = dict()

    __args__['containerName'] = container_name
    __args__['taskDefinition'] = task_definition
    __ret__ = await pulumi.runtime.invoke('aws:ecs/getContainerDefinition:getContainerDefinition', __args__, opts=opts)

    return GetContainerDefinitionResult(
        container_name=__ret__.get('containerName'),
        cpu=__ret__.get('cpu'),
        disable_networking=__ret__.get('disableNetworking'),
        docker_labels=__ret__.get('dockerLabels'),
        environment=__ret__.get('environment'),
        image=__ret__.get('image'),
        image_digest=__ret__.get('imageDigest'),
        memory=__ret__.get('memory'),
        memory_reservation=__ret__.get('memoryReservation'),
        task_definition=__ret__.get('taskDefinition'),
        id=__ret__.get('id'))
