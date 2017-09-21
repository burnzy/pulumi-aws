// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides a WAF Size Constraint Set Resource
 */
export class SizeConstraintSet extends fabric.Resource {
    /**
     * The name or description of the Size Constraint Set.
     */
    public readonly name: fabric.Computed<string>;
    /**
     * Specifies the parts of web requests that you want to inspect the size of.
     */
    public readonly sizeConstraints?: fabric.Computed<{ comparisonOperator: string, fieldToMatch: { data?: string, type: string }[], size: number, textTransformation: string }[]>;

    /**
     * Create a SizeConstraintSet resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this SizeConstraintSet instance
     * @param args A collection of arguments for creating this SizeConstraintSet intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args?: SizeConstraintSetArgs, dependsOn?: fabric.Resource[]) {
        super("aws:waf/sizeConstraintSet:SizeConstraintSet", urnName, {
            "name": args.name,
            "sizeConstraints": args.sizeConstraints,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a SizeConstraintSet resource.
 */
export interface SizeConstraintSetArgs {
    /**
     * The name or description of the Size Constraint Set.
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * Specifies the parts of web requests that you want to inspect the size of.
     */
    readonly sizeConstraints?: fabric.ComputedValue<{ comparisonOperator: fabric.ComputedValue<string>, fieldToMatch: fabric.ComputedValue<{ data?: fabric.ComputedValue<string>, type: fabric.ComputedValue<string> }>[], size: fabric.ComputedValue<number>, textTransformation: fabric.ComputedValue<string> }>[];
}

