// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides an Application AutoScaling Policy resource.
 */
export class Policy extends fabric.Resource {
    /**
     * The scaling policy's adjustment type.
     */
    public readonly adjustmentType: fabric.Computed<string>;
    public readonly alarms?: fabric.Computed<string[]>;
    /**
     * The ARN assigned by AWS to the scaling policy.
     */
    public /*out*/ readonly arn: fabric.Computed<string>;
    public readonly cooldown: fabric.Computed<number>;
    public readonly metricAggregationType: fabric.Computed<string>;
    public readonly minAdjustmentMagnitude?: fabric.Computed<number>;
    /**
     * The name of the policy.
     */
    public readonly name: fabric.Computed<string>;
    /**
     * Defaults to "StepScaling" because it is the only option available.
     */
    public readonly policyType?: fabric.Computed<string>;
    /**
     * The resource type and unique identifier string for the resource associated with the scaling policy. For Amazon ECS services, this value is the resource type, followed by the cluster name and service name, such as `service/default/sample-webapp`. For Amazon EC2 Spot fleet requests, the resource type is `spot-fleet-request`, and the identifier is the Spot fleet request ID; for example, `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
     */
    public readonly resourceId: fabric.Computed<string>;
    /**
     * The scalable dimension of the scalable target. The scalable dimension contains the service namespace,   resource  type, and scaling property, such as `ecs:service:DesiredCount` for the desired task count of an Amazon ECS service, or `ec2:spot-fleet-request:TargetCapacity` for the target capacity of an Amazon EC2 Spot fleet request.
     */
    public readonly scalableDimension: fabric.Computed<string>;
    /**
     * The AWS service namespace of the scalable target. Valid values are `ecs` for Amazon ECS services and `ec2` Amazon EC2 Spot fleet requests.
     */
    public readonly serviceNamespace: fabric.Computed<string>;
    public readonly stepAdjustment?: fabric.Computed<{ metricIntervalLowerBound?: string, metricIntervalUpperBound?: string, scalingAdjustment: number }[]>;

    /**
     * Create a Policy resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Policy instance
     * @param args A collection of arguments for creating this Policy intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: PolicyArgs, dependsOn?: fabric.Resource[]) {
        if (args.adjustmentType === undefined) {
            throw new Error("Missing required property 'adjustmentType'");
        }
        if (args.cooldown === undefined) {
            throw new Error("Missing required property 'cooldown'");
        }
        if (args.metricAggregationType === undefined) {
            throw new Error("Missing required property 'metricAggregationType'");
        }
        if (args.resourceId === undefined) {
            throw new Error("Missing required property 'resourceId'");
        }
        if (args.scalableDimension === undefined) {
            throw new Error("Missing required property 'scalableDimension'");
        }
        if (args.serviceNamespace === undefined) {
            throw new Error("Missing required property 'serviceNamespace'");
        }
        super("aws:appautoscaling/policy:Policy", urnName, {
            "adjustmentType": args.adjustmentType,
            "alarms": args.alarms,
            "cooldown": args.cooldown,
            "metricAggregationType": args.metricAggregationType,
            "minAdjustmentMagnitude": args.minAdjustmentMagnitude,
            "name": args.name,
            "policyType": args.policyType,
            "resourceId": args.resourceId,
            "scalableDimension": args.scalableDimension,
            "serviceNamespace": args.serviceNamespace,
            "stepAdjustment": args.stepAdjustment,
            "arn": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    readonly adjustmentType: fabric.ComputedValue<string>;
    readonly alarms?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    readonly cooldown: fabric.ComputedValue<number>;
    readonly metricAggregationType: fabric.ComputedValue<string>;
    readonly minAdjustmentMagnitude?: fabric.ComputedValue<number>;
    /**
     * The name of the policy.
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * Defaults to "StepScaling" because it is the only option available.
     */
    readonly policyType?: fabric.ComputedValue<string>;
    /**
     * The resource type and unique identifier string for the resource associated with the scaling policy. For Amazon ECS services, this value is the resource type, followed by the cluster name and service name, such as `service/default/sample-webapp`. For Amazon EC2 Spot fleet requests, the resource type is `spot-fleet-request`, and the identifier is the Spot fleet request ID; for example, `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
     */
    readonly resourceId: fabric.ComputedValue<string>;
    /**
     * The scalable dimension of the scalable target. The scalable dimension contains the service namespace,   resource  type, and scaling property, such as `ecs:service:DesiredCount` for the desired task count of an Amazon ECS service, or `ec2:spot-fleet-request:TargetCapacity` for the target capacity of an Amazon EC2 Spot fleet request.
     */
    readonly scalableDimension: fabric.ComputedValue<string>;
    /**
     * The AWS service namespace of the scalable target. Valid values are `ecs` for Amazon ECS services and `ec2` Amazon EC2 Spot fleet requests.
     */
    readonly serviceNamespace: fabric.ComputedValue<string>;
    readonly stepAdjustment?: fabric.ComputedValue<{ metricIntervalLowerBound?: fabric.ComputedValue<string>, metricIntervalUpperBound?: fabric.ComputedValue<string>, scalingAdjustment: fabric.ComputedValue<number> }>[];
}

