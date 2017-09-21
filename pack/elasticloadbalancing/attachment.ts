// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

/**
 * Provides an Elastic Load Balancer Attachment resource.
 * 
 * ~> **NOTE on ELB Instances and ELB Attachments:** Terraform currently provides
 * both a standalone ELB Attachment resource (describing an instance attached to
 * an ELB), and an [Elastic Load Balancer resource](elb.html) with
 * `instances` defined in-line. At this time you cannot use an ELB with in-line
 * instances in conjunction with an ELB Attachment resource. Doing so will cause a
 * conflict and will overwrite attachments.
 */
export class Attachment extends fabric.Resource {
    /**
     * The name of the ELB.
     */
    public readonly elb: fabric.Computed<string>;
    /**
     * Instance ID to place in the ELB pool.
     */
    public readonly instance: fabric.Computed<string>;

    /**
     * Create a Attachment resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Attachment instance
     * @param args A collection of arguments for creating this Attachment intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: AttachmentArgs, dependsOn?: fabric.Resource[]) {
        if (args.elb === undefined) {
            throw new Error("Missing required property 'elb'");
        }
        if (args.instance === undefined) {
            throw new Error("Missing required property 'instance'");
        }
        super("aws:elasticloadbalancing/attachment:Attachment", urnName, {
            "elb": args.elb,
            "instance": args.instance,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Attachment resource.
 */
export interface AttachmentArgs {
    /**
     * The name of the ELB.
     */
    readonly elb: fabric.ComputedValue<string>;
    /**
     * Instance ID to place in the ELB pool.
     */
    readonly instance: fabric.ComputedValue<string>;
}

