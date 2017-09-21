// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides an ECS cluster.
 */
export class Cluster extends fabric.Resource {
    /**
     * The name of the cluster (up to 255 letters, numbers, hyphens, and underscores)
     */
    public readonly name: fabric.Computed<string>;

    /**
     * Create a Cluster resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Cluster instance
     * @param args A collection of arguments for creating this Cluster intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args?: ClusterArgs, dependsOn?: fabric.Resource[]) {
        super("aws:ecs/cluster:Cluster", urnName, {
            "name": args.name,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The name of the cluster (up to 255 letters, numbers, hyphens, and underscores)
     */
    readonly name?: fabric.ComputedValue<string>;
}

