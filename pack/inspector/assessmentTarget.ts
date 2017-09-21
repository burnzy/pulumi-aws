// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides a Inspector assessment target
 */
export class AssessmentTarget extends fabric.Resource {
    /**
     * The target assessment ARN.
     */
    public /*out*/ readonly arn: fabric.Computed<string>;
    /**
     * The name of the assessment target.
     * * `resource_group_arn` (Required )- The resource group ARN stating tags for instance matching.
     */
    public readonly name: fabric.Computed<string>;
    public readonly resourceGroupArn: fabric.Computed<string>;

    /**
     * Create a AssessmentTarget resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this AssessmentTarget instance
     * @param args A collection of arguments for creating this AssessmentTarget intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: AssessmentTargetArgs, dependsOn?: fabric.Resource[]) {
        if (args.resourceGroupArn === undefined) {
            throw new Error("Missing required property 'resourceGroupArn'");
        }
        super("aws:inspector/assessmentTarget:AssessmentTarget", urnName, {
            "name": args.name,
            "resourceGroupArn": args.resourceGroupArn,
            "arn": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a AssessmentTarget resource.
 */
export interface AssessmentTargetArgs {
    /**
     * The name of the assessment target.
     * * `resource_group_arn` (Required )- The resource group ARN stating tags for instance matching.
     */
    readonly name?: fabric.ComputedValue<string>;
    readonly resourceGroupArn: fabric.ComputedValue<string>;
}

