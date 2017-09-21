// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides a WAF Rule Resource
 */
export class Rule extends fabric.Resource {
    /**
     * The name or description for the Amazon CloudWatch metric of this rule.
     */
    public readonly metricName: fabric.Computed<string>;
    /**
     * The name or description of the rule.
     */
    public readonly name: fabric.Computed<string>;
    /**
     * One of ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects to include in a rule.
     */
    public readonly predicates?: fabric.Computed<{ dataId?: string, negated: boolean, type: string }[]>;

    /**
     * Create a Rule resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Rule instance
     * @param args A collection of arguments for creating this Rule intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: RuleArgs, dependsOn?: fabric.Resource[]) {
        if (args.metricName === undefined) {
            throw new Error("Missing required property 'metricName'");
        }
        super("aws:waf/rule:Rule", urnName, {
            "metricName": args.metricName,
            "name": args.name,
            "predicates": args.predicates,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Rule resource.
 */
export interface RuleArgs {
    /**
     * The name or description for the Amazon CloudWatch metric of this rule.
     */
    readonly metricName: fabric.ComputedValue<string>;
    /**
     * The name or description of the rule.
     */
    readonly name?: fabric.ComputedValue<string>;
    /**
     * One of ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects to include in a rule.
     */
    readonly predicates?: fabric.ComputedValue<{ dataId?: fabric.ComputedValue<string>, negated: fabric.ComputedValue<boolean>, type: fabric.ComputedValue<string> }>[];
}

