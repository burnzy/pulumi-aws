// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides a CloudWatch Log Group resource.
 */
export class LogGroup extends fabric.Resource {
    /**
     * The Amazon Resource Name (ARN) specifying the log group.
     */
    public /*out*/ readonly arn: fabric.Computed<string>;
    /**
     * The name of the log group. If omitted, Terraform will assign a random, unique name.
     */
    public readonly name: fabric.Computed<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    public readonly namePrefix?: fabric.Computed<string>;
    /**
     * Specifies the number of days
     * you want to retain log events in the specified log group.
     */
    public readonly retentionInDays?: fabric.Computed<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags?: fabric.Computed<{[key: string]: any}>;

    /**
     * Create a LogGroup resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this LogGroup instance
     * @param args A collection of arguments for creating this LogGroup intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args?: LogGroupArgs, dependsOn?: fabric.Resource[]) {
        super("aws:cloudwatch/logGroup:LogGroup", urnName, {
            "name": args.name,
            "namePrefix": args.namePrefix,
            "retentionInDays": args.retentionInDays,
            "tags": args.tags,
            "arn": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a LogGroup resource.
 */
export interface LogGroupArgs {
    /**
     * The name of the log group. If omitted, Terraform will assign a random, unique name.
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    readonly namePrefix?: fabric.ComputedValue<string>;
    /**
     * Specifies the number of days
     * you want to retain log events in the specified log group.
     */
    readonly retentionInDays?: fabric.ComputedValue<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: fabric.ComputedValue<{[key: string]: any}>;
}

