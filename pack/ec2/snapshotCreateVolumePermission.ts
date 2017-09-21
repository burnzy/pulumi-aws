// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Adds permission to create volumes off of a given EBS Snapshot.
 */
export class SnapshotCreateVolumePermission extends fabric.Resource {
    /**
     * An AWS Account ID to add create volume permissions
     */
    public readonly accountId: fabric.Computed<string>;
    /**
     * A snapshot ID
     */
    public readonly snapshotId: fabric.Computed<string>;

    /**
     * Create a SnapshotCreateVolumePermission resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this SnapshotCreateVolumePermission instance
     * @param args A collection of arguments for creating this SnapshotCreateVolumePermission intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: SnapshotCreateVolumePermissionArgs, dependsOn?: fabric.Resource[]) {
        if (args.accountId === undefined) {
            throw new Error("Missing required property 'accountId'");
        }
        if (args.snapshotId === undefined) {
            throw new Error("Missing required property 'snapshotId'");
        }
        super("aws:ec2/snapshotCreateVolumePermission:SnapshotCreateVolumePermission", urnName, {
            "accountId": args.accountId,
            "snapshotId": args.snapshotId,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a SnapshotCreateVolumePermission resource.
 */
export interface SnapshotCreateVolumePermissionArgs {
    /**
     * An AWS Account ID to add create volume permissions
     */
    readonly accountId: fabric.ComputedValue<string>;
    /**
     * A snapshot ID
     */
    readonly snapshotId: fabric.ComputedValue<string>;
}

