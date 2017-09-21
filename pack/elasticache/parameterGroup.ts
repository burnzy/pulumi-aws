// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides an ElastiCache parameter group resource.
 */
export class ParameterGroup extends fabric.Resource {
    /**
     * The description of the ElastiCache parameter group. Defaults to "Managed by Terraform".
     */
    public readonly description?: fabric.Computed<string>;
    /**
     * The family of the ElastiCache parameter group.
     */
    public readonly family: fabric.Computed<string>;
    /**
     * The name of the ElastiCache parameter.
     */
    public readonly name: fabric.Computed<string>;
    /**
     * A list of ElastiCache parameters to apply.
     */
    public readonly parameter?: fabric.Computed<{ name: string, value: string }[]>;

    /**
     * Create a ParameterGroup resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this ParameterGroup instance
     * @param args A collection of arguments for creating this ParameterGroup intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: ParameterGroupArgs, dependsOn?: fabric.Resource[]) {
        if (args.family === undefined) {
            throw new Error("Missing required property 'family'");
        }
        super("aws:elasticache/parameterGroup:ParameterGroup", urnName, {
            "description": args.description,
            "family": args.family,
            "name": args.name,
            "parameter": args.parameter,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a ParameterGroup resource.
 */
export interface ParameterGroupArgs {
    /**
     * The description of the ElastiCache parameter group. Defaults to "Managed by Terraform".
     */
    readonly description?: fabric.ComputedValue<string>;
    /**
     * The family of the ElastiCache parameter group.
     */
    readonly family: fabric.ComputedValue<string>;
    /**
     * The name of the ElastiCache parameter.
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * A list of ElastiCache parameters to apply.
     */
    readonly parameter?: fabric.ComputedValue<{ name: fabric.ComputedValue<string>, value: fabric.ComputedValue<string> }>[];
}

