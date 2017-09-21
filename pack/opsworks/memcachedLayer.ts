// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides an OpsWorks memcached layer resource.
 */
export class MemcachedLayer extends fabric.Resource {
    /**
     * Amount of memory to allocate for the cache on each instance, in megabytes. Defaults to 512MB.
     */
    public readonly allocatedMemory?: fabric.Computed<number>;
    /**
     * Whether to automatically assign an elastic IP address to the layer's instances.
     */
    public readonly autoAssignElasticIps?: fabric.Computed<boolean>;
    /**
     * For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
     */
    public readonly autoAssignPublicIps?: fabric.Computed<boolean>;
    /**
     * Whether to enable auto-healing for the layer.
     */
    public readonly autoHealing?: fabric.Computed<boolean>;
    public readonly customConfigureRecipes?: fabric.Computed<string[]>;
    public readonly customDeployRecipes?: fabric.Computed<string[]>;
    /**
     * The ARN of an IAM profile that will be used for the layer's instances.
     */
    public readonly customInstanceProfileArn?: fabric.Computed<string>;
    /**
     * Custom JSON attributes to apply to the layer.
     */
    public readonly customJson?: fabric.Computed<string>;
    /**
     * Ids for a set of security groups to apply to the layer's instances.
     */
    public readonly customSecurityGroupIds?: fabric.Computed<string[]>;
    public readonly customSetupRecipes?: fabric.Computed<string[]>;
    public readonly customShutdownRecipes?: fabric.Computed<string[]>;
    public readonly customUndeployRecipes?: fabric.Computed<string[]>;
    /**
     * Whether to enable Elastic Load Balancing connection draining.
     */
    public readonly drainElbOnShutdown?: fabric.Computed<boolean>;
    /**
     * `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
     */
    public readonly ebsVolume?: fabric.Computed<{ iops?: number, mountPoint: string, numberOfDisks: number, raidLevel?: string, size: number, type?: string }[]>;
    /**
     * Name of an Elastic Load Balancer to attach to this layer
     */
    public readonly elasticLoadBalancer?: fabric.Computed<string>;
    /**
     * The id of the layer.
     */
    public /*out*/ readonly layerId: fabric.Computed<string>;
    /**
     * Whether to install OS and package updates on each instance when it boots.
     */
    public readonly installUpdatesOnBoot?: fabric.Computed<boolean>;
    /**
     * The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
     */
    public readonly instanceShutdownTimeout?: fabric.Computed<number>;
    /**
     * A human-readable name for the layer.
     */
    public readonly name: fabric.Computed<string>;
    /**
     * The id of the stack the layer will belong to.
     */
    public readonly stackId: fabric.Computed<string>;
    /**
     * Names of a set of system packages to install on the layer's instances.
     */
    public readonly systemPackages?: fabric.Computed<string[]>;
    /**
     * Whether to use EBS-optimized instances.
     */
    public readonly useEbsOptimizedInstances?: fabric.Computed<boolean>;

    /**
     * Create a MemcachedLayer resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this MemcachedLayer instance
     * @param args A collection of arguments for creating this MemcachedLayer intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: MemcachedLayerArgs, dependsOn?: fabric.Resource[]) {
        if (args.stackId === undefined) {
            throw new Error("Missing required property 'stackId'");
        }
        super("aws:opsworks/memcachedLayer:MemcachedLayer", urnName, {
            "allocatedMemory": args.allocatedMemory,
            "autoAssignElasticIps": args.autoAssignElasticIps,
            "autoAssignPublicIps": args.autoAssignPublicIps,
            "autoHealing": args.autoHealing,
            "customConfigureRecipes": args.customConfigureRecipes,
            "customDeployRecipes": args.customDeployRecipes,
            "customInstanceProfileArn": args.customInstanceProfileArn,
            "customJson": args.customJson,
            "customSecurityGroupIds": args.customSecurityGroupIds,
            "customSetupRecipes": args.customSetupRecipes,
            "customShutdownRecipes": args.customShutdownRecipes,
            "customUndeployRecipes": args.customUndeployRecipes,
            "drainElbOnShutdown": args.drainElbOnShutdown,
            "ebsVolume": args.ebsVolume,
            "elasticLoadBalancer": args.elasticLoadBalancer,
            "installUpdatesOnBoot": args.installUpdatesOnBoot,
            "instanceShutdownTimeout": args.instanceShutdownTimeout,
            "name": args.name,
            "stackId": args.stackId,
            "systemPackages": args.systemPackages,
            "useEbsOptimizedInstances": args.useEbsOptimizedInstances,
            "layerId": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a MemcachedLayer resource.
 */
export interface MemcachedLayerArgs {
    /**
     * Amount of memory to allocate for the cache on each instance, in megabytes. Defaults to 512MB.
     */
    readonly allocatedMemory?: fabric.ComputedValue<number>;
    /**
     * Whether to automatically assign an elastic IP address to the layer's instances.
     */
    readonly autoAssignElasticIps?: fabric.ComputedValue<boolean>;
    /**
     * For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
     */
    readonly autoAssignPublicIps?: fabric.ComputedValue<boolean>;
    /**
     * Whether to enable auto-healing for the layer.
     */
    readonly autoHealing?: fabric.ComputedValue<boolean>;
    readonly customConfigureRecipes?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    readonly customDeployRecipes?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    /**
     * The ARN of an IAM profile that will be used for the layer's instances.
     */
    readonly customInstanceProfileArn?: fabric.ComputedValue<string>;
    /**
     * Custom JSON attributes to apply to the layer.
     */
    readonly customJson?: fabric.ComputedValue<string>;
    /**
     * Ids for a set of security groups to apply to the layer's instances.
     */
    readonly customSecurityGroupIds?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    readonly customSetupRecipes?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    readonly customShutdownRecipes?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    readonly customUndeployRecipes?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    /**
     * Whether to enable Elastic Load Balancing connection draining.
     */
    readonly drainElbOnShutdown?: fabric.ComputedValue<boolean>;
    /**
     * `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
     */
    readonly ebsVolume?: fabric.ComputedValue<{ iops?: fabric.ComputedValue<number>, mountPoint: fabric.ComputedValue<string>, numberOfDisks: fabric.ComputedValue<number>, raidLevel?: fabric.ComputedValue<string>, size: fabric.ComputedValue<number>, type?: fabric.ComputedValue<string> }>[];
    /**
     * Name of an Elastic Load Balancer to attach to this layer
     */
    readonly elasticLoadBalancer?: fabric.ComputedValue<string>;
    /**
     * Whether to install OS and package updates on each instance when it boots.
     */
    readonly installUpdatesOnBoot?: fabric.ComputedValue<boolean>;
    /**
     * The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
     */
    readonly instanceShutdownTimeout?: fabric.ComputedValue<number>;
    /**
     * A human-readable name for the layer.
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * The id of the stack the layer will belong to.
     */
    readonly stackId: fabric.ComputedValue<string>;
    /**
     * Names of a set of system packages to install on the layer's instances.
     */
    readonly systemPackages?: fabric.ComputedValue<fabric.ComputedValue<string>>[];
    /**
     * Whether to use EBS-optimized instances.
     */
    readonly useEbsOptimizedInstances?: fabric.ComputedValue<boolean>;
}

