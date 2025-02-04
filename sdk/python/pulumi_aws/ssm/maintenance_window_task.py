# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class MaintenanceWindowTask(pulumi.CustomResource):
    description: pulumi.Output[str]
    """
    The description of the maintenance window task.
    """
    logging_info: pulumi.Output[dict]
    """
    A structure containing information about an Amazon S3 bucket to write instance-level logs to. Use `task_invocation_parameters` configuration block `run_command_parameters` configuration block `output_s3_*` arguments instead. Conflicts with `task_invocation_parameters`. Documented below.
    """
    max_concurrency: pulumi.Output[str]
    """
    The maximum number of targets this task can be run for in parallel.
    """
    max_errors: pulumi.Output[str]
    """
    The maximum number of errors allowed before this task stops being scheduled.
    """
    name: pulumi.Output[str]
    """
    The parameter name.
    """
    priority: pulumi.Output[float]
    """
    The priority of the task in the Maintenance Window, the lower the number the higher the priority. Tasks in a Maintenance Window are scheduled in priority order with tasks that have the same priority scheduled in parallel.
    """
    service_role_arn: pulumi.Output[str]
    """
    The IAM service role to assume during task execution.
    """
    targets: pulumi.Output[list]
    """
    The targets (either instances or window target ids). Instances are specified using Key=InstanceIds,Values=instanceid1,instanceid2. Window target ids are specified using Key=WindowTargetIds,Values=window target id1, window target id2.
    """
    task_arn: pulumi.Output[str]
    """
    The ARN of the task to execute.
    """
    task_invocation_parameters: pulumi.Output[dict]
    """
    The parameters for task execution. This argument is conflict with `task_parameters` and `logging_info`.
    """
    task_parameters: pulumi.Output[list]
    """
    A structure containing information about parameters required by the particular `task_arn`. Use `parameter` configuration blocks under the `task_invocation_parameters` configuration block instead. Conflicts with `task_invocation_parameters`. Documented below.
    """
    task_type: pulumi.Output[str]
    """
    The type of task being registered. The only allowed value is `RUN_COMMAND`.
    """
    window_id: pulumi.Output[str]
    """
    The Id of the maintenance window to register the task with.
    """
    def __init__(__self__, resource_name, opts=None, description=None, logging_info=None, max_concurrency=None, max_errors=None, name=None, priority=None, service_role_arn=None, targets=None, task_arn=None, task_invocation_parameters=None, task_parameters=None, task_type=None, window_id=None, __name__=None, __opts__=None):
        """
        Provides an SSM Maintenance Window Task resource
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: The description of the maintenance window task.
        :param pulumi.Input[dict] logging_info: A structure containing information about an Amazon S3 bucket to write instance-level logs to. Use `task_invocation_parameters` configuration block `run_command_parameters` configuration block `output_s3_*` arguments instead. Conflicts with `task_invocation_parameters`. Documented below.
        :param pulumi.Input[str] max_concurrency: The maximum number of targets this task can be run for in parallel.
        :param pulumi.Input[str] max_errors: The maximum number of errors allowed before this task stops being scheduled.
        :param pulumi.Input[str] name: The parameter name.
        :param pulumi.Input[float] priority: The priority of the task in the Maintenance Window, the lower the number the higher the priority. Tasks in a Maintenance Window are scheduled in priority order with tasks that have the same priority scheduled in parallel.
        :param pulumi.Input[str] service_role_arn: The IAM service role to assume during task execution.
        :param pulumi.Input[list] targets: The targets (either instances or window target ids). Instances are specified using Key=InstanceIds,Values=instanceid1,instanceid2. Window target ids are specified using Key=WindowTargetIds,Values=window target id1, window target id2.
        :param pulumi.Input[str] task_arn: The ARN of the task to execute.
        :param pulumi.Input[dict] task_invocation_parameters: The parameters for task execution. This argument is conflict with `task_parameters` and `logging_info`.
        :param pulumi.Input[list] task_parameters: A structure containing information about parameters required by the particular `task_arn`. Use `parameter` configuration blocks under the `task_invocation_parameters` configuration block instead. Conflicts with `task_invocation_parameters`. Documented below.
        :param pulumi.Input[str] task_type: The type of task being registered. The only allowed value is `RUN_COMMAND`.
        :param pulumi.Input[str] window_id: The Id of the maintenance window to register the task with.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/ssm_maintenance_window_task.html.markdown.
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

        __props__['logging_info'] = logging_info

        if max_concurrency is None:
            raise TypeError("Missing required property 'max_concurrency'")
        __props__['max_concurrency'] = max_concurrency

        if max_errors is None:
            raise TypeError("Missing required property 'max_errors'")
        __props__['max_errors'] = max_errors

        __props__['name'] = name

        __props__['priority'] = priority

        if service_role_arn is None:
            raise TypeError("Missing required property 'service_role_arn'")
        __props__['service_role_arn'] = service_role_arn

        if targets is None:
            raise TypeError("Missing required property 'targets'")
        __props__['targets'] = targets

        if task_arn is None:
            raise TypeError("Missing required property 'task_arn'")
        __props__['task_arn'] = task_arn

        __props__['task_invocation_parameters'] = task_invocation_parameters

        __props__['task_parameters'] = task_parameters

        if task_type is None:
            raise TypeError("Missing required property 'task_type'")
        __props__['task_type'] = task_type

        if window_id is None:
            raise TypeError("Missing required property 'window_id'")
        __props__['window_id'] = window_id

        super(MaintenanceWindowTask, __self__).__init__(
            'aws:ssm/maintenanceWindowTask:MaintenanceWindowTask',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

