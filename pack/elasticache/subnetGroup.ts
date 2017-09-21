// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides an ElastiCache Subnet Group resource.
 * 
 * ~> **NOTE:** ElastiCache Subnet Groups are only for use when working with an
 * ElastiCache cluster **inside** of a VPC. If you are on EC2 Classic, see the
 * [ElastiCache Security Group resource](elasticache_security_group.html).
 */
export class SubnetGroup extends fabric.Resource {
    /**
     * Description for the cache subnet group. Defaults to "Managed by Terraform".
     */
    public readonly description?: fabric.Computed<string>;
    /**
     * Name for the cache subnet group. Elasticache converts this name to lowercase.
     */
    public readonly name: fabric.Computed<string>;
    /**
     * List of VPC Subnet IDs for the cache subnet group
     */
    public readonly subnetIds: fabric.Computed<string[]>;

    /**
     * Create a SubnetGroup resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this SubnetGroup instance
     * @param args A collection of arguments for creating this SubnetGroup intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: SubnetGroupArgs, dependsOn?: fabric.Resource[]) {
        if (args.subnetIds === undefined) {
            throw new Error("Missing required property 'subnetIds'");
        }
        super("aws:elasticache/subnetGroup:SubnetGroup", urnName, {
            "description": args.description,
            "name": args.name,
            "subnetIds": args.subnetIds,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a SubnetGroup resource.
 */
export interface SubnetGroupArgs {
    /**
     * Description for the cache subnet group. Defaults to "Managed by Terraform".
     */
    readonly description?: fabric.ComputedValue<string>;
    /**
     * Name for the cache subnet group. Elasticache converts this name to lowercase.
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * List of VPC Subnet IDs for the cache subnet group
     */
    readonly subnetIds: fabric.ComputedValue<fabric.ComputedValue<string>>[];
}

