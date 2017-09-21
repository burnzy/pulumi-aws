// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides an SSM Maintenance Window Target resource
 */
export class MaintenanceWindowTarget extends fabric.Resource {
    /**
     * User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this Maintenance Window.
     */
    public readonly ownerInformation?: fabric.Computed<string>;
    /**
     * The type of target being registered with the Maintenance Window. Possible values `INSTANCE`.
     */
    public readonly resourceType: fabric.Computed<string>;
    /**
     * The targets (either instances or tags). Instances are specified using Key=instanceids,Values=instanceid1,instanceid2. Tags are specified using Key=tag name,Values=tag value.
     */
    public readonly targets: fabric.Computed<{ key: string, values: string[] }[]>;
    /**
     * The Id of the maintenance window to register the target with.
     */
    public readonly windowId: fabric.Computed<string>;

    /**
     * Create a MaintenanceWindowTarget resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this MaintenanceWindowTarget instance
     * @param args A collection of arguments for creating this MaintenanceWindowTarget intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: MaintenanceWindowTargetArgs, dependsOn?: fabric.Resource[]) {
        if (args.resourceType === undefined) {
            throw new Error("Missing required property 'resourceType'");
        }
        if (args.targets === undefined) {
            throw new Error("Missing required property 'targets'");
        }
        if (args.windowId === undefined) {
            throw new Error("Missing required property 'windowId'");
        }
        super("aws:ssm/maintenanceWindowTarget:MaintenanceWindowTarget", urnName, {
            "ownerInformation": args.ownerInformation,
            "resourceType": args.resourceType,
            "targets": args.targets,
            "windowId": args.windowId,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a MaintenanceWindowTarget resource.
 */
export interface MaintenanceWindowTargetArgs {
    /**
     * User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this Maintenance Window.
     */
    readonly ownerInformation?: fabric.ComputedValue<string>;
    /**
     * The type of target being registered with the Maintenance Window. Possible values `INSTANCE`.
     */
    readonly resourceType: fabric.ComputedValue<string>;
    /**
     * The targets (either instances or tags). Instances are specified using Key=instanceids,Values=instanceid1,instanceid2. Tags are specified using Key=tag name,Values=tag value.
     */
    readonly targets: fabric.ComputedValue<{ key: fabric.ComputedValue<string>, values: fabric.ComputedValue<fabric.ComputedValue<string>>[] }>[];
    /**
     * The Id of the maintenance window to register the target with.
     */
    readonly windowId: fabric.ComputedValue<string>;
}

